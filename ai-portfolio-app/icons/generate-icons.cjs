/* Dependency-free PNG icon generator for the AI Portfolio app.
   Draws the "portfolio bars + trend line" mark to RGBA buffers and
   encodes them as PNG using Node's built-in zlib. */
const zlib = require("zlib");
const fs = require("fs");
const path = require("path");

function makeCanvas(size) {
  return { w: size, h: size, data: new Uint8Array(size * size * 4) };
}
function px(c, x, y, r, g, b, a) {
  x = Math.round(x); y = Math.round(y);
  if (x < 0 || y < 0 || x >= c.w || y >= c.h) return;
  const i = (y * c.w + x) * 4;
  const sa = a / 255;
  const da = c.data[i + 3] / 255;
  const oa = sa + da * (1 - sa);
  if (oa === 0) return;
  c.data[i] = (r * sa + c.data[i] * da * (1 - sa)) / oa;
  c.data[i + 1] = (g * sa + c.data[i + 1] * da * (1 - sa)) / oa;
  c.data[i + 2] = (b * sa + c.data[i + 2] * da * (1 - sa)) / oa;
  c.data[i + 3] = oa * 255;
}
function lerp(a, b, t) { return a + (b - a) * t; }
function mix(c1, c2, t) { return [lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t)]; }

function fillBg(c, rounded) {
  const radius = rounded ? c.w * 0.22 : 0;
  const top = [0x11, 0x17, 0x3a], bot = [0x0b, 0x10, 0x20];
  for (let y = 0; y < c.h; y++) {
    const col = mix(top, bot, y / c.h);
    for (let x = 0; x < c.w; x++) {
      let a = 255;
      if (rounded) {
        // rounded-rect mask with simple AA
        const dx = Math.max(radius - x, x - (c.w - radius), 0);
        const dy = Math.max(radius - y, y - (c.h - radius), 0);
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > radius) a = 0;
        else if (d > radius - 1.5) a = 255 * (radius - d) / 1.5;
      }
      // soft glow top-right
      const gx = (x - c.w * 0.8) / (c.w * 0.7);
      const gy = (y - c.h * 0.15) / (c.h * 0.7);
      const gd = Math.sqrt(gx * gx + gy * gy);
      const glow = Math.max(0, 1 - gd) * 0.5;
      const cc = mix(col, [0x6d, 0x8b, 0xff], glow);
      px(c, x, y, cc[0], cc[1], cc[2], a);
    }
  }
}
function roundRect(c, x0, y0, w, h, r, colorAt) {
  for (let y = y0; y < y0 + h; y++) {
    for (let x = x0; x < x0 + w; x++) {
      const dx = Math.max(x0 + r - x, x - (x0 + w - r), 0);
      const dy = Math.max(y0 + r - y, y - (y0 + h - r), 0);
      const d = Math.sqrt(dx * dx + dy * dy);
      let a = 255;
      if (d > r) a = 0; else if (d > r - 1.2) a = 255 * (r - d) / 1.2;
      if (a <= 0) continue;
      const [cr, cg, cb, ca] = colorAt((y - y0) / h);
      px(c, x, y, cr, cg, cb, (a / 255) * (ca == null ? 255 : ca));
    }
  }
}
function thickLine(c, pts, width, color) {
  const half = width / 2;
  for (let s = 0; s < pts.length - 1; s++) {
    const [x1, y1] = pts[s], [x2, y2] = pts[s + 1];
    const len = Math.hypot(x2 - x1, y2 - y1);
    for (let t = 0; t <= len; t += 0.5) {
      const x = lerp(x1, x2, t / len), y = lerp(y1, y2, t / len);
      for (let oy = -half; oy <= half; oy++)
        for (let ox = -half; ox <= half; ox++)
          if (ox * ox + oy * oy <= half * half) px(c, x + ox, y + oy, color[0], color[1], color[2], 235);
    }
  }
}
function disc(c, cx, cy, r, color) {
  for (let y = -r; y <= r; y++)
    for (let x = -r; x <= r; x++)
      if (x * x + y * y <= r * r) px(c, cx + x, cy + y, color[0], color[1], color[2], 255);
}

function draw(size, maskable) {
  const c = makeCanvas(size);
  fillBg(c, !maskable);
  const S = size / 512;
  const inset = maskable ? 0.62 : 1; // shrink content for maskable safe zone
  const cx = size / 2, cy = size / 2;
  function P(x, y) { return [cx + (x - 256) * S * inset, cy + (y - 256) * S * inset]; }
  const blue = [0x5b, 0x6b, 0xff], violet = [0xa7, 0x8b, 0xfa];
  const bars = [
    [120, 300, 48, 92, 0.85], [190, 244, 48, 148, 0.92],
    [260, 196, 48, 196, 1], [330, 140, 48, 252, 1],
  ];
  bars.forEach(([x, y, w, hh, op]) => {
    const [px0, py0] = P(x, y);
    roundRect(c, px0, py0, w * S * inset, hh * S * inset, 14 * S * inset, (t) => {
      const m = mix(violet, blue, t); return [m[0], m[1], m[2], 255 * op];
    });
  });
  const line = [[132, 288], [212, 236], [284, 188], [354, 128]].map(([x, y]) => P(x, y));
  thickLine(c, line, Math.max(2, 14 * S * inset), [0xee, 0xf2, 0xff]);
  const [ex, ey] = P(354, 128);
  disc(c, Math.round(ex), Math.round(ey), Math.max(2, 16 * S * inset), [0xee, 0xf2, 0xff]);
  return c;
}

/* ---- minimal PNG encoder ---- */
function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xEDB88320 & -(c & 1));
  }
  return ~c >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const t = Buffer.from(type, "ascii");
  const body = Buffer.concat([t, data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}
function encodePNG(c) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(c.w, 0); ihdr.writeUInt32BE(c.h, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const stride = c.w * 4;
  const raw = Buffer.alloc((stride + 1) * c.h);
  for (let y = 0; y < c.h; y++) {
    raw[y * (stride + 1)] = 0;
    Buffer.from(c.data.buffer, y * stride, stride).copy(raw, y * (stride + 1) + 1);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);
}

const out = __dirname;
fs.writeFileSync(path.join(out, "icon-192.png"), encodePNG(draw(192, false)));
fs.writeFileSync(path.join(out, "icon-512.png"), encodePNG(draw(512, false)));
fs.writeFileSync(path.join(out, "icon-180.png"), encodePNG(draw(180, false)));
fs.writeFileSync(path.join(out, "icon-maskable-512.png"), encodePNG(draw(512, true)));
console.log("icons written");
