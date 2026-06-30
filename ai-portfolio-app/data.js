/**
 * AI Portfolio Management Wiki — structured content.
 * Source: "AI Portfolio Management: Comprehensive Wiki" (v1.0, March 2026).
 *
 * Block types consumed by the renderer (app.js):
 *   { t: 'p',     text }                      paragraph
 *   { t: 'lead',  text }                      lead / purpose statement
 *   { t: 'h',     text }                      sub-heading inside a subsection
 *   { t: 'list',  items, ordered? }           bullet / numbered list (items may be {b, text})
 *   { t: 'kv',    items: [{k, v}] }           key/value definition list
 *   { t: 'formula', label?, text }            formula callout
 *   { t: 'note',  kind, title?, text }        callout (info|warn|good|bad)
 *   { t: 'cards', items: [{title, rows:[{k,v}]|text, tag?}] }
 *   { t: 'table', head:[...], rows:[[...]] }
 *   { t: 'steps', items: [{title, text|list}] }
 */
window.WIKI = {
  meta: {
    title: "AI Portfolio Management",
    subtitle: "Comprehensive Operationalization Wiki",
    version: "Version 1.0 · March 2026",
    context: "Global Systemically Important Financial Institution (GSIB)",
    owner: "Head of Global AI Adoption, Maturity, Governance & Solutions",
    valueProp:
      "Transform from scattered AI pilots to world-class portfolio management in 36 months.",
  },

  sections: [
    /* ───────────────────────────── SECTION A ───────────────────────────── */
    {
      id: "a",
      tag: "A",
      label: "Overview",
      title: "Overview & Context",
      phase: "Foundations",
      accent: "indigo",
      summary: "Executive summary, the three-phase journey, and document structure.",
      subsections: [
        {
          id: "a1",
          title: "A.1 Executive Summary",
          blocks: [
            {
              t: "lead",
              text: "Complete, ready-to-deploy resource suite for managing enterprise AI portfolios across three maturity stages.",
            },
            {
              t: "kv",
              items: [
                { k: "Target Context", v: "Global systemically important financial institution (GSIB)" },
                { k: "Key Value Proposition", v: "Transform from scattered AI pilots to world-class portfolio management in 36 months." },
              ],
            },
            {
              t: "h", text: "Core Deliverables",
            },
            {
              t: "list",
              items: [
                "Executable tools and decision matrices",
                "Mathematical frameworks",
                "Standard operating procedures",
                "Implementation roadmap milestones",
              ],
            },
          ],
        },
        {
          id: "a2",
          title: "A.2 Three-Phase Journey",
          blocks: [
            {
              t: "cards",
              items: [
                {
                  title: "Phase I · AI Adoption",
                  tag: "Months 0–6",
                  rows: [
                    { k: "Focus", v: "Foundation building, inventory, initial governance" },
                    { k: "Primary Goal", v: "Establish visibility across entire AI landscape" },
                    { k: "Key Activities", v: "Discovery, classification, quick wins" },
                  ],
                },
                {
                  title: "Phase II · AI Management",
                  tag: "Months 7–18",
                  rows: [
                    { k: "Focus", v: "Operationalization, portfolio discipline, optimization" },
                    { k: "Primary Goal", v: "Systematic tracking and performance improvement" },
                    { k: "Key Activities", v: "Health scoring, rationalization, value tracking" },
                  ],
                },
                {
                  title: "Phase III · AI Maturity",
                  tag: "Months 19–36",
                  rows: [
                    { k: "Focus", v: "Advanced orchestration, peer benchmarking, continuous improvement" },
                    { k: "Primary Goal", v: "Industry leadership and operational excellence" },
                    { k: "Key Activities", v: "Multi-level evaluation, autonomous operations, innovation" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "a3",
          title: "A.3 Document Structure",
          blocks: [
            {
              t: "list",
              items: [
                { b: "Part I", text: "AI Adoption Phase (Sections 1–7)" },
                { b: "Part II", text: "AI Management Phase (Sections 8–14)" },
                { b: "Part III", text: "AI Maturity Phase (Sections 15–20)" },
                { b: "Part IV", text: "Cross-Phase Resources (Sections 21–24)" },
                { b: "Strategic Roadmap", text: "Detailed implementation timeline" },
              ],
            },
          ],
        },
      ],
    },

    /* ───────────────────────────── SECTION B ───────────────────────────── */
    {
      id: "b",
      tag: "B",
      label: "Phase I",
      title: "Phase I — AI Adoption",
      phase: "Months 0–6",
      accent: "teal",
      summary:
        "Foundation building: intake & classification, model inventory, risk tiering, governance baseline, quick wins, and the steering committee.",
      subsections: [
        {
          id: "b1",
          title: "B.1 AI Initiative Intake & Classification",
          blocks: [
            {
              t: "lead",
              text: "Standardize how new AI initiatives enter the portfolio and ensure consistent evaluation criteria.",
            },
            { t: "h", text: "Intake Form — Initiative Metadata (Required)" },
            {
              t: "kv",
              items: [
                { k: "Initiative ID", v: "Auto-generated format AI-YYYY-####" },
                { k: "Initiative Name", v: "Business-facing name, 3–5 words, Title Case" },
                { k: "Sponsoring Executive", v: "Senior leader accountable for outcomes" },
                { k: "Initiative Owner", v: "Day-to-day delivery manager" },
                { k: "Business Line", v: "Funding organizational unit" },
                { k: "Strategic Objective Alignment", v: "Top 3–5 enterprise objectives" },
                { k: "Estimated Annual Budget", v: "USD including API, infrastructure, FTE costs" },
                { k: "Target Production Date", v: "Real user deployment timeline" },
                { k: "System Type", v: "From taxonomy (Section B.2)" },
              ],
            },
            { t: "h", text: "Business Case Requirements" },
            {
              t: "list",
              items: [
                "Problem Statement (100 words max)",
                "Current State Cost baseline",
                "Target Users (roles, departments, headcount)",
                "Success Metrics (3–5 quantitative)",
                "Expected Value (quantified)",
                "Break-Even Timeline (months)",
              ],
            },
            { t: "h", text: "Technical Architecture Requirements" },
            {
              t: "list",
              items: [
                "Base Model (GPT-4o, Claude, Gemini, etc.)",
                "Deployment Mode (API, on-premise, hybrid)",
                "Data Dependencies",
                "Integration Points",
                "Expected Token Volume (monthly)",
              ],
            },
            { t: "h", text: "Governance & Risk Requirements" },
            {
              t: "list",
              items: [
                "Risk Tier (High / Moderate / Low)",
                "Regulatory Scope (FCRA, ECOA, AML, fair lending)",
                "Data Classification",
                "Customer-Facing status",
                "Model Validation Required (SR 11-7)",
              ],
            },
            { t: "h", text: "Three-Gate Approval Sequence" },
            {
              t: "steps",
              items: [
                {
                  title: "Gate 1 · Business Viability",
                  list: [
                    "Reviewers: Portfolio Manager + Finance",
                    "Formula: Business Viability Score = (Expected Annual Value ÷ Estimated Annual Cost) × (1 ÷ Break-Even Months)",
                    "Pass Threshold: ≥ 2.0 for High-Risk; ≥ 1.5 for Moderate/Low-Risk",
                    "Outcomes: Advance, Request Refinement, Reject",
                  ],
                },
                {
                  title: "Gate 2 · Technical Feasibility",
                  list: [
                    "Reviewers: Enterprise Architecture + AI Engineering Lead",
                    "Checklist: Data accessibility, model capability, integration complexity, infrastructure capacity, technical dependencies",
                    "Outcomes: Advance, Request Architecture Revision, Reject",
                  ],
                },
                {
                  title: "Gate 3 · Risk & Governance Clearance",
                  list: [
                    "Reviewers: Model Risk Management + Compliance + Legal",
                    "Checklist: Risk classification, regulatory implications, DPIA, validation pathway, incident response, auditability",
                    "Outcomes: Approve, Conditional Approval, Reject",
                  ],
                },
              ],
            },
            {
              t: "note",
              kind: "info",
              title: "Final Disposition",
              text: 'Initiatives passing all gates enter as "Experimental" tier until production readiness criteria are met.',
            },
          ],
        },
        {
          id: "b2",
          title: "B.2 System Type Taxonomy",
          blocks: [
            {
              t: "lead",
              text: "Classify initiatives by architectural pattern for type-appropriate evaluation. The owner selects one primary type during intake; it determines the evaluation template applied.",
            },
            {
              t: "cards",
              items: [
                {
                  title: "1 · Conversational Chatbot",
                  rows: [
                    { k: "Decision Mode", v: "Reactive, stateless between sessions" },
                    { k: "Characteristics", v: "Single LLM + prompt routing" },
                    { k: "Primary Metrics", v: "Resolution rate, turns to resolution, CSAT, escalation rate" },
                  ],
                },
                {
                  title: "2 · API / M2M Interface",
                  rows: [
                    { k: "Decision Mode", v: "Deterministic, programmatic" },
                    { k: "Characteristics", v: "Fixed input/output contract, no human" },
                    { k: "Primary Metrics", v: "Throughput, P99 latency, error rate, schema drift" },
                  ],
                },
                {
                  title: "3 · RAG Pipeline",
                  rows: [
                    { k: "Decision Mode", v: "Retrieval-augmented, passive" },
                    { k: "Characteristics", v: "Query → retrieve → inject context → generate" },
                    { k: "Primary Metrics", v: "Context relevance, answer faithfulness, retrieval failure rate, KB freshness" },
                  ],
                },
                {
                  title: "4 · Goal-Based Agent",
                  rows: [
                    { k: "Decision Mode", v: "Active, iterative planning" },
                    { k: "Characteristics", v: "Plan → Act → Observe → Reflect loop with tool use" },
                    { k: "Primary Metrics", v: "Task completion rate, tool selection accuracy, execution efficiency, goal drift" },
                  ],
                },
                {
                  title: "5 · Multi-Agent / Hierarchical",
                  rows: [
                    { k: "Decision Mode", v: "Orchestrated, delegated" },
                    { k: "Characteristics", v: "Coordinator + specialized sub-agents" },
                    { k: "Primary Metrics", v: "Handoff success rate, orchestration overhead, agent conflict rate, decision chain completeness" },
                  ],
                },
                {
                  title: "6 · Workflow Automation (RPA + AI)",
                  rows: [
                    { k: "Decision Mode", v: "Hybrid, structured" },
                    { k: "Characteristics", v: "AI embedded in deterministic process steps" },
                    { k: "Primary Metrics", v: "Exception rate, straight-through processing rate, override frequency" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "b3",
          title: "B.3 Model Inventory & Discovery",
          blocks: [
            {
              t: "lead",
              text: "Achieve complete visibility into all AI/ML models — an SR 11-7 compliance requirement.",
            },
            { t: "h", text: "Discovery Execution Plan" },
            {
              t: "steps",
              items: [
                {
                  title: "Week 1–2 · Automated Discovery",
                  list: [
                    "Deploy API monitoring at gateway layer (OpenAI, Azure, Anthropic, Google)",
                    "Scan version control repos (keywords: openai, langchain, anthropic, model.generate, agent, rag)",
                    "Query cloud spend reports (Bedrock, Vertex AI, Azure OpenAI)",
                    "Review IT service catalog for AI/ML tags",
                  ],
                },
                {
                  title: "Week 3–4 · Manual Outreach",
                  list: [
                    "Survey business line CTOs and innovation heads",
                    "Questionnaire covers: LLMs, chatbots, document analysis, coding assistants, predictive models, RPA with AI",
                    "Skip-level interviews with 10–15 randomly selected managers",
                  ],
                },
                {
                  title: "Week 5–6 · Reconciliation & Inventory Build",
                  list: [
                    "Consolidate automated and manual findings",
                    "De-duplicate entries",
                    "Assign temporary Initiative IDs",
                    "Classify by risk tier and system type",
                    "Flag Shadow AI (production without governance clearance)",
                  ],
                },
              ],
            },
            { t: "h", text: "Inventory Data Schema (Required Fields)" },
            {
              t: "list",
              items: [
                "Initiative ID (unique identifier)",
                "Discovery Source (automated scan, survey, interview, financial audit, voluntary intake)",
                "Status (Production, Pilot, Development, Decommissioned, Shadow)",
                'Owner (individual accountable; "Unassigned" if unknown)',
                "Business Line",
                "System Type (from taxonomy)",
                "Model/API Used (GPT-4o, Claude, custom, unknown)",
                "Deployment Date (approximate if unknown)",
                "Risk Tier (High, Moderate, Low, Not Yet Assessed)",
                "Validation Status (Validated, In Progress, None, Not Required)",
                "Governance Gap (Boolean)",
              ],
            },
            {
              t: "note",
              kind: "good",
              title: "Output",
              text: "Master AI/ML Model Inventory Spreadsheet — a living document with quarterly updates.",
            },
          ],
        },
        {
          id: "b4",
          title: "B.4 Risk Tiering",
          blocks: [
            {
              t: "lead",
              text: "Consistently classify initiatives by risk level to determine governance intensity.",
            },
            {
              t: "cards",
              items: [
                {
                  title: "High Risk",
                  tag: "Tier 1",
                  text: "Autonomous decisions affecting customers, capital, or regulatory obligations · operates in regulated domains (FCRA, ECOA, UDAAP, AML, fair lending) · processes restricted/highly restricted data (PII, credit decisions, investment advice) · customer-facing with limited human oversight · failure could result in regulatory penalties, customer harm, reputational damage.",
                },
                {
                  title: "Moderate Risk",
                  tag: "Tier 2",
                  text: "Human-in-the-loop (AI recommends, human decides) · internal-facing productivity tool in regulated functions (compliance, risk, audit) · processes confidential data · failure results in operational inefficiency or rework, not direct customer/regulatory harm.",
                },
                {
                  title: "Low Risk",
                  tag: "Tier 3",
                  text: "Productivity enhancement with no customer exposure · operates on public or non-sensitive internal data · output is informational/draft requiring human review before consequential use · failure localized to individual user productivity loss.",
                },
              ],
            },
            {
              t: "note",
              kind: "info",
              title: "Risk Classification Decision Tree",
              text: "Use the interactive Risk Tier classifier in the Tools tab to walk the decision tree.",
            },
            {
              t: "note",
              kind: "warn",
              title: "Edge Case Adjudication",
              text: "The Model Risk Committee makes the final determination. Default to the higher risk tier when in doubt.",
            },
          ],
        },
        {
          id: "b5",
          title: "B.5 Initial Governance Baseline",
          blocks: [
            {
              t: "lead",
              text: "Define minimum governance requirements before production deployment.",
            },
            { t: "h", text: "Universal Requirements (All Risk Tiers)" },
            {
              t: "list",
              ordered: true,
              items: [
                "Approved Intake (passed all three gates)",
                "Initiative ID Assigned",
                "Owner Documented",
                "System Type Classified",
                "Success Metrics Defined",
                "Incident Response Plan",
                "Data Lineage Documented",
                "Audit Trail Enabled (inputs, outputs, decisions logged with timestamp and user ID)",
              ],
            },
            { t: "h", text: "High Risk Only" },
            {
              t: "list",
              ordered: true,
              items: [
                "Model Validation Completed (SR 11-7)",
                "RCSA Completed (Risk and Control Self-Assessment)",
                "Bias Testing (fairness across protected classes)",
                "Explainability Requirements Defined",
                "Model Risk Committee Approval",
                "Quarterly Performance Reviews",
              ],
            },
            { t: "h", text: "Moderate Risk Only" },
            {
              t: "list",
              ordered: true,
              items: [
                "Control Documentation (human-in-loop checkpoints)",
                "DPIA (Data Privacy Impact Assessment if processing PII/confidential)",
                "Semi-Annual Performance Reviews",
              ],
            },
            { t: "h", text: "Low Risk Only" },
            {
              t: "list",
              ordered: true,
              items: ["Annual Attestation (owner confirms operation as intended)"],
            },
            { t: "h", text: "Pre-Production Readiness Gate" },
            {
              t: "list",
              items: [
                "All governance requirements for risk tier completed",
                "Evaluation framework in place (golden dataset, eval pipeline, monitoring dashboards)",
                "Infrastructure scaled for projected production volume",
                "User training and enablement materials published",
                "Operations runbook completed",
                "Budget confirmed for production operational costs",
              ],
            },
            {
              t: "kv",
              items: [
                { k: "Approval — Departmental", v: "CTO / CIO" },
                { k: "Approval — Enterprise-Scale", v: "CTO / CIO + CFO" },
              ],
            },
          ],
        },
        {
          id: "b6",
          title: "B.6 Quick Win Identification",
          blocks: [
            {
              t: "lead",
              text: "Generate momentum in the first 90 days via high-impact, low-effort portfolio clean-up.",
            },
            {
              t: "cards",
              items: [
                {
                  title: "1 · Ghost User Cleanup",
                  rows: [
                    { k: "Description", v: "Deprovision users with zero usage in 60+ days" },
                    { k: "Typical Impact", v: "10–30% license cost reduction" },
                    { k: "Execution Time", v: "1–2 weeks" },
                  ],
                },
                {
                  title: "2 · Zombie Initiative Sunset",
                  rows: [
                    { k: "Description", v: "Shut down initiatives consuming tokens with no user activity" },
                    { k: "Typical Impact", v: "5–15% token spend reduction" },
                    { k: "Execution Time", v: "2–4 weeks" },
                  ],
                },
                {
                  title: "3 · Prompt Caching",
                  rows: [
                    { k: "Description", v: "Add caching to high-volume initiatives with repeated system prompts" },
                    { k: "Typical Impact", v: "30–50% token reduction per initiative" },
                    { k: "Execution Time", v: "1–2 sprints" },
                  ],
                },
                {
                  title: "4 · Model Right-Sizing",
                  rows: [
                    { k: "Description", v: "Downgrade reasoning models to standard models for non-reasoning tasks" },
                    { k: "Typical Impact", v: "40–60% cost reduction per affected agent" },
                    { k: "Execution Time", v: "1–2 sprints" },
                  ],
                },
                {
                  title: "5 · Shadow AI Governance Closure",
                  rows: [
                    { k: "Description", v: "Bring unauthorized AI usage into portfolio with proper controls" },
                    { k: "Typical Impact", v: "Risk reduction (non-quantified)" },
                    { k: "Execution Time", v: "4–8 weeks" },
                  ],
                },
                {
                  title: "6 · Duplicate Consolidation",
                  rows: [
                    { k: "Description", v: "Merge redundant initiatives solving the same problem in different LOBs" },
                    { k: "Typical Impact", v: "20–40% reduction in overlapping spend" },
                    { k: "Execution Time", v: "6–12 weeks" },
                  ],
                },
              ],
            },
            { t: "h", text: "Discovery Worksheet" },
            {
              t: "list",
              items: [
                "Ghost User Cleanup: >50% provisioned users with zero activity in past 60 days?",
                "Zombie Initiative: >$1,000/month tokens, <10 active users, <50 prompts/month?",
                "Prompt Caching: System prompt >500 tokens repeated every call? Caching implemented?",
                "Model Right-Sizing: Using reasoning model? Task requires multi-step reasoning?",
                "Shadow AI: Discovered via scanning/interviews vs formal intake? Operating without governance?",
                "Duplicate Consolidation: 2+ initiatives with >70% functionality overlap serving different departments?",
              ],
            },
            {
              t: "formula",
              label: "Prioritization Formula",
              text: "Quick Win Priority Score = (Estimated Annual Savings USD × Confidence Level 0–1) ÷ Execution Weeks",
            },
            {
              t: "note",
              kind: "info",
              title: "Worked Example",
              text: "Ghost User Cleanup: $50,000 × 0.9 ÷ 1.5 = 30,000.  Model Right-Sizing: $120,000 × 0.8 ÷ 2 = 48,000 ← execute first. Action: execute the top 5 by score in the first 90 days.",
            },
          ],
        },
        {
          id: "b7",
          title: "B.7 Executive Steering Committee",
          blocks: [
            {
              t: "lead",
              text: "Establish governance authority and decision rights at executive level.",
            },
            { t: "h", text: "Committee Composition" },
            {
              t: "kv",
              items: [
                { k: "Voting Members (Quorum 4 of 6)", v: "CTO (Chair), CRO, CISO, CDO, Head of AI/Innovation, CFO (budget approval authority)" },
                { k: "Standing Invitees (Non-Voting)", v: "General Counsel / Deputy, Chief Compliance Officer, Head of Model Risk Management, AI Portfolio Manager (reporting role)" },
              ],
            },
            { t: "h", text: "Decision Rights & Escalation Thresholds — Exclusive Authority Over" },
            {
              t: "list",
              ordered: true,
              items: [
                "Initiatives requiring >$1M annual investment",
                "All High-Risk initiatives before production deployment",
                "Sunset decisions for initiatives consuming >$500K annually",
                "Policy changes to intake criteria, risk tiering, governance requirements",
                "Strategic AI investments (platform acquisitions, partnerships, enterprise deployments)",
                "Cross-functional conflict resolution",
              ],
            },
            { t: "h", text: "Meeting Cadence" },
            {
              t: "cards",
              items: [
                {
                  title: "Monthly Standing Meeting",
                  tag: "90 min",
                  text: "Portfolio Health Score update with trend analysis · new initiative intake approvals (Gate 3 escalations) · risk incident review (P1/P2 past 30 days) · financial performance (spend vs budget, value realization).",
                },
                {
                  title: "Quarterly Deep Dive",
                  tag: "3 hrs",
                  text: "Peer benchmarking results (MIT CISR, PwC, Deloitte, IIF-EY) · strategic alignment review · maturity progression (Experimental → Departmental → Enterprise-Scale) · emerging risk landscape.",
                },
                {
                  title: "Ad-Hoc Emergency Sessions",
                  tag: "≤ 48 hrs",
                  text: "Convened for critical failures, regulatory inquiries, significant bias incidents, or major vendor outages.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* ───────────────────────────── SECTION C ───────────────────────────── */
    {
      id: "c",
      tag: "C",
      label: "Phase II",
      title: "Phase II — AI Management",
      phase: "Months 7–18",
      accent: "amber",
      summary:
        "Operationalization: portfolio health scoring, token economics, corrective action, sunset criteria, user personas, knowledge health, and rationalization.",
      subsections: [
        {
          id: "c0",
          title: "Executive Dashboard (One-Page)",
          blocks: [
            {
              t: "steps",
              items: [
                {
                  title: "1 · Portfolio Health at a Glance",
                  list: [
                    "Composite Portfolio Health Score: [XX/100] (↑↓ vs last month)",
                    "Initiatives by tier: Experimental [N], Departmental [N], Enterprise-Scale [N]",
                    "Risk distribution: High [N], Moderate [N], Low [N]",
                    "Monthly token spend: $XXX,XXX (XX% annual budget consumed YTD)",
                  ],
                },
                {
                  title: "2 · Value Realization",
                  list: [
                    "Total annualized value: $XX.XM",
                    "Portfolio ROI: [X.XX]×",
                    "Top 3 value-generating initiatives",
                  ],
                },
                {
                  title: "3 · Items Requiring Executive Decision",
                  list: [
                    "[N] initiatives awaiting Gate 3 approval",
                    "[N] initiatives flagged for sunset",
                    "[N] P1/P2 risk incidents",
                  ],
                },
                {
                  title: "4 · External Benchmark Position",
                  list: [
                    "AI Maturity Stage: [Stage X of 4]",
                    "Peer comparison: Top Quartile / Above Average / Average / Below Average",
                    "Gap to leaders: [2–3 sentence narrative]",
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "c1",
          title: "C.1 Portfolio Health Score",
          blocks: [
            {
              t: "lead",
              text: "A single quantitative signal aggregating heterogeneous initiatives into a comparable metric for executive decision-making.",
            },
            {
              t: "formula",
              label: "Composite Score Architecture",
              text: "PHS = Σ(wᵢ × Dᵢ) for i = 1..6  ·  wᵢ = weight (sum = 1.0)  ·  Dᵢ = dimension score (normalized 0–100)",
            },
            {
              t: "note",
              kind: "info",
              title: "Try it",
              text: "Use the Portfolio Health Score calculator in the Tools tab to compute the weighted composite live.",
            },
            { t: "h", text: "Six Dimensions & Weights" },
            {
              t: "cards",
              items: [
                { title: "D1 · Adoption & Usage", tag: "0.20", text: "Activation rate, DAU/MAU ratio, departmental coverage, production-to-pilot ratio." },
                { title: "D2 · Value Realization", tag: "0.25", text: "ROI per initiative, cost per outcome, attributed savings/revenue, time-to-value." },
                { title: "D3 · Operational Resilience", tag: "0.15", text: "Uptime, P99 latency, error rates, drift detection coverage, incident response time." },
                { title: "D4 · Governance & Risk", tag: "0.20", text: "% with completed RCSA, validation status, audit trail completeness, regulatory alignment." },
                { title: "D5 · Workforce Enablement", tag: "0.10", text: "Training completion, user satisfaction, hours recaptured per employee, role redesign progress." },
                { title: "D6 · Innovation Pipeline", tag: "0.10", text: "New use cases in intake, time-to-deployment, experimentation velocity." },
              ],
            },
            { t: "h", text: "Dimension Scoring Formulas" },
            { t: "formula", label: "D1 — Adoption & Usage", text: "D1 = 0.3·Activation + 0.25·(DAU/MAU) + 0.25·Coverage + 0.2·ProdRatio · Activation = min(100, Activated/Provisioned ×100) · DAU/MAU = min(100, Daily/Monthly ×300) [33% = 100] · Coverage = Depts using AI/Total ×100 · ProdRatio = min(100, Production/Total ×250) [40% = 100]" },
            { t: "formula", label: "D2 — Value Realization", text: "D2 = min(100, (Total Annualized Value ÷ Total Annualized Cost) × 33.33) · 1.5× ROI = 50 · 2.0× = 66 · 3.0× = 100 (capped)" },
            { t: "formula", label: "D3 — Operational Resilience", text: "D3 = 0.4·Uptime + 0.3·Latency + 0.3·(100 − ErrorRate) · Uptime = uptime % · Latency = max(0, 100 − ((P99 − SLA)/SLA ×100)) · ErrorRate = error % × 10" },
            { t: "formula", label: "D4 — Governance & Risk", text: "D4 = 0.3·G_RCSA + 0.3·G_Val + 0.2·G_Audit + 0.2·G_Reg · each G = % of initiatives meeting that requirement (0–100)" },
            { t: "formula", label: "D5 — Workforce Enablement", text: "D5 = 0.4·Training + 0.3·Satisfaction + 0.3·Productivity · Training = Certified/Total ×100 · Satisfaction = CSAT(1–5) ×20 · Productivity = min(100, Hours/8 ×100)" },
            { t: "formula", label: "D6 — Innovation Pipeline", text: "D6 = 0.4·I_Intake + 0.6·I_Velocity · I_Intake = min(100, New/Target ×100) · I_Velocity = max(0, 100 − ((AvgDays − 90)/90 ×100)) [90 days = 100]" },
            { t: "h", text: "Interpretation Scale" },
            {
              t: "table",
              head: ["Score", "Status", "Action"],
              rows: [
                ["85–100", "World-Class", "Benchmark for others; document & publish practices"],
                ["70–84", "Healthy", "Maintain momentum; focus on lagging dimensions"],
                ["55–69", "Developing", "Systematic improvement; prioritize governance & value gaps"],
                ["40–54", "At Risk", "Executive intervention required; high sunset priority"],
                ["0–39", "Critical", "Portfolio restructuring necessary; freeze new intake"],
              ],
            },
            {
              t: "note",
              kind: "warn",
              title: "Monthly Calculation",
              text: "Compute PHS on the first business day of the month and track it as a time-series. A decline of >5 points triggers immediate root cause analysis.",
            },
          ],
        },
        {
          id: "c2",
          title: "C.2 Token Economics Dashboard",
          blocks: [
            {
              t: "lead",
              text: "Real-time visibility into token consumption patterns, efficiency metrics, and cost anomalies.",
            },
            { t: "h", text: "Five Core Dashboard Panels" },
            {
              t: "cards",
              items: [
                {
                  title: "Panel 1 · Token Spend Overview",
                  text: "Stacked area chart of monthly spend by initiative (color by system type). Metrics: total monthly spend, input vs output tokens, cached savings, MoM growth %, YTD vs budget %. Alerts: MoM growth >25% without prompt growth; YTD >85% budget with >2 months remaining.",
                },
                {
                  title: "Panel 2 · Token-Prompt-User Matrix",
                  text: "Scatter plot, bubble size = spend. X = Prompts/User, Y = Tokens/User. Quadrants — Top-Left: Lone Rockets/Bloat (investigate); Top-Right: Bloat if high spend, healthy if efficient; Bottom-Left: Sleepers/Zombies (sunset); Bottom-Right: Efficient Engines (benchmark).",
                },
                {
                  title: "Panel 3 · Token Value Ratio Ranking",
                  text: "Horizontal bar chart sorted descending. TVR = Successful Outcomes ÷ (Total Tokens ÷ 1,000,000). Identify highest value per token; low-TVR = optimization targets.",
                },
                {
                  title: "Panel 4 · Input/Output Token Split",
                  text: "Stacked horizontal bar per initiative: input %, output %, cached % savings. Alerts: input >75% (add caching); output >60% (add max token limits); cached >30% (well-optimized).",
                },
                {
                  title: "Panel 5 · Cost per Outcome Trends",
                  text: "Line chart over time for top 10 by spend. Cost/Outcome = Monthly Spend ÷ Successful Outcomes. Alerts: cost up >15% over 3 months (drift); cost >$2.00 for customer service (human parity).",
                },
              ],
            },
            { t: "h", text: "Data Refresh & Access" },
            {
              t: "kv",
              items: [
                { k: "Panels 1–2", v: "Real-time (15 min updates)" },
                { k: "Panels 3–5", v: "Daily (midnight UTC)" },
                { k: "Executive / Portfolio Mgr", v: "All panels, all initiatives" },
                { k: "Initiative Owner", v: "All panels, their initiatives only" },
              ],
            },
            { t: "h", text: "Technical Implementation" },
            {
              t: "list",
              items: [
                "Data sources: LLM API gateway logs, cloud billing APIs (AWS/Azure/GCP), application DBs, user activity logs",
                "Platform: Tableau, Power BI, or Looker with direct SQL to centralized data warehouse",
                "Update frequency: pipeline every 15 min for real-time; overnight batch for daily",
              ],
            },
          ],
        },
        {
          id: "c3",
          title: "C.3 Corrective Action Workflow",
          blocks: [
            {
              t: "lead",
              text: "A systematic process for identifying, escalating, and resolving portfolio issues before they become crises.",
            },
            { t: "h", text: "Automated Alert Triggers" },
            {
              t: "table",
              head: ["Priority", "Trigger", "Auto-assigned owners"],
              rows: [
                ["P1", "Answer faithfulness <60% (customer-facing)", "Model Risk + Initiative Owner"],
                ["P1", "High-Risk in production, no validation", "CRO + Initiative Owner"],
                ["P2", "Token spend MoM >25%, flat prompt count", "FinOps + Engineering Lead"],
                ["P2", "Retrieval failure rate >25%", "Data Engineering + Initiative Owner"],
                ["P3", "Ghost user rate >50% for 90+ days", "Initiative Owner + Enablement"],
                ["P3", "Input tokens >75%, no caching", "Engineering Lead"],
                ["P5", "Meets 2+ sunset criteria", "Portfolio Manager"],
              ],
            },
            { t: "h", text: "Six-Step Workflow" },
            {
              t: "steps",
              items: [
                { title: "1 · Ticket Generation", text: "System auto-creates ticket: Initiative ID, trigger condition, priority, auto-assigned owners, timestamp." },
                { title: "2 · Initial Assessment", text: "SLA 5 business days (P1/P2), 10 days (P3). Owner investigates root cause, documents findings, proposes remediation plan with timeline and resources." },
                { title: "3 · Remediation Approval", text: "P1: CRO or CTO approval. P2: Portfolio Manager approval. P3: Initiative Owner proceeds without additional approval." },
                { title: "4 · Execution", text: "Owner executes per approved plan, updates ticket with milestones, flags blockers/delays immediately." },
                { title: "5 · Verification", text: "Automated monitoring confirms resolution. Resolved → close & document. Not resolved → re-open, escalate priority by one level, add resources." },
                { title: "6 · Lessons Learned (P1/P2 only)", text: "Blameless postmortem within 30 days; document what happened, why, how fixed, how to prevent recurrence; share at monthly ESC." },
              ],
            },
            { t: "h", text: "Escalation Matrix" },
            {
              t: "list",
              items: [
                "P1: not resolved in 5 days → escalate to CRO + CTO (joint)",
                "P2: not resolved in 10 days → escalate to CTO",
                "P3: not resolved in 20 days → Portfolio Manager decides: extend SLA or escalate",
                "P5: not resolved in 90 days → initiative proceeds to sunset by default",
              ],
            },
            {
              t: "note",
              kind: "info",
              title: "Monthly Corrective Action Report",
              text: "Ticket volume (opened by priority, closed, backlog >30 days) · recurring issues (most frequent triggers, repeat initiatives) · systemic patterns (system types over-represented in P1/P2; governance gaps concentrated in business lines) · recommendations for preventive measures.",
            },
          ],
        },
        {
          id: "c4",
          title: "C.4 Sunset Criteria",
          blocks: [
            {
              t: "lead",
              text: "A structured, defensible framework for retiring non-value-delivering initiatives.",
            },
            { t: "h", text: "Six Formal Sunset Criteria (qualifies with 2+)" },
            {
              t: "list",
              ordered: true,
              items: [
                "Insufficient ROI: annualized value <1.2× cost for 2+ consecutive quarters",
                "Technical Failure: uptime <95% or error rate >5% persistently despite remediation",
                "Strategic Misalignment: no longer supports any top-5 enterprise strategic objective",
                "Adoption Failure: <20% activation after 6+ months in production with adequate enablement",
                "Governance Irreparability: cannot achieve required controls within acceptable cost/timeline",
                "Vendor/Technology Obsolescence: platform deprecated or vendor reliability compromised",
              ],
            },
            { t: "h", text: "Sunset Decision Matrix" },
            {
              t: "table",
              head: ["Score", "Decision"],
              rows: [
                ["0–1", "No sunset action; remains in portfolio"],
                ["2", "Sunset review triggered; Portfolio Manager prepares disposition recommendation"],
                ["3+", "Strong sunset case; recommend immediate retirement unless compelling business case"],
              ],
            },
            { t: "h", text: "Four-Step Sunset Review Process" },
            {
              t: "steps",
              items: [
                { title: "Step 1 · Notification (Day 0)", text: "Portfolio Manager notifies Initiative Owner and Executive Sponsor; provides 15 business days for written justification for continuation." },
                { title: "Step 2 · Justification (Days 1–15)", text: "Sponsor may argue continuation with: evidence criteria no longer met; credible plan with timeline/resources to address deficiencies; demonstration of imminent strategic importance not captured in current criteria." },
                { title: "Step 3 · PM Recommendation (Days 16–20)", text: "Reviews justification; prepares formal disposition — Sunset, Conditional Continuation (with controls), or Full Continuation — and documents rationale." },
                { title: "Step 4 · ESC Decision (Next Monthly Meeting)", text: "Committee reviews; simple-majority vote. Outcomes: Approve Sunset (deprecate within 60 days); Conditional Continuation (90-day remediation with milestones or auto-sunset); Full Continuation (reevaluate in 12 months)." },
              ],
            },
            { t: "h", text: "Sunset Execution Checklist" },
            {
              t: "list",
              items: [
                "User notification (30 days advance minimum)",
                "Alternative solution identified and communicated",
                "Data export/archival per retention policy",
                "Licenses/subscriptions cancelled",
                "Infrastructure decommissioned",
                "Documentation archived",
                "Lessons learned documented",
                "Budget recaptured and reallocated",
                'Final: remove from Master Model Inventory; mark "Decommissioned [Date]"',
              ],
            },
          ],
        },
        {
          id: "c5",
          title: "C.5 User Persona Segmentation",
          blocks: [
            {
              t: "lead",
              text: "Classify users by engagement patterns to tailor enablement, identify champions, and detect at-risk adoption.",
            },
            {
              t: "cards",
              items: [
                { title: "Power Users", tag: "Very High", text: "Top 20% by prompt volume; weekly+ usage; 3–5× productivity gains. Business impact: High." },
                { title: "Regular Adopters", tag: "Moderate", text: "Mid-tier engagement; consistent but not intensive; monthly usage. Business impact: Moderate." },
                { title: "Dabblers", tag: "Low", text: "Activated but <2 prompts/month; tried once or twice and stopped. Business impact: Minimal." },
                { title: "Ghosts", tag: "None", text: "Provisioned access but zero usage in 60+ days. Business impact: Negative (license waste)." },
              ],
            },
            {
              t: "formula",
              label: "Classification Logic",
              text: "PPM = prompts in last 30 days ÷ 1 · DAM = distinct active days in last 30 · Ghost: PPM=0 AND last activity >60d · Dabbler: PPM<2 AND DAM<3 · Regular: PPM 2–20 OR DAM 3–15 · Power: PPM>20 OR DAM>15 OR top-20% by volume",
            },
            {
              t: "note",
              kind: "info",
              title: "Try it",
              text: "Use the User Persona classifier in the Tools tab to segment a user from PPM and DAM.",
            },
            { t: "h", text: "Persona-Specific Interventions" },
            {
              t: "kv",
              items: [
                { k: "Power Users", v: "Amplify impact — early access, case studies, peer coaching roles, direct feedback channel." },
                { k: "Regular Adopters", v: "Deepen engagement — workflow integration (email/calendar/docs), advanced training, use case templates." },
                { k: "Dabblers", v: 'Re-engage — targeted outreach with "5-minute win" content, role-specific use cases, 1:1 enablement.' },
                { k: "Ghosts", v: "Deprovision or activate — 30-day re-engagement notice; if no activity, deprovision to recover license cost." },
              ],
            },
            { t: "h", text: "Health Metrics" },
            {
              t: "list",
              items: [
                "Healthy distribution — Power 15–25%, Regular 40–60%, Dabblers 15–25%, Ghosts <10%",
                "Warning: Ghosts >30% (severe adoption failure); Power Users <10% (lack of champions); Dabblers >40% (onboarding failing)",
              ],
            },
            {
              t: "formula",
              label: "Manager Adoption Ratio",
              text: "MAR = Avg Prompts/Manager ÷ Avg Prompts/IC · >1.0 healthy top-down endorsement · 0.7–1.0 neutral · <0.7 fragile (managers not using tools they ask teams to use)",
            },
            {
              t: "note",
              kind: "warn",
              title: "Corrective Action",
              text: "If MAR <0.7 for any department, schedule an executive briefing to understand barriers and secure explicit endorsement.",
            },
          ],
        },
        {
          id: "c6",
          title: "C.6 Knowledge Foundation Health",
          blocks: [
            {
              t: "lead",
              text: "For RAG and agent initiatives, monitor quality and freshness of the underlying knowledge base to prevent silent performance degradation.",
            },
            { t: "h", text: "Four Core KFH Metrics" },
            {
              t: "table",
              head: ["Metric", "Healthy", "Alert"],
              rows: [
                ["Context Relevance — % retrieved chunks responsive to query", ">75%", "<50%"],
                ["Answer Faithfulness — % answer claims traceable to context", ">85%", "<70%"],
                ["Retrieval Failure Rate — % queries with no useful context", "<10%", ">25%"],
                ["KB Freshness — % docs updated within staleness window", ">90%", "<70%"],
              ],
            },
            { t: "h", text: "Measurement Methodology" },
            {
              t: "list",
              items: [
                'Context Relevance: LLM-as-Judge — "Does context contain info to help answer query? Yes/No + explain." Aggregate over 100-sample set weekly.',
                "Answer Faithfulness: LLM-as-Judge identifies unsupported claims. Faithfulness = 1 − (Unsupported ÷ Total Claims).",
                "Retrieval Failure Rate: automated from logs — zero results or similarity score < threshold = failure.",
                "KB Freshness: compare last-modified to staleness window (e.g., policy 90d, product 30d); aggregate % within window.",
              ],
            },
            {
              t: "formula",
              label: "KFH Composite Score",
              text: "KFH = 0.3·CR + 0.3·AF + 0.2·(100 − RFR) + 0.2·KBF · >80 Excellent · 60–80 Adequate (monitor) · <60 compromising performance (immediate remediation)",
            },
            {
              t: "note",
              kind: "info",
              title: "Try it",
              text: "Use the KFH calculator in the Tools tab to compute the composite from the four metrics.",
            },
            { t: "h", text: "Corrective Actions by Low Metric" },
            {
              t: "kv",
              items: [
                { k: "Context Relevance <50%", v: "Poor embeddings/chunking → re-index; test chunk sizes 256/512/1024 tokens." },
                { k: "Answer Faithfulness <70%", v: 'Model ignoring context → strengthen prompt: "ONLY use provided context; if not present, say I don\'t know."' },
                { k: "Retrieval Failure >25%", v: "KB doesn't cover queries → expand coverage; analyze failed queries for gaps." },
                { k: "KB Freshness <70%", v: "Stale docs → assign content stewards; mandatory refresh cadence for high-retrieval docs." },
              ],
            },
            {
              t: "note",
              kind: "warn",
              title: "High-Retrieval Document Audit",
              text: "Monthly: export the 20 most-retrieved docs per RAG initiative. Check last-updated within window, spot-check 3–5 facts, confirm content steward, retirement plan. Escalation: any doc retrieved >100×/month not updated in >90 days auto-flags for steward review.",
            },
          ],
        },
        {
          id: "c7",
          title: "C.7 Quarterly Portfolio Rationalization",
          blocks: [
            {
              t: "lead",
              text: "Systematically review the entire portfolio every 90 days to ensure resources flow to the highest-value initiatives.",
            },
            {
              t: "kv",
              items: [
                { k: "Q1 Review", v: "April (reviewing Jan–Mar)" },
                { k: "Q2 Review", v: "July (reviewing Apr–Jun)" },
                { k: "Q3 Review", v: "October (reviewing Jul–Sep)" },
                { k: "Q4 Review", v: "January (reviewing Oct–Dec)" },
              ],
            },
            { t: "h", text: "Gartner TIME Framework Adaptation" },
            {
              t: "cards",
              items: [
                { title: "Invest", text: "High health (>70), high strategic alignment, scaling opportunity → increase budget, expand scope, prioritize feature requests." },
                { title: "Tolerate", text: "Moderate health (55–70), delivers value but not strategic, stable → maintain current investment; monitor quarterly." },
                { title: "Migrate", text: "Low health (<55) but salvageable with architectural change → 90-day remediation plan with milestones; reevaluate next quarter." },
                { title: "Eliminate", text: "Meets 2+ sunset criteria; remediation not viable → formal sunset process." },
              ],
            },
            { t: "h", text: "Four-Week Rationalization Process" },
            {
              t: "steps",
              items: [
                { title: "Week 1 · Data Preparation", text: "PM generates health scores, financial performance, governance status; flags 2+ sunset criteria; calculates resource consumption (budget, FTE, token spend) per initiative." },
                { title: "Week 2 · Owner Submissions", text: "One-page brief: achievements (quantitative), challenges, requested category (Invest/Tolerate/Migrate — owners cannot self-recommend Eliminate), justification." },
                { title: "Week 3 · PM Review", text: "Applies objective categorization based on health score, ROI, strategic alignment; documents discrepancies and override rationale." },
                { title: "Week 4 · ESC Session (3-hr deep dive)", text: "Invest/Tolerate: PM authority, ESC informed. Migrate: ESC approves remediation plan & 90-day milestones. Eliminate: ESC votes (simple majority)." },
              ],
            },
            { t: "h", text: "Post-Rationalization Actions" },
            {
              t: "kv",
              items: [
                { k: "Invest", v: "Finance allocates additional budget; PM works on scaling plan; feature in internal communications as success stories." },
                { k: "Tolerate", v: "Budget maintained; continue standard monitoring." },
                { k: "Migrate", v: "Detailed remediation plan within 10 business days; accelerated monthly check-ins. If still Migrate after 2 quarters → auto-escalate to Eliminate." },
                { k: "Eliminate", v: "Sunset execution per C.4; budget recaptured and redistributed to Invest initiatives." },
              ],
            },
            {
              t: "note",
              kind: "warn",
              title: "Trend to Watch",
              text: "Healthy portfolios see 10–15% annual turnover. <5% = risk aversion; >25% = instability or poor intake discipline.",
            },
          ],
        },
      ],
    },

    /* ───────────────────────────── SECTION D ───────────────────────────── */
    {
      id: "d",
      tag: "D",
      label: "Phase III",
      title: "Phase III — AI Maturity",
      phase: "Months 19–36",
      accent: "violet",
      summary:
        "Advanced orchestration: multi-level eval aggregation, peer benchmarking, progressive agentic governance, ROI modeling, strategic alignment, and continuous optimization.",
      subsections: [
        {
          id: "d1",
          title: "D.1 Multi-Level Eval Aggregation",
          blocks: [
            {
              t: "lead",
              text: "Systematically evaluate from individual LLM calls (spans) through tasks (traces) to user sessions and portfolio-level performance.",
            },
            { t: "h", text: "Four-Level Evaluation Hierarchy" },
            {
              t: "cards",
              items: [
                { title: "Span", tag: "→ Trace", text: "Single LLM call or tool invocation. Measures: latency, token cost, output format validity, tool parameter correctness." },
                { title: "Trace", tag: "→ Session", text: "Complete end-to-end task. Measures: goal fulfillment, reasoning quality, tool selection, execution efficiency." },
                { title: "Session", tag: "→ Initiative", text: "Full multi-turn user interaction. Measures: coherence, context retention, goal achievement across turns." },
                { title: "Initiative", tag: "→ Portfolio", text: "All sessions for an initiative. Measures: adoption, TVR, operational performance, KFH score." },
              ],
            },
            { t: "h", text: "System-Type-Specific Evaluation Profiles" },
            {
              t: "cards",
              items: [
                { title: "Profile A · Chatbot / Single-Turn API", text: "Span: format adherence (JSON schema), instruction following, latency (P50/P95/P99), token efficiency. Session: resolution rate, avg turns to resolution, CSAT." },
                { title: "Profile B · RAG Pipeline", text: "Retrieval (span): precision, recall, retrieval failure rate. Generation (trace): answer faithfulness, answer relevance, hallucination detection." },
                { title: "Profile C · Goal-Based Agent (Agent GPA)", text: "Trace evals — Goal Fulfillment 0.25, Logical Consistency 0.15, Execution Efficiency 0.15, Plan Adherence 0.10, Plan Quality 0.10, Tool Selection 0.15, Tool Calling 0.10." },
                { title: "Profile D · Multi-Agent / Hierarchical", text: "Additional trace evals: handoff success rate, orchestration overhead, agent conflict rate, decision chain completeness." },
              ],
            },
            { t: "h", text: "Offline + Online Dual Pipeline" },
            {
              t: "kv",
              items: [
                { k: "Offline (Pre-Deployment)", v: "Runs against golden dataset (50–100 cases) on every prompt change, model upgrade, or agent logic change; CI/CD pass/fail gates prevent regression." },
                { k: "Offline Thresholds", v: "Task completion: no regression >3% · Answer faithfulness: no regression >5% · Latency: no regression >20%" },
                { k: "Online (Production)", v: "Lightweight heuristics on 100% traffic; LLM-as-Judge on 5–10% sampled; drift detection (7-day rolling avg, alert if decline >10%); user feedback integration." },
              ],
            },
            {
              t: "note",
              kind: "good",
              title: "Feedback Loop",
              text: "Production traces failing online evals + human review are auto-added to the golden dataset, continuously expanding coverage.",
            },
            { t: "h", text: "Normalization-to-Aggregation Pipeline" },
            {
              t: "steps",
              items: [
                { title: "Step 1", text: "Collect raw metrics tagged by Initiative ID and System Type." },
                { title: "Step 2", text: "Normalize within System Type (min-max): Normalized = (Raw − Min_type) ÷ (Max_type − Min_type)." },
                { title: "Step 3", text: "Aggregate into five type-agnostic dimensions: Operational Performance, Knowledge Quality, Behavioral Integrity, Token Economics, Governance Compliance." },
                { title: "Step 4", text: "Calculate Initiative-Level OPS = Σ(w_d × D_{i,d}) for d = 1..5." },
                { title: "Step 5", text: "Portfolio roll-up to the Portfolio Health Score." },
              ],
            },
            { t: "h", text: "Golden Dataset & Tooling" },
            {
              t: "list",
              items: [
                "Initial: 50–100 examples — frequent production queries, past failures, adversarial edge cases. Format: input + expected output + criteria; versioned with prompt/model.",
                "Automated expansion: alert+review candidates; confirmed failure + corrected output auto-added; LLM synthetic inputs (human-verified).",
                "Quality: inter-annotator Cohen's kappa >0.7; add 10–20 cases/quarter; retire examples with >95% pass for 6+ months.",
                "Unified layer: LangSmith or Arize AI (observability, trace storage, dashboards, SSO, audit). Specialized: RAGAS (RAG), custom Agent GPA evaluators, Promptfoo (CI/CD).",
                "Implementation: 2–3 months initial setup; ~0.5 FTE ongoing maintenance.",
              ],
            },
          ],
        },
        {
          id: "d2",
          title: "D.2 Peer Benchmarking",
          blocks: [
            {
              t: "lead",
              text: "Compare portfolio performance against internal and external peers to identify gaps and validate direction.",
            },
            { t: "h", text: "Internal Benchmarking (Cross-Business Line)" },
            {
              t: "list",
              items: [
                "Quarterly report metrics: Portfolio Health Score, Adoption %, ROI, Governance Compliance %, Production Ratio %, Avg Cost per Outcome",
                "Identify leading LOB and document practices; lagging LOBs receive targeted support",
                'Quarterly "Portfolio Leaders Forum" for knowledge sharing',
              ],
            },
            { t: "h", text: "External Benchmarking Sources" },
            {
              t: "cards",
              items: [
                { title: "MIT CISR Enterprise AI Maturity Model", text: "Four stages: 1 Experimentation (scattered pilots) · 2 Fragmentation (siloed, limited governance) · 3 Integration (centralized function, standardized platforms, portfolio discipline) · 4 Transformation (AI embedded in strategy, continuous innovation, financially outperforms peers). Annual Q4 self-assessment; report to board." },
                { title: "PwC AI Benchmarking Framework", text: "Five themes (30+ metrics): Financial Impact, Operational Efficiency, Functional Impact, Trust & Resilience, Workforce Readiness. Annual, fee-based ($50K–$150K). Most granular cross-industry comparison; percentile ranking." },
                { title: "Deloitte State of AI in the Enterprise", text: "Survey-based, publicly available; 3,000+ global leaders annually. Industry averages: % projects in production, transformation depth, revenue growth via AI, governance maturity. Free; published Q1." },
                { title: "IIF-EY Annual AI Survey (FIs)", text: "Most relevant for GSIB: AI use cases, governance maturity, risk management across global banks. Calibrated to SR 11-7, GDPR, Basel guidance. Member fee; survey Q3, results Q4." },
              ],
            },
            { t: "h", text: "Benchmarking Cadence" },
            {
              t: "kv",
              items: [
                { k: "Internal (Cross-LOB)", v: "Quarterly → Executive Steering Committee" },
                { k: "MIT CISR Maturity", v: "Annual Q4 → Board of Directors" },
                { k: "PwC Detailed Study", v: "Annual (if budget approved) → CTO + CFO + Board" },
                { k: "Deloitte Public Report", v: "Annual Q1 → Portfolio Manager (informational)" },
                { k: "IIF-EY FI Survey", v: "Annual Q3 → CRO + Executive Steering Committee" },
              ],
            },
            { t: "h", text: "Gap-to-Leaders Analysis (5-Step)" },
            {
              t: "list",
              ordered: true,
              items: [
                "Identify the Gap: where are we vs top quartile on each dimension?",
                "Quantify Impact: what would closing the gap mean financially/operationally?",
                "Root Cause: why does the gap exist? Tooling? Process? Skills?",
                "Close the Gap: define initiatives addressing root cause; set 6- and 12-month milestones",
                'Track Progress: add "Gap to Top Quartile" as a tracked KPI; report quarterly to ESC',
              ],
            },
          ],
        },
        {
          id: "d3",
          title: "D.3 Progressive Governance for Agentic AI",
          blocks: [
            {
              t: "lead",
              text: "Scale governance from rule-based controls to adaptive, context-aware oversight — enabling innovation without compromising risk management.",
            },
            { t: "h", text: "Five Autonomy Levels" },
            {
              t: "cards",
              items: [
                { title: "Level 0 · Human-Directed", text: "Agent suggests; human approves every action. Governance: standard pre-deployment validation." },
                { title: "Level 1 · Constrained Autonomy", text: "Agent acts within narrow, pre-approved parameters. Governance: action allowlist; transaction limits." },
                { title: "Level 2 · Supervised Autonomy", text: "Agent acts freely; human reviews periodically. Governance: audit trail; random sampling review." },
                { title: "Level 3 · Monitored Autonomy", text: "Agent acts independently; automated monitoring. Governance: drift detection; behavior anomaly alerts." },
                { title: "Level 4 · Full Autonomy", text: "Agent operates with minimal human oversight. Governance: continuous governance; real-time intervention capability." },
              ],
            },
            { t: "h", text: "Graduation Criteria" },
            {
              t: "table",
              head: ["Transition", "Criteria"],
              rows: [
                ["Level 0 → 1", "90 days error-free, 95%+ human approval rate"],
                ["Level 1 → 2", "6 months within constraints, zero critical incidents"],
                ["Level 2 → 3", "12 months, audit findings <5%, governance attestation"],
                ["Level 3 → 4", "18 months, mature monitoring, Model Risk Committee approval"],
              ],
            },
            { t: "h", text: "Governance Requirements (Level 2+)" },
            {
              t: "list",
              items: [
                "Decision Chain Logging: every action (timestamp, user context, goal, reasoning, tools, outputs); immutable & tamper-evident (cryptographic hashing); retain 7 years for High-Risk agents",
                "Behavioral Boundary Detection: define expected envelope (allowed tools, data sources, decision domains); alert when outside envelope",
                "Tool Selection Accuracy Monitoring: track vs optimal tool; alert if <90% over rolling 30 days",
                "Emergency Intervention: Killswitch (Risk Officer & CTO access); real-time constraint modification (reduce autonomy without redeploy); Quarantine mode (outputs held for human review)",
                "Multi-Agent Interaction Tracking: log all agent-to-agent handoffs; detect circular delegation loops; measure orchestration overhead",
              ],
            },
            { t: "h", text: "Graduated Risk Controls by Level" },
            {
              t: "table",
              head: ["Level", "Pre-Deploy", "Runtime", "Post-Deploy"],
              rows: [
                ["0–1", "Standard validation", "Human approval every action", "Monthly attestation"],
                ["2", "Enhanced + 30-day shadow", "Random sampling (10%)", "Quarterly audit"],
                ["3", "Independent + 90-day probation", "Automated monitoring + drift", "Quarterly governance review"],
                ["4", "Full SR 11-7 + MRC approval", "Continuous + real-time alerts", "Quarterly + annual re-validation"],
              ],
            },
            { t: "h", text: "Quarterly Autonomy Level Review" },
            {
              t: "list",
              items: [
                "Assess: error rate acceptable for level? critical failures/governance breaches? meets next-level graduation criteria?",
                "Outcomes: Graduate · Maintain · Demote · Retire",
                "Automatic demotion: critical incident (customer harm, regulatory breach, financial loss >$100K); error rate spike >20% above baseline for 14+ days; governance violation (operating outside boundaries)",
              ],
            },
          ],
        },
        {
          id: "d4",
          title: "D.4 Value Realization ROI Model",
          blocks: [
            {
              t: "lead",
              text: "Quantify the financial and operational value delivered by the AI portfolio.",
            },
            { t: "h", text: "Four Value Categories" },
            {
              t: "cards",
              items: [
                { title: "1 · Cost Savings (Direct)", text: "Cost Savings = (Pre-AI Cost/Unit × Units Automated) − AI Operational Cost. Ex: chatbot ($8 × 50,000) − $150K = $250K net." },
                { title: "2 · Productivity Gains (Indirect)", text: "Productivity = Hours Recaptured × Employees × Loaded Hourly Cost × Value Capture Rate (conservative 0.5, optimistic 0.7). Ex: 8h × 200 devs × $85 × 0.5 × 50 weeks = $3.4M." },
                { title: "3 · Revenue Enhancement", text: "Revenue Value = Incremental Revenue (A/B tested) × Gross Margin. Ex: $500M × 1.2% = $6M × 35% = $2.1M." },
                { title: "4 · Risk Mitigation", text: "Risk Value = Expected Loss Reduction × Probability. Ex: $5M × 0.3 = $1.5M." },
              ],
            },
            { t: "h", text: "Portfolio ROI Calculation" },
            {
              t: "formula",
              text: "Total Annual Value = Σ(Cost Savings + Productivity + Revenue + Risk) · Total Annual Cost = Σ(API + Infrastructure + Labor + Tooling) · Portfolio ROI = Total Value ÷ Total Cost",
            },
            {
              t: "kv",
              items: [
                { k: "Experimental", v: "ROI >1.2× (breakeven + 20%)" },
                { k: "Departmental", v: "ROI >1.5×" },
                { k: "Enterprise-scale", v: "ROI >2.0×" },
                { k: "Portfolio aggregate", v: "ROI >2.5× by Year 3" },
              ],
            },
            {
              t: "note",
              kind: "info",
              title: "Try it",
              text: "Use the ROI / Value calculator in the Tools tab to total the four categories and compute portfolio ROI.",
            },
            { t: "h", text: "Time-to-Value Tracking" },
            {
              t: "list",
              items: [
                "TTV = days from production deployment to breakeven (cumulative value = cumulative cost)",
                "Low-complexity (chatbot, simple RAG): TTV <180 days",
                "Medium-complexity (goal-based agent): TTV <270 days",
                "High-complexity (multi-agent, workflow automation): TTV <365 days",
                "Corrective action: in production >2× target TTV and not at breakeven → escalate to sunset review",
              ],
            },
            {
              t: "note",
              kind: "info",
              title: "Value Realization Dashboard (Monthly for ESC)",
              text: "Cost Savings, Productivity, Revenue, Risk Mitigation — each This Month / YTD / Annual Target — plus Total Value, Total Cost, and Portfolio ROI.",
            },
          ],
        },
        {
          id: "d5",
          title: "D.5 Strategic Alignment Scorecard",
          blocks: [
            {
              t: "lead",
              text: "Ensure portfolio composition reflects and advances the enterprise's top strategic objectives.",
            },
            { t: "h", text: "Enterprise Strategic Objectives (Example for GSIB)" },
            {
              t: "list",
              ordered: true,
              items: [
                "Enhance Customer Experience: +15 NPS points; −30% service resolution time",
                "Improve Operational Efficiency: reduce cost-to-income ratio 62% → 55%",
                "Strengthen Risk & Compliance Posture: zero critical audit findings; 100% on-time regulatory reporting",
                "Drive Revenue Growth: 8% annual growth in fee-based income",
                "Accelerate Innovation: 10+ new digital products annually; −40% time-to-market",
              ],
            },
            { t: "h", text: "Initiative-to-Objective Mapping (Example)" },
            {
              t: "kv",
              items: [
                { k: "Customer Service Chatbot", v: "Obj 1 (Customer Experience) + Obj 2 (Efficiency)" },
                { k: "Compliance Monitoring Agent", v: "Obj 3 (Risk & Compliance)" },
                { k: "Product Recommendation Engine", v: "Obj 1 (Customer Experience) + Obj 4 (Revenue)" },
                { k: "AI Code Assistant", v: "Obj 2 (Efficiency) + Obj 5 (Innovation)" },
              ],
            },
            { t: "h", text: "Portfolio Alignment Metrics" },
            {
              t: "formula",
              label: "Objective Coverage",
              text: "Coverage_j = Initiatives Supporting Objective j ÷ Total Initiatives · Healthy: each objective ≥20% · Red flag: any objective <10% = not aligned with strategy",
            },
            {
              t: "formula",
              label: "Resource Allocation Alignment",
              text: "Budget Alignment_j = Budget for Initiatives Supporting Objective j ÷ Total Portfolio Budget · compare to executive-stated priority weighting",
            },
            {
              t: "note",
              kind: "info",
              title: "Example",
              text: "Objective 1 stated as 30% priority but only 18% of AI budget supports it → 12-point gap → rebalance portfolio in next intake cycle.",
            },
            { t: "h", text: "Annual Strategic Alignment Review (Q4, 6-Step)" },
            {
              t: "list",
              ordered: true,
              items: [
                "Refresh enterprise strategic objectives from CEO/Board plan",
                "Re-map all initiatives to objectives (objectives may have changed)",
                "Calculate coverage and budget alignment metrics",
                "Identify gaps: under-supported objectives? over-invested?",
                "Rebalancing: sunset initiatives supporting deprecated objectives; prioritize intake for under-supported; reallocate budget",
                "Present to Executive Steering Committee for approval",
              ],
            },
          ],
        },
        {
          id: "d6",
          title: "D.6 Continuous Optimization Roadmap",
          blocks: [
            {
              t: "lead",
              text: "Define the ongoing improvement cycle that keeps the portfolio at the leading edge.",
            },
            {
              t: "cards",
              items: [
                {
                  title: "Year 1 Focus",
                  text: "Q1–Q2: prompt caching across top-10 spend (target −30% cost); model right-sizing (target −40%); quarterly ghost-user cleanup (target 15% license recovery). Q3–Q4: KFH >80 for all RAG; golden datasets + CI/CD eval gates for all production; first external benchmark baseline.",
                },
                {
                  title: "Year 2 Focus",
                  text: "Q1–Q2: progressive autonomy framework (L0–4); hierarchical multi-agent for complex workflows (target −50% cycle time); Agent GPA for all goal-based agents. Q3–Q4: 10–15% annual turnover; all initiatives quantified ROI with monthly tracking; budget within 5% of strategic priorities.",
                },
                {
                  title: "Year 3 Focus",
                  text: "Q1–Q2: 50%+ initiatives at Level 3+ autonomy; real-time optimization (alerts, drift, corrective tickets <15 min latency); best-practices repository 20+ patterns. Q3–Q4: PHS >85 (World-Class); top-quartile external performance; MIT CISR Stage 4.",
                },
                {
                  title: "Innovation Pipeline (Ongoing)",
                  text: "5–10 new intakes/quarter; 2–3 advanced technique pilots/year (GraphRAG, multi-agent orchestration, reasoning chains, multimodal agents); annual AI Innovation Week hackathon (top 3 fast-tracked); quarterly tech horizon scanning; one rotating 6-month Future-of-AI research FTE.",
                },
              ],
            },
          ],
        },
      ],
    },

    /* ───────────────────────────── SECTION E ───────────────────────────── */
    {
      id: "e",
      tag: "E",
      label: "Resources",
      title: "Cross-Phase Resources",
      phase: "Reference",
      accent: "slate",
      summary:
        "Master metrics dictionary, dashboard technical specs, executive reporting templates, and integration architecture.",
      subsections: [
        {
          id: "e1",
          title: "E.1 Master Metrics Dictionary",
          blocks: [
            {
              t: "lead",
              text: "Standardized definitions for consistent interpretation and aggregation.",
            },
            {
              t: "kv",
              items: [
                { k: "Activation Rate", v: "(Users with ≥1 prompt) ÷ (Total provisioned users) × 100%" },
                { k: "Daily Active Users (DAU)", v: "Unique users with ≥1 interaction on a given day" },
                { k: "Monthly Active Users (MAU)", v: "Unique users with ≥1 interaction in a 30-day period" },
                { k: "DAU/MAU Ratio", v: "DAU ÷ MAU; measures stickiness (higher = more frequent return)" },
                { k: "Prompts per User (PPU)", v: "Total prompts ÷ Unique active users in period" },
                { k: "Tokens per Prompt (TPP)", v: "Total tokens ÷ Total prompts submitted" },
                { k: "Tokens per User (TPU)", v: "Total tokens ÷ Unique active users" },
                { k: "Token Value Ratio (TVR)", v: "Successful outcomes ÷ (Total tokens ÷ 1,000,000)" },
                { k: "Cost per Outcome", v: "Total spend ÷ Number of successful outcomes" },
                { k: "Task Completion Rate", v: "(Tasks completed) ÷ (Total attempted) × 100%" },
                { k: "Retrieval Failure Rate", v: "(Queries with zero relevant context) ÷ (Total queries) × 100%" },
                { k: "Answer Faithfulness", v: "(Claims grounded in context) ÷ (Total claims) × 100%" },
                { k: "Context Relevance", v: "(Chunks responsive to query) ÷ (Total retrieved chunks) × 100%" },
                { k: "Knowledge Base Freshness", v: "(Docs updated within window) ÷ (Total docs) × 100%" },
                { k: "Production-to-Pilot Ratio", v: "(Initiatives in production) ÷ (Total initiatives) × 100%" },
                { k: "Governance Compliance Rate", v: "(Initiatives meeting all requirements) ÷ (Total) × 100%" },
                { k: "Portfolio ROI", v: "(Total annual value delivered) ÷ (Total annual cost incurred)" },
                { k: "Time-to-Value (TTV)", v: "Days from production deployment to breakeven" },
                { k: "Portfolio Health Score (PHS)", v: "Weighted composite: Adoption .20 + Value .25 + Resilience .15 + Governance .20 + Workforce .10 + Innovation .10; scaled 0–100" },
              ],
            },
          ],
        },
        {
          id: "e2",
          title: "E.2 Dashboard Technical Specifications",
          blocks: [
            {
              t: "lead",
              text: "Data model, refresh cadence, access controls, and visualization standards.",
            },
            { t: "h", text: "Data Model (Star Schema)" },
            {
              t: "kv",
              items: [
                { k: "fact_usage", v: "Daily grain: Initiative ID, Date, User ID, Prompts, Tokens (In/Out/Cached), Latency (P50/P95/P99), Errors" },
                { k: "fact_outcomes", v: "Transaction grain: Initiative ID, Timestamp, Outcome Type, Success/Failure, Value Generated" },
                { k: "fact_evals", v: "Evaluation grain: Initiative ID, Eval Type, Timestamp, Score, Pass/Fail" },
                { k: "fact_costs", v: "Daily grain: Initiative ID, Date, API Cost, Infrastructure Cost, Labor Cost" },
                { k: "dim_initiative", v: "Initiative ID (PK), Name, System Type, Risk Tier, Owner, Business Line, Strategic Objectives, Status" },
                { k: "dim_user", v: "User ID (PK), Name, Department, Role, Manager, Persona Segment" },
                { k: "dim_date", v: "Date (PK), Year, Quarter, Month, Week, Day of Week, Is Holiday" },
              ],
            },
            { t: "h", text: "Refresh Cadence" },
            {
              t: "table",
              head: ["Surface", "Cadence", "Why"],
              rows: [
                ["Token Economics (1–2)", "Real-time (15 min)", "Immediate response to cost anomalies"],
                ["Token Economics (3–5)", "Daily (midnight)", "Outcome data not available real-time"],
                ["Portfolio Health Score", "Daily", "Composite requires overnight aggregation"],
                ["User Persona Dashboard", "Daily", "Classification stable day-to-day"],
                ["KFH Tracker", "Weekly", "Eval execution is batch-scheduled"],
                ["Executive Dashboard", "Daily", "CXO expectation for current data"],
              ],
            },
            { t: "h", text: "Access Control Matrix" },
            {
              t: "table",
              head: ["Surface", "Executive", "Portfolio Mgr", "Initiative Owner", "User"],
              rows: [
                ["Portfolio Health Score", "Full", "Full", "Read-only", "None"],
                ["Token Economics", "Full (all)", "Full (all)", "Own", "None"],
                ["User Persona Data", "Aggregate", "Full", "Own", "Own data"],
                ["KFH Tracker", "Aggregate", "Full", "Own", "None"],
                ["Corrective Action Queue", "Summary", "Full", "Own tickets", "None"],
                ["Financial ROI", "Full", "Full", "Own", "None"],
              ],
            },
            { t: "h", text: "Visualization Standards" },
            {
              t: "list",
              items: [
                "Color: brand colors for categorical; Green-Yellow-Red gradient for performance (Green >80, Yellow 60–80, Red <60); consistent across dashboards",
                "Chart types: time-series → line; distributions → histogram/box; comparisons → horizontal bar; correlations → scatter w/ trend; hierarchies → treemap/sunburst",
                "Interactivity: click to drill down; hover for definition tooltip; date range selector (7/30/90 days, YTD, custom)",
              ],
            },
          ],
        },
        {
          id: "e3",
          title: "E.3 Executive Reporting Templates",
          blocks: [
            {
              t: "lead",
              text: "Standardized artifacts for monthly ESC meetings and quarterly Board updates.",
            },
            { t: "h", text: "Monthly Executive Summary (One-Page)" },
            {
              t: "list",
              items: [
                "Portfolio Health at a Glance: composite PHS [XX/100] (↑↓ vs last month); initiatives by tier; risk distribution; monthly token spend",
                "Value Realization: total annualized value $XX.XM (YTD); Portfolio ROI [X.XX]×; top 3 value generators",
                "Items Requiring Executive Decision: Gate 3 approvals; sunset flags; P1/P2 incidents",
                "External Benchmark Position: AI Maturity Stage; peer comparison; gap to leaders narrative",
              ],
            },
            { t: "h", text: "Quarterly Board Presentation (7-Slide Deck)" },
            {
              t: "steps",
              items: [
                { title: "Slide 1 · Portfolio Overview", text: "Total initiatives (↑↓ vs last quarter); total investment YTD; PHS with 4-quarter trend chart." },
                { title: "Slide 2 · Value Delivered", text: "Annualized ROI with category breakdown; YTD value vs annual target; one high-impact case study." },
                { title: "Slide 3 · Adoption & Maturity", text: "Activation rate across users; production-to-pilot ratio (industry avg 30–40%); maturity stage progression." },
                { title: "Slide 4 · Risk & Governance", text: "Governance compliance %; high-risk initiatives validated per SR 11-7; incidents (P1/P2) with resolution status." },
                { title: "Slide 5 · Strategic Alignment", text: "Composition by strategic objective (pie); budget alignment vs priorities (gap analysis); rebalance recommendation." },
                { title: "Slide 6 · External Benchmarking", text: "MIT CISR stage vs peers; PwC/IIF-EY percentile; gap-to-leaders areas with action plan." },
                { title: "Slide 7 · Looking Ahead", text: "Next-quarter priorities (3–5); emerging risks/opportunities; ask of the Board (budget, guidance, risk appetite)." },
              ],
            },
          ],
        },
        {
          id: "e4",
          title: "E.4 Integration Architecture",
          blocks: [
            {
              t: "lead",
              text: "How the portfolio management system integrates with existing enterprise systems.",
            },
            { t: "h", text: "Integration Points" },
            {
              t: "table",
              head: ["System", "Data Extracted", "Method"],
              rows: [
                ["LLM API Gateway", "Token counts, latency, user/initiative IDs, timestamps", "Real-time streaming (Kafka/webhook)"],
                ["Cloud Billing (AWS/Azure/GCP)", "API costs, infrastructure costs", "Daily batch via billing API"],
                ["Identity (Okta/AD)", "Provisioning, role, department, manager", "Daily sync (LDAP/SCIM)"],
                ["Application Databases", "Business outcomes (tickets, docs)", "Daily ETL (JDBC/REST)"],
                ["Version Control (GitHub/GitLab)", "Prompt changes, model upgrades, deploy timestamps", "Webhook on commit to main"],
                ["ITSM (ServiceNow/Jira)", "Incident tickets, severity, resolution time", "Real-time webhook"],
                ["Financial System (SAP/Oracle)", "Budget allocations, actuals, forecasts", "Monthly sync (SFTP/API)"],
              ],
            },
            { t: "h", text: "Data Pipeline Architecture" },
            {
              t: "steps",
              items: [
                { title: "Layer 1 · Ingestion", text: "Real-time: Kafka consumers for gateway logs, webhooks for ITSM/VCS. Batch: scheduled jobs (cron/Airflow) for billing, LDAP, financial. Destination: raw data lake (S3/ADLS/GCS)." },
                { title: "Layer 2 · Transformation", text: "dbt or Spark nightly: clean, deduplicate, enrich (join user + initiative metadata), calculate derived metrics (TPP, TVR, KFH). Output: curated warehouse (Snowflake/BigQuery/Redshift)." },
                { title: "Layer 3 · Serving", text: "Star schema optimized for dashboards; indexed on Initiative ID, Date, User ID; row-level security; dashboards query the warehouse directly." },
              ],
            },
            { t: "h", text: "Portfolio Management API" },
            {
              t: "list",
              items: [
                "POST /api/v1/initiatives — creates initiative record; returns Initiative ID",
                "GET /api/v1/initiatives/{id}/metrics?start_date=…&end_date=… — usage, cost, performance for range",
                "POST /api/v1/evals — submits evaluation results for storage and aggregation",
                "GET /api/v1/portfolio/health-score?date=… — composite PHS and dimension breakdown",
              ],
            },
            { t: "h", text: "Security & Compliance" },
            {
              t: "list",
              items: [
                "AuthN: OAuth 2.0 with JWT; AuthZ: RBAC per access control matrix",
                "Data classification: user identifiers = PII (encrypt at rest, mask non-prod); token counts/costs = Confidential; business outcomes = Confidential (aggregated outside portfolio team)",
                "Audit trail: all API calls logged (timestamp, user, action, result); retained 7 years; quarterly Internal Audit review",
                "Data residency: stored in [Region] for sovereignty; no cross-border transfers without legal review",
              ],
            },
          ],
        },
      ],
    },

    /* ───────────────────────────── SECTION F ───────────────────────────── */
    {
      id: "f",
      tag: "F",
      label: "Roadmap",
      title: "Implementation Roadmap",
      phase: "36-Month Plan",
      accent: "rose",
      summary:
        "Month-by-month timelines for Phases I–III and success metrics by phase.",
      subsections: [
        {
          id: "f1",
          title: "F.1 Phase I Timeline (Months 0–6)",
          blocks: [
            {
              t: "steps",
              items: [
                { title: "Month 1", list: ["W1–2: assemble team (Portfolio Manager, Data Engineer, Governance Analyst, FinOps Lead)", "W3–4: execute model inventory discovery (automated + manual)", "W4: intake framework training for business line leaders"] },
                { title: "Month 2", list: ["W1–2: complete Master Model Inventory", "W3: risk tier classification for all discovered initiatives", "W4: initial governance baseline for top-10 spend initiatives"] },
                { title: "Month 3", list: ["W1–2: build & deploy Token Economics Dashboard (Panels 1–2)", "W3: execute Quick Win #1 (Ghost User Cleanup)", "W4: first ESC meeting with one-page summary"] },
                { title: "Month 4", list: ["W1–2: execute Quick Win #2 (Prompt Caching for top-5 spend)", "W3–4: implement Corrective Action Workflow SOP with automated alert triggers"] },
                { title: "Month 5", list: ["W1–2: complete governance baseline for all High-Risk initiatives", "W3: deploy User Persona Segmentation Framework", "W4: first Portfolio Rationalization Review — identify Zombies"] },
                { title: "Month 6", list: ["W1–2: calculate first Portfolio Health Score — establish baseline", "W3: execute Quick Win #3 (Model Right-Sizing)", "W4: Phase I completion report to Board"] },
              ],
            },
            {
              t: "note",
              kind: "good",
              title: "Key Deliverables by Month 6",
              text: "Complete AI/ML inventory (95%+ coverage) · governance baseline for all High-Risk · Token Economics Dashboard with real-time monitoring · 3 quick wins with documented savings · ESC operational (monthly cadence) · baseline PHS established.",
            },
          ],
        },
        {
          id: "f2",
          title: "F.2 Phase II Timeline (Months 7–18)",
          blocks: [
            {
              t: "steps",
              items: [
                { title: "Months 7–9 (Q3)", list: ["Complete Token Economics Dashboard (all 5 panels)", "Deploy KFH Tracker for all RAG initiatives", "Implement Sunset Criteria Decision Matrix; execute first sunset", "First internal benchmarking report (cross-LOB)"] },
                { title: "Months 10–12 (Q4)", list: ["Build Golden Datasets (50–100 examples) for top-20 initiatives", "Integrate offline eval pipelines into CI/CD", "First quarterly Portfolio Rationalization (full TIME framework)", "First external benchmarking: MIT CISR self-assessment"] },
                { title: "Months 13–15 (Q1 Y2)", list: ["Deploy Multi-Level Eval Aggregation Pipeline for all production", "Implement Value Realization ROI Model with monthly tracking", "Launch Progressive Governance — classify all agents by autonomy level", "Achieve PHS >70 (Healthy)"] },
                { title: "Months 16–18 (Q2 Y2)", list: ["Complete strategic alignment audit; rebalance portfolio", "Deploy online eval monitoring (5–10% sampled, LLM-as-Judge)", "Participate in PwC AI Benchmarking or Deloitte State of AI", "Achieve Portfolio ROI >2.0× sustained 2+ quarters"] },
              ],
            },
            {
              t: "note",
              kind: "good",
              title: "Key Deliverables by Month 18",
              text: "PHS >70 with positive trend · ROI >2.0× with documented value per initiative · comprehensive eval framework (offline + online) · first external benchmark with gap analysis · 10–15% annual turnover · progressive governance classifying all agents.",
            },
          ],
        },
        {
          id: "f3",
          title: "F.3 Phase III Timeline (Months 19–36)",
          blocks: [
            {
              t: "steps",
              items: [
                { title: "Months 19–24 (Y2 H2)", list: ["Implement Agent GPA for all goal-based agents", "Achieve 50%+ initiatives in Production tier", "Deploy hierarchical multi-agent architectures for complex workflows", "Participate in IIF-EY Annual AI Survey"] },
                { title: "Months 25–30 (Y3 Q1–Q2)", list: ["Achieve PHS >85 (World-Class)", "50%+ of agents at Level 3+ autonomy", "Publish internal best practices repository (20+ patterns)", "Achieve top quartile on external benchmark"] },
                { title: "Months 31–36 (Y3 Q3–Q4)", list: ["Achieve MIT CISR Stage 4 (Transformation)", "Portfolio ROI >2.5× sustained 4+ quarters", "Real-time optimization: automated corrective actions <15 min latency", "Continuous innovation: 5–10 new intakes/quarter"] },
              ],
            },
            {
              t: "note",
              kind: "good",
              title: "Key Deliverables by Month 36",
              text: "PHS >85 (World-Class) · MIT CISR Stage 4 · top-quartile external performance · ROI >2.5× sustained · 50%+ of agents at Level 3+ autonomy · industry recognition as AI portfolio management leader.",
            },
          ],
        },
        {
          id: "f4",
          title: "F.4 Success Metrics by Phase",
          blocks: [
            {
              t: "table",
              head: ["Metric", "Phase I", "Phase II", "Phase III"],
              rows: [
                ["Portfolio Health Score", "Baseline", ">70", ">85"],
                ["Portfolio ROI", ">1.5×", ">2.0×", ">2.5×"],
                ["Governance Compliance", "100% High-Risk", "90% all", "95% all"],
                ["Production-to-Pilot Ratio", "20%", "40%", "60%"],
                ["External Benchmark Rank", "Not measured", "Above average", "Top quartile"],
                ["AI Maturity Stage", "Stage 2", "Stage 3", "Stage 4"],
              ],
            },
            {
              t: "note",
              kind: "info",
              title: "Conclusion",
              text: "This wiki is a comprehensive quick-reference for the AI Portfolio Management Operationalization Toolkit. Document Version 1.0 · March 2026 · Owner: Head of Global AI Adoption, Maturity, Governance & Solutions · Next update: quarterly review cycle.",
            },
          ],
        },
      ],
    },
  ],
};
