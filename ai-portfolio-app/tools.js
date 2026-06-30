/* ============================================================
   Interactive calculators for the AI Portfolio Management app.
   Each tool exposes { id, title, desc, accent, mount(el) }.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- tiny DOM helpers ---------- */
  function el(tag, attrs, kids) {
    const n = document.createElement(tag);
    if (attrs) {
      for (const k in attrs) {
        if (k === "class") n.className = attrs[k];
        else if (k === "html") n.innerHTML = attrs[k];
        else if (k.startsWith("on") && typeof attrs[k] === "function")
          n.addEventListener(k.slice(2), attrs[k]);
        else if (attrs[k] != null) n.setAttribute(k, attrs[k]);
      }
    }
    (kids || []).forEach((c) => n.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
    return n;
  }
  const fmt = (n, d = 0) =>
    Number(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  const money = (n) =>
    "$" + Number(Math.round(n)).toLocaleString("en-US");
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

  /* number field */
  function numField(label, hint, val, opts) {
    opts = opts || {};
    const input = el("input", {
      type: "number",
      value: val,
      inputmode: "decimal",
      step: opts.step || "any",
      min: opts.min,
      max: opts.max,
    });
    const wrap = el("div", { class: "field" }, [
      el("label", {}, [document.createTextNode(label), hint ? el("span", { class: "hint" }, [hint]) : ""]),
      input,
    ]);
    return { wrap, input };
  }

  /* range field with live output and fill */
  function rangeField(label, val, min, max, suffix) {
    const out = el("output", {}, [String(val) + (suffix || "")]);
    const input = el("input", { type: "range", min, max, value: val, step: 1 });
    function sync() {
      out.textContent = input.value + (suffix || "");
      input.style.setProperty("--fill", ((input.value - min) / (max - min)) * 100 + "%");
    }
    input.addEventListener("input", sync);
    sync();
    const wrap = el("div", { class: "field field--range" }, [
      el("label", {}, [document.createTextNode(label), out]),
      input,
    ]);
    return { wrap, input };
  }

  function selectField(label, options, val) {
    const sel = el("select", {});
    options.forEach((o) => {
      const opt = el("option", { value: o.value }, [o.label]);
      if (o.value === val) opt.selected = true;
      sel.appendChild(opt);
    });
    const wrap = el("div", { class: "field" }, [el("label", {}, [label]), sel]);
    return { wrap, input: sel };
  }

  function resultPanel() {
    const num = el("div", { class: "result__num" }, ["—"]);
    const label = el("div", { class: "result__label" }, [""]);
    const band = el("div", { class: "result__band" }, [""]);
    const gauge = el("span", {});
    const gWrap = el("div", { class: "gauge" }, [gauge]);
    const note = el("div", { class: "result__note" }, [""]);
    const extra = el("div", {});
    const panel = el("div", { class: "result" }, [num, label, band, gWrap, note, extra]);
    return { panel, num, label, band, gauge, gWrap, note, extra };
  }

  function bandClass(name) {
    return { good: "band-good", warn: "band-warn", bad: "band-bad", info: "band-info" }[name];
  }
  function fillClass(name) {
    return { good: "fill-good", warn: "fill-warn", bad: "fill-bad", info: "fill-info" }[name];
  }

  function breakdown(rows) {
    // rows: [{label, value (0-100), display}]
    const wrap = el("div", { class: "bd" });
    rows.forEach((r) => {
      const bar = el("span", { style: "width:" + clamp(r.value, 0, 100) + "%" });
      wrap.appendChild(
        el("div", { class: "bd__row" }, [
          el("div", { class: "bd__top" }, [
            document.createTextNode(r.label),
            el("b", {}, [r.display]),
          ]),
          el("div", { class: "bd__bar" }, [bar]),
        ])
      );
    });
    return wrap;
  }

  /* =========================================================
     1 · Portfolio Health Score
     ========================================================= */
  const phs = {
    id: "phs",
    title: "Portfolio Health Score",
    desc: "Weighted composite of six dimensions (0–100). Adjust each dimension score; weights are fixed per the framework.",
    accent: "accent-amber",
    mount(root) {
      const dims = [
        { k: "D1 · Adoption & Usage", w: 0.2, v: 70 },
        { k: "D2 · Value Realization", w: 0.25, v: 66 },
        { k: "D3 · Operational Resilience", w: 0.15, v: 80 },
        { k: "D4 · Governance & Risk", w: 0.2, v: 75 },
        { k: "D5 · Workforce Enablement", w: 0.1, v: 60 },
        { k: "D6 · Innovation Pipeline", w: 0.1, v: 55 },
      ];
      const inputs = [];
      dims.forEach((d) => {
        const r = rangeField(d.k + "  (w " + d.w + ")", d.v, 0, 100, "");
        inputs.push(r.input);
        root.appendChild(r.wrap);
        r.input.addEventListener("input", calc);
      });
      const res = resultPanel();
      res.label.textContent = "Composite PHS / 100";
      root.appendChild(res.panel);

      function calc() {
        let total = 0;
        const bdRows = [];
        dims.forEach((d, i) => {
          const v = +inputs[i].value;
          const contrib = v * d.w;
          total += contrib;
          bdRows.push({ label: d.k, value: v, display: v + " × " + d.w + " = " + fmt(contrib, 1) });
        });
        const score = Math.round(total);
        res.num.textContent = score;
        let band, txt;
        if (score >= 85) { band = "good"; txt = "World-Class"; }
        else if (score >= 70) { band = "good"; txt = "Healthy"; }
        else if (score >= 55) { band = "info"; txt = "Developing"; }
        else if (score >= 40) { band = "warn"; txt = "At Risk"; }
        else { band = "bad"; txt = "Critical"; }
        res.band.textContent = txt;
        res.band.className = "result__band " + bandClass(band);
        res.gauge.className = fillClass(band);
        res.gauge.style.width = score + "%";
        res.note.textContent = {
          "World-Class": "Benchmark for others; document and publish practices.",
          "Healthy": "Maintain momentum; focus on lagging dimensions.",
          "Developing": "Systematic improvement; prioritize governance and value gaps.",
          "At Risk": "Executive intervention required; high sunset priority.",
          "Critical": "Portfolio restructuring necessary; freeze new intake.",
        }[txt];
        res.extra.innerHTML = "";
        res.extra.appendChild(breakdown(bdRows));
      }
      calc();
    },
  };

  /* =========================================================
     2 · Risk Tier Classifier (decision tree)
     ========================================================= */
  const riskTier = {
    id: "risk",
    title: "Risk Tier Classifier",
    desc: "Walk the B.4 decision tree. Default to the higher tier when in doubt; the Model Risk Committee makes the final call.",
    accent: "accent-teal",
    mount(root) {
      const path = [];
      const stage = el("div", {});
      root.appendChild(stage);

      const Q = {
        start: {
          q: "Does the initiative make decisions/recommendations directly affecting customers, capital, or regulatory compliance?",
          yes: "humanReview",
          no: "regFn",
        },
        humanReview: {
          q: "Does a human review and approve every output before it takes effect?",
          yes: "restricted",
          no: { result: "High" },
        },
        restricted: {
          q: "Does it process restricted/highly restricted data or operate in a regulated domain?",
          yes: { result: "High" },
          no: { result: "Moderate" },
        },
        regFn: {
          q: "Is it used by regulated functions (Risk, Compliance, Audit, Finance)?",
          yes: { result: "Moderate" },
          no: "confData",
        },
        confData: {
          q: "Does it process confidential or restricted data?",
          yes: { result: "Moderate" },
          no: { result: "Low" },
        },
      };

      const tiers = {
        High: { band: "bad", text: "Autonomous/customer-impacting decisions in regulated domains. Full governance: SR 11-7 validation, RCSA, bias testing, explainability, Model Risk Committee approval, quarterly reviews." },
        Moderate: { band: "warn", text: "Human-in-the-loop or regulated-function tooling on confidential data. Governance: control documentation, DPIA if PII, semi-annual reviews." },
        Low: { band: "good", text: "Productivity enhancement, no customer exposure, non-sensitive data. Governance: annual attestation." },
      };

      function renderNode(key) {
        const node = Q[key];
        stage.innerHTML = "";
        const opts = el("div", { class: "dtree__opts" });
        ["yes", "no"].forEach((ans) => {
          opts.appendChild(
            el("button", {
              onclick: () => {
                path.push({ q: node.q, a: ans === "yes" ? "Yes" : "No" });
                const next = node[ans];
                if (typeof next === "string") renderNode(next);
                else renderResult(next.result);
              },
            }, [ans === "yes" ? "Yes" : "No"])
          );
        });
        stage.appendChild(el("div", { class: "dtree__q" }, [node.q]));
        stage.appendChild(opts);
        if (path.length) stage.appendChild(renderPath());
      }

      function renderPath() {
        const p = el("div", { class: "dtree__path" });
        path.forEach((s) => p.appendChild(el("span", {}, ["• " + s.q + " → " + s.a])));
        return p;
      }

      function renderResult(tier) {
        const t = tiers[tier];
        stage.innerHTML = "";
        const res = resultPanel();
        res.num.textContent = tier;
        res.num.style.fontSize = "30px";
        res.label.textContent = "Risk Tier";
        res.band.textContent = tier + " Risk";
        res.band.className = "result__band " + bandClass(t.band);
        res.gWrap.remove();
        res.note.textContent = t.text;
        stage.appendChild(res.panel);
        stage.appendChild(renderPath());
        stage.appendChild(
          el("div", { class: "tool-actions" }, [
            el("button", { class: "btn", onclick: restart }, ["Start over"]),
          ])
        );
      }

      function restart() { path.length = 0; renderNode("start"); }
      renderNode("start");
    },
  };

  /* =========================================================
     3 · Business Viability (Gate 1)
     ========================================================= */
  const viability = {
    id: "viability",
    title: "Gate 1 · Business Viability",
    desc: "Score = (Expected Annual Value ÷ Estimated Annual Cost) × (1 ÷ Break-Even Months). Pass ≥ 2.0 (High-Risk) or ≥ 1.5 (Mod/Low).",
    accent: "accent-teal",
    mount(root) {
      const value = numField("Expected annual value (USD)", "", 600000, { min: 0 });
      const cost = numField("Estimated annual cost (USD)", "", 200000, { min: 0 });
      const months = numField("Break-even (months)", "", 8, { min: 1, step: 1 });
      const risk = selectField("Risk tier (threshold)", [
        { value: "high", label: "High-Risk → pass ≥ 2.0" },
        { value: "mod", label: "Moderate/Low → pass ≥ 1.5" },
      ], "mod");
      [value, cost, months].forEach((f) => f.wrap.classList.add("g"));
      root.appendChild(el("div", { class: "grid-2" }, [value.wrap, cost.wrap]));
      root.appendChild(el("div", { class: "grid-2" }, [months.wrap, risk.wrap]));
      const res = resultPanel();
      res.label.textContent = "Business Viability Score";
      res.gWrap.remove();
      root.appendChild(res.panel);

      function calc() {
        const v = +value.input.value, c = +cost.input.value, m = +months.input.value;
        if (!c || !m) { res.num.textContent = "—"; return; }
        const score = (v / c) * (1 / m);
        const thr = risk.input.value === "high" ? 2.0 : 1.5;
        res.num.textContent = score.toFixed(2);
        const pass = score >= thr;
        res.band.textContent = pass ? "Advance ✓ (≥ " + thr.toFixed(1) + ")" : "Below threshold (< " + thr.toFixed(1) + ")";
        res.band.className = "result__band " + (pass ? bandClass("good") : bandClass("bad"));
        res.note.textContent = "ROI ratio " + (v / c).toFixed(2) + "× over " + m + " months. " +
          (pass ? "Recommend advance to Gate 2." : "Request refinement or reject.");
      }
      [value, cost, months].forEach((f) => f.input.addEventListener("input", calc));
      risk.input.addEventListener("change", calc);
      calc();
    },
  };

  /* =========================================================
     4 · Quick Win Priority Score
     ========================================================= */
  const quickWin = {
    id: "quickwin",
    title: "Quick Win Priority Score",
    desc: "Score = (Estimated Annual Savings × Confidence) ÷ Execution Weeks. Execute the top 5 by score in the first 90 days.",
    accent: "accent-teal",
    mount(root) {
      const savings = numField("Estimated annual savings (USD)", "", 120000, { min: 0 });
      const weeks = numField("Execution time (weeks)", "", 2, { min: 0.5, step: 0.5 });
      const conf = rangeField("Confidence level", 80, 0, 100, "%");
      root.appendChild(savings.wrap);
      root.appendChild(el("div", { class: "grid-2" }, [weeks.wrap, conf.wrap]));
      const res = resultPanel();
      res.label.textContent = "Priority Score";
      res.gWrap.remove();
      root.appendChild(res.panel);

      function calc() {
        const s = +savings.input.value, w = +weeks.input.value, c = +conf.input.value / 100;
        if (!w) { res.num.textContent = "—"; return; }
        const score = (s * c) / w;
        res.num.textContent = fmt(score);
        res.num.style.fontSize = "30px";
        let band;
        if (score >= 40000) band = "good";
        else if (score >= 15000) band = "warn";
        else band = "bad";
        res.band.textContent = score >= 40000 ? "High priority" : score >= 15000 ? "Medium priority" : "Lower priority";
        res.band.className = "result__band " + bandClass(band);
        res.note.textContent = money(s) + " × " + Math.round(c * 100) + "% ÷ " + w + " wks. Rank against other candidates and execute the top 5.";
      }
      [savings, weeks, conf].forEach((f) => f.input.addEventListener("input", calc));
      calc();
    },
  };

  /* =========================================================
     5 · User Persona Classifier
     ========================================================= */
  const persona = {
    id: "persona",
    title: "User Persona Classifier",
    desc: "Segment a user by Prompts/Month (PPM) and Days Active/Month (DAM) per the C.5 logic.",
    accent: "accent-amber",
    mount(root) {
      const ppm = numField("Prompts per month (PPM)", "", 9, { min: 0, step: 1 });
      const dam = numField("Days active per month (DAM)", "", 6, { min: 0, max: 31, step: 1 });
      const lastUse = numField("Days since last activity", "", 3, { min: 0, step: 1 });
      const top = selectField("In top 20% by prompt volume?", [
        { value: "no", label: "No" }, { value: "yes", label: "Yes" },
      ], "no");
      root.appendChild(el("div", { class: "grid-2" }, [ppm.wrap, dam.wrap]));
      root.appendChild(el("div", { class: "grid-2" }, [lastUse.wrap, top.wrap]));
      const res = resultPanel();
      res.label.textContent = "Persona Segment";
      res.gWrap.remove();
      root.appendChild(res.panel);

      const info = {
        Ghost: { band: "bad", txt: "Provisioned but zero usage in 60+ days. Intervention: 30-day re-engagement notice; deprovision to recover license cost." },
        Dabbler: { band: "warn", txt: 'Tried once or twice and stopped. Intervention: targeted "5-minute win" content, role-specific use cases, 1:1 enablement.' },
        "Regular Adopter": { band: "info", txt: "Consistent monthly usage. Intervention: workflow integration, advanced training, use case templates." },
        "Power User": { band: "good", txt: "Top engagement, 3–5× productivity. Leverage as champion: early access, case studies, peer coaching." },
      };

      function calc() {
        const p = +ppm.input.value, d = +dam.input.value, last = +lastUse.input.value, isTop = top.input.value === "yes";
        let seg;
        if (p === 0 && last > 60) seg = "Ghost";
        else if (p > 20 || d > 15 || isTop) seg = "Power User";
        else if (p >= 2 || d >= 3) seg = "Regular Adopter";
        else if (p < 2 && d < 3) seg = "Dabbler";
        else seg = "Regular Adopter";
        const i = info[seg];
        res.num.textContent = seg;
        res.num.style.fontSize = "26px";
        res.band.textContent = { Ghost: "None", Dabbler: "Low", "Regular Adopter": "Moderate", "Power User": "Very High" }[seg] + " engagement";
        res.band.className = "result__band " + bandClass(i.band);
        res.note.textContent = i.txt;
      }
      [ppm, dam, lastUse].forEach((f) => f.input.addEventListener("input", calc));
      top.input.addEventListener("change", calc);
      calc();
    },
  };

  /* =========================================================
     6 · Knowledge Foundation Health
     ========================================================= */
  const kfh = {
    id: "kfh",
    title: "Knowledge Foundation Health",
    desc: "KFH = 0.3·CR + 0.3·AF + 0.2·(100 − RFR) + 0.2·KBF for RAG / agent initiatives.",
    accent: "accent-amber",
    mount(root) {
      const cr = rangeField("Context Relevance (CR)", 78, 0, 100, "%");
      const af = rangeField("Answer Faithfulness (AF)", 88, 0, 100, "%");
      const rfr = rangeField("Retrieval Failure Rate (RFR)", 8, 0, 100, "%");
      const kbf = rangeField("KB Freshness (KBF)", 92, 0, 100, "%");
      [cr, af, rfr, kbf].forEach((f) => { root.appendChild(f.wrap); f.input.addEventListener("input", calc); });
      const res = resultPanel();
      res.label.textContent = "KFH Composite / 100";
      root.appendChild(res.panel);

      function calc() {
        const CR = +cr.input.value, AF = +af.input.value, RFR = +rfr.input.value, KBF = +kbf.input.value;
        const score = Math.round(0.3 * CR + 0.3 * AF + 0.2 * (100 - RFR) + 0.2 * KBF);
        res.num.textContent = score;
        let band, txt;
        if (score > 80) { band = "good"; txt = "Excellent"; }
        else if (score >= 60) { band = "warn"; txt = "Adequate"; }
        else { band = "bad"; txt = "Compromised"; }
        res.band.textContent = txt;
        res.band.className = "result__band " + bandClass(band);
        res.gauge.className = fillClass(band);
        res.gauge.style.width = score + "%";
        res.note.textContent = score > 80 ? "Excellent knowledge foundation."
          : score >= 60 ? "Adequate; monitor for decline." : "Knowledge quality compromising performance; immediate remediation required.";
        res.extra.innerHTML = "";
        res.extra.appendChild(breakdown([
          { label: "Context Relevance", value: CR, display: (CR >= 75 ? "OK" : CR < 50 ? "Alert" : "Watch") + " · " + CR + "%" },
          { label: "Answer Faithfulness", value: AF, display: (AF >= 85 ? "OK" : AF < 70 ? "Alert" : "Watch") + " · " + AF + "%" },
          { label: "Retrieval Success", value: 100 - RFR, display: (RFR <= 10 ? "OK" : RFR > 25 ? "Alert" : "Watch") + " · " + RFR + "% fail" },
          { label: "KB Freshness", value: KBF, display: (KBF >= 90 ? "OK" : KBF < 70 ? "Alert" : "Watch") + " · " + KBF + "%" },
        ]));
      }
      calc();
    },
  };

  /* =========================================================
     7 · Value Realization & Portfolio ROI
     ========================================================= */
  const roi = {
    id: "roi",
    title: "Value Realization & ROI",
    desc: "Total the four value categories against total annual cost to derive Portfolio ROI (D.4).",
    accent: "accent-violet",
    mount(root) {
      const cs = numField("Cost savings (direct)", "", 250000, { min: 0 });
      const prod = numField("Productivity gains", "", 3400000, { min: 0 });
      const rev = numField("Revenue enhancement", "", 2100000, { min: 0 });
      const risk = numField("Risk mitigation", "", 1500000, { min: 0 });
      const cost = numField("Total annual cost", "", 2800000, { min: 0 });
      root.appendChild(el("div", { class: "grid-2" }, [cs.wrap, prod.wrap]));
      root.appendChild(el("div", { class: "grid-2" }, [rev.wrap, risk.wrap]));
      root.appendChild(cost.wrap);
      const res = resultPanel();
      res.label.textContent = "Portfolio ROI";
      res.gWrap.remove();
      root.appendChild(res.panel);

      function calc() {
        const value = +cs.input.value + +prod.input.value + +rev.input.value + +risk.input.value;
        const c = +cost.input.value;
        if (!c) { res.num.textContent = "—"; return; }
        const r = value / c;
        res.num.textContent = r.toFixed(2) + "×";
        let band, txt;
        if (r >= 2.5) { band = "good"; txt = "Portfolio target met (≥ 2.5×)"; }
        else if (r >= 2.0) { band = "good"; txt = "Enterprise-scale (≥ 2.0×)"; }
        else if (r >= 1.5) { band = "info"; txt = "Departmental (≥ 1.5×)"; }
        else if (r >= 1.2) { band = "warn"; txt = "Experimental (≥ 1.2×)"; }
        else { band = "bad"; txt = "Below breakeven target"; }
        res.band.textContent = txt;
        res.band.className = "result__band " + bandClass(band);
        res.note.textContent = "Total annual value " + money(value) + " ÷ cost " + money(c) + ".";
        res.extra.innerHTML = "";
        const max = Math.max(value, 1);
        res.extra.appendChild(breakdown([
          { label: "Cost savings", value: (+cs.input.value / max) * 100, display: money(+cs.input.value) },
          { label: "Productivity", value: (+prod.input.value / max) * 100, display: money(+prod.input.value) },
          { label: "Revenue", value: (+rev.input.value / max) * 100, display: money(+rev.input.value) },
          { label: "Risk mitigation", value: (+risk.input.value / max) * 100, display: money(+risk.input.value) },
        ]));
      }
      [cs, prod, rev, risk, cost].forEach((f) => f.input.addEventListener("input", calc));
      calc();
    },
  };

  window.TOOLS = [phs, riskTier, viability, quickWin, persona, kfh, roi];
})();
