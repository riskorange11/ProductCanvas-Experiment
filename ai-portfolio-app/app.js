/* ============================================================
   AI Portfolio Management — mobile app controller
   Hash router · block renderer · search · bookmarks
   ============================================================ */
(function () {
  "use strict";

  const WIKI = window.WIKI;
  const TOOLS = window.TOOLS || [];
  const $ = (s, r) => (r || document).querySelector(s);

  const screen = $("#screen");
  const appbar = $("#appbar");
  const appbarTitle = $("#appbarTitle");
  const appbarEyebrow = $("#appbarEyebrow");
  const backBtn = $("#backBtn");
  const progressBar = $("#progressBar");

  /* ---------- flat index of subsections ---------- */
  const FLAT = [];
  WIKI.sections.forEach((sec) => {
    sec.subsections.forEach((sub) => {
      FLAT.push({ sec, sub });
    });
  });
  const flatIndex = (secId, subId) =>
    FLAT.findIndex((f) => f.sec.id === secId && f.sub.id === subId);

  /* ---------- bookmarks ---------- */
  const BM_KEY = "aipm.bookmarks.v1";
  function getBookmarks() {
    try { return JSON.parse(localStorage.getItem(BM_KEY) || "[]"); }
    catch (e) { return []; }
  }
  function setBookmarks(list) { localStorage.setItem(BM_KEY, JSON.stringify(list)); }
  function bmKey(secId, subId) { return secId + "/" + subId; }
  function isBookmarked(secId, subId) { return getBookmarks().includes(bmKey(secId, subId)); }
  function toggleBookmark(secId, subId) {
    const list = getBookmarks();
    const k = bmKey(secId, subId);
    const i = list.indexOf(k);
    if (i >= 0) { list.splice(i, 1); setBookmarks(list); return false; }
    list.push(k); setBookmarks(list); return true;
  }

  /* ---------- toast ---------- */
  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
  }

  /* ---------- dom helper ---------- */
  function h(tag, attrs, kids) {
    const n = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === "class") n.className = attrs[k];
      else if (k === "html") n.innerHTML = attrs[k];
      else if (k.startsWith("on") && typeof attrs[k] === "function") n.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach((c) => { if (c != null) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* ============================================================
     Block renderer (consumes data.js block types)
     ============================================================ */
  function renderBlock(b) {
    switch (b.t) {
      case "lead":
        return h("div", { class: "block block--lead" }, [
          b.label ? h("span", { class: "label" }, [b.label]) : null,
          document.createTextNode(b.text),
        ]);
      case "p":
        return h("div", { class: "block" }, [h("p", {}, [b.text])]);
      case "h":
        return h("h5", { class: "subhead" }, [b.text]);
      case "list": {
        const ul = h(b.ordered ? "ol" : "ul", { class: "bullets" });
        b.items.forEach((it) => {
          if (typeof it === "string") ul.appendChild(h("li", {}, [it]));
          else ul.appendChild(h("li", { html: "<b>" + esc(it.b) + "</b> — " + esc(it.text) }));
        });
        return h("div", { class: "block" }, [ul]);
      }
      case "kv": {
        const wrap = h("div", { class: "block kv" });
        b.items.forEach((it) =>
          wrap.appendChild(h("div", { class: "kv__row" }, [
            h("div", { class: "kv__k" }, [it.k]),
            h("div", { class: "kv__v" }, [it.v]),
          ]))
        );
        return wrap;
      }
      case "formula":
        return h("div", { class: "block formula" }, [
          b.label ? h("span", { class: "label" }, [b.label]) : null,
          h("code", {}, [b.text]),
        ]);
      case "note": {
        const icons = {
          info: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 11v5M12 8h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
          good: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 12.5l2.5 2.5L16 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
          warn: '<path d="M12 3l9 16H3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 10v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
          bad: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
        };
        const kind = b.kind || "info";
        return h("div", { class: "block note note--" + kind }, [
          h("span", { class: "note__icon", html: '<svg viewBox="0 0 24 24" width="22" height="22">' + (icons[kind] || icons.info) + "</svg>" }),
          h("div", { class: "note__body" }, [
            b.title ? h("div", { class: "note__title" }, [b.title]) : null,
            h("div", { class: "note__text" }, [b.text]),
          ]),
        ]);
      }
      case "cards": {
        const wrap = h("div", { class: "block cards" });
        b.items.forEach((c) => {
          const top = h("div", { class: "info-card__top" }, [
            h("div", { class: "info-card__title" }, [c.title]),
            c.tag ? h("div", { class: "info-card__tag" }, [c.tag]) : null,
          ]);
          const card = h("div", { class: "info-card" }, [top]);
          if (c.rows) {
            const kv = h("div", { class: "kv" });
            c.rows.forEach((r) => kv.appendChild(h("div", { class: "kv__row" }, [
              h("div", { class: "kv__k" }, [r.k]),
              h("div", { class: "kv__v" }, [r.v]),
            ])));
            card.appendChild(kv);
          }
          if (c.text) card.appendChild(h("div", { class: "info-card__text" }, [c.text]));
          wrap.appendChild(card);
        });
        return wrap;
      }
      case "table": {
        const table = h("table", { class: "tbl" });
        const thead = h("thead", {}, [h("tr", {}, b.head.map((x) => h("th", {}, [x])))]);
        const tbody = h("tbody", {}, b.rows.map((row) => h("tr", {}, row.map((cell) => h("td", {}, [cell])))));
        table.appendChild(thead); table.appendChild(tbody);
        return h("div", { class: "block table-wrap" }, [table]);
      }
      case "steps": {
        const wrap = h("div", { class: "block steps" });
        b.items.forEach((s) => {
          const step = h("div", { class: "step" }, [h("h6", {}, [s.title])]);
          if (s.text) step.appendChild(h("p", {}, [s.text]));
          if (s.list) {
            const ul = h("ul", { class: "bullets" });
            s.list.forEach((it) => ul.appendChild(h("li", {}, [it])));
            step.appendChild(ul);
          }
          wrap.appendChild(step);
        });
        return wrap;
      }
      default:
        return document.createTextNode("");
    }
  }

  /* ============================================================
     Views
     ============================================================ */
  function setAccent(accent) {
    screen.className = "screen" + (accent ? " accent-" + accent : "");
  }
  function setBar(eyebrow, title, showBack) {
    appbarEyebrow.textContent = eyebrow;
    appbarTitle.textContent = title;
    backBtn.hidden = !showBack;
  }

  function viewHome() {
    setAccent("indigo");
    setBar("AI Portfolio", "Management", false);
    const m = WIKI.meta;
    const totalSubs = FLAT.length;

    const view = h("div", { class: "view" });
    view.appendChild(h("section", { class: "hero" }, [
      h("div", { class: "hero__eyebrow" }, [m.version]),
      h("h2", {}, [m.title]),
      h("p", {}, [m.valueProp]),
      h("div", { class: "hero__meta" }, [
        h("span", { class: "hero__chip" }, ["GSIB context"]),
        h("span", { class: "hero__chip" }, ["3 phases"]),
        h("span", { class: "hero__chip" }, ["36 months"]),
      ]),
    ]));

    view.appendChild(h("div", { class: "stats" }, [
      h("div", { class: "stat" }, [h("b", {}, [String(WIKI.sections.length)]), h("span", {}, ["Sections"])]),
      h("div", { class: "stat" }, [h("b", {}, [String(totalSubs)]), h("span", {}, ["Topics"])]),
      h("div", { class: "stat" }, [h("b", {}, [String(TOOLS.length)]), h("span", {}, ["Calculators"])]),
    ]));

    // Phase quick-jump
    view.appendChild(h("div", { class: "eyebrow-row" }, [h("h3", {}, ["Browse by section"]), h("a", { href: "#/sections" }, ["All →"])]));
    WIKI.sections.forEach((sec) => view.appendChild(sectionCard(sec)));

    view.appendChild(h("div", { class: "eyebrow-row" }, [h("h3", {}, ["Interactive tools"]), h("a", { href: "#/tools" }, ["All →"])]));
    TOOLS.slice(0, 3).forEach((t) => view.appendChild(toolCard(t)));

    mount(view);
  }

  function sectionCard(sec) {
    return h("button", {
      class: "sec-card accent-" + sec.accent,
      onclick: () => go("#/section/" + sec.id),
    }, [
      h("div", { class: "sec-card__badge" }, [sec.tag]),
      h("div", { class: "sec-card__body" }, [
        h("div", { class: "sec-card__phase" }, [sec.phase]),
        h("h4", {}, [sec.title]),
        h("p", {}, [sec.summary]),
      ]),
      h("div", { class: "sec-card__chev", html: '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' }),
    ]);
  }

  function toolCard(t) {
    return h("button", {
      class: "sec-card " + (t.accent || ""),
      onclick: () => go("#/tool/" + t.id),
    }, [
      h("div", { class: "sec-card__badge", html: '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 005.4-5.4l-2.4 2.4-2.1-.6-.6-2.1z" fill="none" stroke="#0b1020" stroke-width="2" stroke-linejoin="round"/></svg>' }),
      h("div", { class: "sec-card__body" }, [
        h("h4", {}, [t.title]),
        h("p", {}, [t.desc]),
      ]),
      h("div", { class: "sec-card__chev", html: '<svg viewBox="0 0 24 24" width="20" height="20"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' }),
    ]);
  }

  function viewSections() {
    setAccent("indigo");
    setBar("Contents", "All Sections", false);
    const view = h("div", { class: "view" });
    view.appendChild(h("div", { class: "eyebrow-row" }, [h("h3", {}, ["The 36-month journey"])]));
    WIKI.sections.forEach((sec) => view.appendChild(sectionCard(sec)));
    mount(view);
  }

  function viewSection(secId) {
    const sec = WIKI.sections.find((s) => s.id === secId);
    if (!sec) return viewHome();
    setAccent(sec.accent);
    setBar("Section " + sec.tag, sec.title, true);

    const view = h("div", { class: "view" });
    view.appendChild(h("section", { class: "hero" }, [
      h("div", { class: "hero__eyebrow" }, [sec.phase]),
      h("h2", {}, [sec.title]),
      h("p", {}, [sec.summary]),
    ]));
    view.appendChild(h("div", { class: "eyebrow-row" }, [h("h3", {}, [sec.subsections.length + " topics"])]));
    const list = h("div", { class: "sub-list" });
    sec.subsections.forEach((sub, i) => {
      list.appendChild(h("button", {
        class: "sub-item",
        onclick: () => go("#/article/" + sec.id + "/" + sub.id),
      }, [
        h("div", { class: "sub-item__n" }, [String(i + 1)]),
        h("h4", {}, [sub.title]),
        h("div", { class: "sub-item__chev", html: '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' }),
      ]));
    });
    view.appendChild(list);
    mount(view);
  }

  function viewArticle(secId, subId) {
    const idx = flatIndex(secId, subId);
    if (idx < 0) return viewHome();
    const { sec, sub } = FLAT[idx];
    setAccent(sec.accent);
    setBar("Section " + sec.tag, sub.title, true);

    const view = h("div", { class: "view" });
    const article = h("div", { class: "article" });
    article.appendChild(h("div", { class: "article__head" }, [
      h("div", { class: "article__crumb" }, [sec.title]),
      h("h1", { class: "article__title" }, [sub.title]),
    ]));

    // save button
    const saved = isBookmarked(secId, subId);
    const saveBtn = h("button", {
      class: "btn-save" + (saved ? " is-saved" : ""),
      onclick: function () {
        const now = toggleBookmark(secId, subId);
        this.classList.toggle("is-saved", now);
        this.querySelector("span").textContent = now ? "Saved" : "Save";
        toast(now ? "Saved to bookmarks" : "Removed bookmark");
      },
    }, [
      h("span", { class: "ic", html: '<svg viewBox="0 0 24 24"><path d="M6 4h12v16l-6-4-6 4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' }),
      h("span", {}, [saved ? "Saved" : "Save"]),
    ]);
    article.appendChild(h("div", { class: "save-row" }, [saveBtn]));

    sub.blocks.forEach((b) => article.appendChild(renderBlock(b)));

    // prev / next
    const prev = idx > 0 ? FLAT[idx - 1] : null;
    const next = idx < FLAT.length - 1 ? FLAT[idx + 1] : null;
    const nav = h("div", { class: "art-nav" }, [
      h("button", {
        onclick: prev ? () => go("#/article/" + prev.sec.id + "/" + prev.sub.id) : null,
        disabled: prev ? null : "disabled",
      }, [
        h("span", { class: "dir" }, ["← Previous"]),
        h("span", { class: "ttl" }, [prev ? prev.sub.title : ""]),
      ]),
      h("button", {
        class: "next",
        onclick: next ? () => go("#/article/" + next.sec.id + "/" + next.sub.id) : null,
        disabled: next ? null : "disabled",
      }, [
        h("span", { class: "dir" }, ["Next →"]),
        h("span", { class: "ttl" }, [next ? next.sub.title : ""]),
      ]),
    ]);
    article.appendChild(nav);

    view.appendChild(article);
    mount(view);
  }

  function viewTools() {
    setAccent("violet");
    setBar("Toolkit", "Interactive Tools", false);
    const view = h("div", { class: "view" });
    view.appendChild(h("section", { class: "hero" }, [
      h("div", { class: "hero__eyebrow" }, ["Calculators"]),
      h("h2", {}, ["Run the numbers"]),
      h("p", {}, ["Live calculators for the framework's core formulas — scores update as you type."]),
    ]));
    view.appendChild(h("div", { class: "eyebrow-row" }, [h("h3", {}, [TOOLS.length + " tools"])]));
    TOOLS.forEach((t) => view.appendChild(toolCard(t)));
    mount(view);
  }

  function viewTool(id) {
    const t = TOOLS.find((x) => x.id === id);
    if (!t) return viewTools();
    setAccent((t.accent || "").replace("accent-", "") || "violet");
    setBar("Tool", t.title, true);
    const view = h("div", { class: "view" });
    const card = h("div", { class: "tool-card " + (t.accent || "") }, [
      h("h4", {}, [t.title]),
      h("p", { class: "desc" }, [t.desc]),
    ]);
    const mountPoint = h("div", {});
    card.appendChild(mountPoint);
    view.appendChild(card);
    mount(view);
    try { t.mount(mountPoint); } catch (e) { console.error(e); }
  }

  function viewBookmarks() {
    setAccent("indigo");
    setBar("Library", "Saved Topics", false);
    const view = h("div", { class: "view" });
    const list = getBookmarks()
      .map((k) => { const [secId, subId] = k.split("/"); return FLAT[flatIndex(secId, subId)]; })
      .filter(Boolean);

    if (!list.length) {
      view.appendChild(h("div", { class: "empty" }, [
        h("div", { html: '<svg viewBox="0 0 24 24"><path d="M6 4h12v16l-6-4-6 4z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' }),
        h("h4", {}, ["No saved topics yet"]),
        h("p", {}, ['Tap "Save" on any topic to keep it here for quick access.']),
      ]));
    } else {
      view.appendChild(h("div", { class: "eyebrow-row" }, [h("h3", {}, [list.length + " saved"])]));
      list.forEach(({ sec, sub }) => {
        view.appendChild(h("button", {
          class: "sub-item accent-" + sec.accent,
          onclick: () => go("#/article/" + sec.id + "/" + sub.id),
        }, [
          h("div", { class: "sub-item__n" }, [sec.tag]),
          h("h4", {}, [sub.title]),
          h("div", { class: "sub-item__chev", html: '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' }),
        ]));
      });
    }
    mount(view);
  }

  /* ============================================================
     Search
     ============================================================ */
  function blockText(b) {
    let out = [];
    if (b.text) out.push(b.text);
    if (b.label) out.push(b.label);
    if (b.title) out.push(b.title);
    if (b.items) b.items.forEach((it) => {
      if (typeof it === "string") out.push(it);
      else if (it.k || it.v) out.push((it.k || "") + " " + (it.v || ""));
      else if (it.b || it.text) out.push((it.b || "") + " " + (it.text || ""));
      else if (it.title) out.push((it.title || "") + " " + (it.text || "") + " " + (it.rows ? it.rows.map((r) => r.k + " " + r.v).join(" ") : "") + " " + (it.list ? it.list.join(" ") : ""));
    });
    if (b.head) out.push(b.head.join(" "));
    if (b.rows && Array.isArray(b.rows[0])) b.rows.forEach((r) => out.push(r.join(" ")));
    return out.join(" ");
  }
  const SEARCH_DOCS = FLAT.map(({ sec, sub }) => ({
    sec, sub,
    text: (sub.title + " " + sub.blocks.map(blockText).join(" ")).toLowerCase(),
    title: sub.title.toLowerCase(),
  }));

  function runSearch(q) {
    const results = $("#searchResults");
    results.innerHTML = "";
    const query = q.trim().toLowerCase();
    if (!query) {
      results.appendChild(h("div", { class: "empty" }, [
        h("h4", {}, ["Search the entire wiki"]),
        h("p", {}, ["Find formulas, gates, metrics, and SOPs across all six sections."]),
      ]));
      return;
    }
    const terms = query.split(/\s+/);
    const matches = SEARCH_DOCS.map((d) => {
      let score = 0;
      terms.forEach((t) => {
        if (d.title.includes(t)) score += 5;
        const i = d.text.indexOf(t);
        if (i >= 0) score += 1;
      });
      return { d, score };
    }).filter((m) => m.score > 0).sort((a, b) => b.score - a.score).slice(0, 30);

    if (!matches.length) {
      results.appendChild(h("div", { class: "empty" }, [
        h("h4", {}, ["No results"]),
        h("p", {}, ['Nothing matched "' + esc(q) + '".']),
      ]));
      return;
    }
    matches.forEach(({ d }) => {
      const snip = makeSnippet(d.sec.subsections.find((s) => s.id === d.sub.id), terms);
      results.appendChild(h("button", {
        class: "sresult",
        onclick: () => { closeSearch(); go("#/article/" + d.sec.id + "/" + d.sub.id); },
      }, [
        h("div", { class: "sresult__crumb" }, [d.sec.title]),
        h("div", { class: "sresult__title" }, [d.sub.title]),
        h("div", { class: "sresult__snip", html: snip }),
      ]));
    });
  }

  function makeSnippet(sub, terms) {
    const raw = sub.blocks.map(blockText).join(" · ");
    const lower = raw.toLowerCase();
    let pos = -1;
    for (const t of terms) { const i = lower.indexOf(t); if (i >= 0) { pos = i; break; } }
    let start = Math.max(0, pos - 40);
    let frag = raw.slice(start, start + 160);
    if (start > 0) frag = "…" + frag;
    let html = esc(frag);
    terms.forEach((t) => {
      if (!t) return;
      const re = new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
      html = html.replace(re, "<mark>$1</mark>");
    });
    return html;
  }

  function openSearch() {
    const s = $("#search");
    s.hidden = false;
    const input = $("#searchInput");
    input.value = "";
    runSearch("");
    setTimeout(() => input.focus(), 50);
  }
  function closeSearch() { $("#search").hidden = true; }

  /* ============================================================
     Router + mount
     ============================================================ */
  function mount(node) {
    screen.innerHTML = "";
    screen.appendChild(node);
    screen.scrollTop = 0;
    window.scrollTo(0, 0);
    updateProgress();
  }

  function go(hash) { location.hash = hash; }

  const TAB_FOR = { home: "#/home", sections: "#/sections", tools: "#/tools", bookmarks: "#/bookmarks" };
  function setActiveTab(name) {
    document.querySelectorAll(".tab").forEach((t) =>
      t.setAttribute("aria-current", t.dataset.tab === name ? "true" : "false"));
  }

  function route() {
    const hash = location.hash || "#/home";
    const parts = hash.replace(/^#\//, "").split("/");
    const head = parts[0];
    switch (head) {
      case "home": viewHome(); setActiveTab("home"); break;
      case "sections": viewSections(); setActiveTab("sections"); break;
      case "section": viewSection(parts[1]); setActiveTab("sections"); break;
      case "article": viewArticle(parts[1], parts[2]); setActiveTab("sections"); break;
      case "tools": viewTools(); setActiveTab("tools"); break;
      case "tool": viewTool(parts[1]); setActiveTab("tools"); break;
      case "bookmarks": viewBookmarks(); setActiveTab("bookmarks"); break;
      default: viewHome(); setActiveTab("home");
    }
  }

  /* ---------- scroll progress ---------- */
  function updateProgress() {
    const doc = document.documentElement;
    const sc = window.scrollY || doc.scrollTop || 0;
    const height = (doc.scrollHeight - doc.clientHeight) || 1;
    progressBar.style.width = Math.min(100, (sc / height) * 100) + "%";
  }

  /* ============================================================
     Events
     ============================================================ */
  backBtn.addEventListener("click", () => {
    const hash = location.hash;
    if (hash.startsWith("#/article/")) {
      const secId = hash.split("/")[2];
      go("#/section/" + secId);
    } else if (hash.startsWith("#/section/")) {
      go("#/sections");
    } else if (hash.startsWith("#/tool/")) {
      go("#/tools");
    } else {
      history.length > 1 ? history.back() : go("#/home");
    }
  });

  document.querySelectorAll(".tab").forEach((t) =>
    t.addEventListener("click", () => go(TAB_FOR[t.dataset.tab])));

  $("#searchBtn").addEventListener("click", openSearch);
  $("#searchClose").addEventListener("click", closeSearch);
  $("#searchInput").addEventListener("input", (e) => runSearch(e.target.value));
  $("#searchInput").addEventListener("keydown", (e) => { if (e.key === "Escape") closeSearch(); });

  window.addEventListener("hashchange", route);
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  /* ---------- boot ---------- */
  route();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
})();
