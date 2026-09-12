import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, MapPin, ArrowUpRight, Menu, X } from "lucide-react";

const PHOTO_SRC = "/image.png";

function useCountUp(target, decimals, duration = 1200, start = false) {
  const [value, setValue] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf.current = requestAnimationFrame(step);
    }
    raf.current = requestAnimationFrame(step);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [start, target, duration]);
  return value.toFixed(decimals);
}

const skillGroups = [
  {
    label: "AI / ML",
    items: [
      "XGBoost", "Prophet", "K-Means", "Scikit-learn", "NLP", "LLM Evaluation",
      "RAG Systems", "Hybrid Retrieval (BM25 + Vector)", "Cross-Encoder Reranking",
      "LLM-as-Judge Evaluation", "SHAP Explainability", "Feature Engineering",
    ],
  },
  {
    label: "AI agents",
    items: ["LLaMA 3.1", "GPT-4o-mini", "Groq API", "Tool Use / Function Calling", "Prompt Engineering", "Query Decomposition"],
  },
  { label: "Languages", items: ["Python", "SQL", "C++", "PHP", "JavaScript"] },
  {
    label: "Engineering",
    items: ["FastAPI", "Streamlit", "ETL Pipelines", "SQLAlchemy", "REST APIs", "Git", "Docker (basic)", "SDLC"],
  },
  {
    label: "Cloud — AWS",
    items: ["S3", "RDS MySQL", "IAM", "VPC", "Internet Gateway", "Security Groups"],
  },
  {
    label: "Data & analytics",
    items: ["SQL — CTEs, window functions, joins", "Pandas", "NumPy", "EDA", "Excel / Google Sheets"],
  },
  { label: "BI & visualization", items: ["Power BI (DAX)", "Tableau Public", "Matplotlib", "Seaborn"] },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIn, setHeroIn] = useState(false);
  const [metricsIn, setMetricsIn] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHeroIn(true), 60);
    const t2 = setTimeout(() => setMetricsIn(true), 500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const recall = useCountUp(87.5, 1, 1200, metricsIn);
  const faith = useCountUp(4.81, 2, 1200, metricsIn);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(18px, -22px) scale(1.06); }
          66% { transform: translate(-14px, 14px) scale(0.96); }
        }
        .animate-blob { animation: blob 9s ease-in-out infinite; }
        .animate-blob-delay { animation: blob 11s ease-in-out infinite; animation-delay: -4s; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      {/* NAV */}
      <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600"></span>
            </span>
            Harish Kumar
          </a>
          <ul className="hidden gap-8 text-sm text-slate-600 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-teal-600">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:harishk123mhk@gmail.com"
            className="hidden rounded border border-slate-900 px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-900 hover:text-white md:inline-block"
          >
            Email me
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded p-2 text-slate-700 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-4 text-sm text-slate-700">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:harishk123mhk@gmail.com" className="font-medium text-teal-600">
                  Email me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header id="top" className="relative overflow-hidden border-b border-slate-200">
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-teal-100 opacity-60 blur-3xl animate-blob"></div>
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-amber-100 opacity-60 blur-3xl animate-blob-delay"></div>

        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div className={heroIn ? "fade-up" : "opacity-0"}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
              </span>
              Open to AI/ML Engineer &amp; Data Scientist roles
            </span>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Muthyam
              <br />
              Harish Kumar
            </h1>

            <p className="mt-5 text-lg font-semibold text-teal-700 sm:text-xl">
              AI/ML Engineer — LLM evaluation, RAG systems, applied data science
            </p>

            <p className="mt-5 max-w-xl text-slate-600">
              Two years reviewing and correcting LLM output at scale for Meta and Google DeepMind,
              then applying that same evaluation-first instinct to build my own retrieval and
              forecasting systems end to end.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a href="mailto:harishk123mhk@gmail.com" className="group flex items-center gap-1.5 border-b border-slate-300 pb-0.5 font-medium transition-colors hover:border-teal-600 hover:text-teal-700">
                <Mail size={15} className="text-slate-400 group-hover:text-teal-600" /> harishk123mhk@gmail.com
              </a>
              <a href="tel:+919949728978" className="group flex items-center gap-1.5 border-b border-slate-300 pb-0.5 font-medium transition-colors hover:border-teal-600 hover:text-teal-700">
                <Phone size={15} className="text-slate-400 group-hover:text-teal-600" /> +91 99497 28978
              </a>
              <a href="https://github.com/harik1508" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 border-b border-slate-300 pb-0.5 font-medium transition-colors hover:border-teal-600 hover:text-teal-700">
                <Github size={15} className="text-slate-400 group-hover:text-teal-600" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/muthyam-harish-kumar-1b270b232/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1.5 border-b border-slate-300 pb-0.5 font-medium transition-colors hover:border-teal-600 hover:text-teal-700">
                <Linkedin size={15} className="text-slate-400 group-hover:text-teal-600" /> LinkedIn
              </a>
              <span className="flex items-center gap-1.5 text-slate-500">
                <MapPin size={15} /> Hyderabad, Telangana
              </span>
            </div>
          </div>

          <div className={"flex flex-col gap-6 " + (heroIn ? "fade-up" : "opacity-0")} style={{ animationDelay: "150ms" }}>
            <div className="group relative mx-auto w-56 sm:w-64">
              <div className="absolute -inset-3 rounded-full border border-teal-300/70 transition-transform duration-500 group-hover:scale-105"></div>
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-teal-200 via-transparent to-amber-200 opacity-40 blur-xl"></div>
              <img
                src={PHOTO_SRC}
                alt="Portrait of Muthyam Harish Kumar"
                className="relative aspect-square w-full rounded-full object-cover shadow-2xl shadow-slate-400/40 ring-1 ring-slate-200 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]"
              />
            </div>

            <div className="rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 p-6 text-white shadow-xl shadow-slate-300">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold tabular-nums text-amber-400">{recall}%</span>
                <span className="text-xs text-slate-300">Recall@10 — hybrid BM25 + vector retrieval</span>
              </div>
              <hr className="my-4 border-slate-700" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold tabular-nums text-amber-400">{faith}/5</span>
                <span className="text-xs text-slate-300">Faithfulness — LLM-as-judge, 32-question gold set</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="border-b border-slate-200 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHead index="01" title="About" />
          <div className="max-w-3xl space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
            <p>
              I spent the last two years inside the machinery of large model evaluation — reviewing
              and correcting LLM-generated responses for{" "}
              <strong className="font-semibold text-slate-900">Meta's Factuality Project</strong> and
              running multi-modal data quality audits with{" "}
              <strong className="font-semibold text-slate-900">Google DeepMind's</strong> Deep Research
              Quality team. That work is output evaluation and correction feeding a training loop, not
              model training itself, and it left me with a habit I now apply to everything I build:
              check the output before you trust the pipeline.
            </p>
            <p>
              That habit shows up directly in my own projects. When I benchmarked cross-encoder
              reranking on a RAG system and it made retrieval <em>worse</em>, I reported the drop
              instead of quietly dropping the experiment. When judge output pointed at a retrieval gap
              across earnings-call quarters, I traced it to its cause and fixed it. I'm now looking for
              a team building real LLM-powered products, where that kind of diagnostic rigor is the
              job, not a side effect of it.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-b border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHead index="02" title="Experience" />
          <div className="relative space-y-11 border-l border-slate-300 pl-8">
            <RoleBlock
              title="Data Analyst (AI/ML)"
              org="Turing — client engagements with Meta & Google DeepMind · Remote, contract"
              period="Jul 2024 – Jun 2026"
              bullets={[
                "Spearheaded Meta's Factuality Project — reviewed and corrected LLM-generated responses across thousands of data points to measurably reduce hallucinations and improve model accuracy.",
                "Produced 400+ production-grade data visualizations for Google DeepMind's Multimodal Project, used directly to train state-of-the-art AI models.",
                "Ran multi-modal data quality audits — text, image, structured data — with Google's Deep Research Quality team, improving model reliability benchmarks.",
              ]}
            />
            <RoleBlock
              title="Full-Stack Web Development Intern"
              org="RS Group"
              period="May 2023 – Jul 2023"
              bullets={[
                "Led end-to-end development of a Voting Management System for real campus elections with zero downtime — full SDLC ownership across HTML, CSS, PHP, MySQL and JavaScript.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-b border-slate-200 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHead index="03" title="Selected projects" />

          <div className="rounded-xl border border-slate-200 p-8 transition-shadow hover:shadow-lg hover:shadow-slate-200/60">
            <div className="mb-3 flex flex-wrap items-start justify-between gap-4">
              <h3 className="text-xl font-bold">Earnings Call / Investor Research Assistant</h3>
              <a
                href="https://github.com/harik1508/earnings-rag-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-teal-600 px-4 py-1.5 text-sm font-medium text-teal-700 transition-colors hover:bg-teal-600 hover:text-white"
              >
                View repo <ArrowUpRight size={14} />
              </a>
            </div>
            <p className="mb-5 text-sm text-slate-500">
              A production RAG system over 15 quarters of earnings-call transcripts across five
              companies — MSFT, NVIDIA, JPMorgan Chase, Costco, Southwest Airlines — deployed live with
              a FastAPI service layer and Streamlit frontend.
            </p>
            <ul className="mb-5 space-y-2.5">
              <Bullet>Built the full pipeline end to end: ingestion → chunking → embeddings → hybrid retrieval → generation → evaluation.</Bullet>
              <Bullet>Implemented hybrid retrieval (BM25 + vector), improving Recall@10 by 9–19 points to 87.5%.</Bullet>
              <Bullet>Built an LLM-as-judge evaluation harness — faithfulness, relevance, evasiveness — reaching 4.81/5 faithfulness and 4.97/5 relevance on a 32-question gold set, and caught a self-preference bias risk in the judge design through per-question error analysis.</Bullet>
              <Bullet>Diagnosed a cross-quarter retrieval-coverage gap via judge output and fixed it with query decomposition, lifting cross-quarter faithfulness from 4.00 to 4.17.</Bullet>
            </ul>
            <div className="mb-5 rounded-r-md border-l-2 border-amber-400 bg-amber-50 px-5 py-4">
              <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-amber-700">Field note — a negative result, reported</p>
              <p className="text-sm text-amber-900">
                Cross-encoder reranking was benchmarked as an expected improvement. It measurably hurt
                retrieval instead — Recall@10 fell from 87.5% to 81.2% — so it was left out of the
                final pipeline. Logged as a finding, not hidden as a failed experiment.
              </p>
            </div>
            <p className="border-t border-slate-200 pt-4 text-xs text-slate-500">
              <b className="font-semibold text-slate-700">Stack —</b> Python, FastAPI, Streamlit, BM25,
              BGE/OpenAI embeddings, hybrid retrieval, cross-encoder reranking, GPT-4o-mini,
              LLM-as-judge evaluation, query decomposition
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-slate-200 p-8 transition-shadow hover:shadow-lg hover:shadow-slate-200/60">
            <div className="mb-3 flex flex-wrap items-start justify-between gap-4">
              <h3 className="text-xl font-bold">E-Commerce Sales Intelligence Platform</h3>
              <a
                href="https://github.com/harik1508/ecommerce-sales-intelligence"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-teal-600 px-4 py-1.5 text-sm font-medium text-teal-700 transition-colors hover:bg-teal-600 hover:text-white"
              >
                View repo <ArrowUpRight size={14} />
              </a>
            </div>
            <p className="mb-5 text-sm text-slate-500">
              An end-to-end analytics platform built on the Olist Brazilian E-Commerce dataset — 100K+
              orders, from raw data to deployed model to conversational query layer.
            </p>
            <ul className="mb-5 space-y-2.5">
              <Bullet>Built a modular Python ETL pipeline (Pandas, SQLAlchemy) into an 8-table MySQL schema, deployed on AWS — S3 to RDS, with VPC, IAM and security groups configured — with Power BI and Tableau executive dashboards.</Bullet>
              <Bullet>Trained three models: XGBoost churn prediction (AUC 0.967), Prophet revenue forecasting (MAPE 21.2%), and K-Means segmentation; deployed the churn model as a FastAPI REST API with risk tiering.</Bullet>
              <Bullet>Built an AI Business Intelligence Agent — LLaMA 3.1 8B via Groq, with a Streamlit interface — that answers natural-language questions by generating and executing SQL against a live AWS RDS database.</Bullet>
            </ul>
            <p className="border-t border-slate-200 pt-4 text-xs text-slate-500">
              <b className="font-semibold text-slate-700">Stack —</b> Python, MySQL, AWS (S3 / RDS /
              IAM / VPC), Power BI, Tableau, XGBoost, Prophet, Scikit-learn, FastAPI, LLaMA 3.1, Groq,
              Streamlit, SQLAlchemy
            </p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-6 transition-colors hover:border-teal-300">
              <h4 className="mb-1.5 font-semibold">NLP Sentiment Analysis Engine</h4>
              <p className="text-sm text-slate-500">
                Sentiment classification across 10,000+ restaurant reviews using Logistic Regression,
                Naive Bayes and TF-IDF.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6 transition-colors hover:border-teal-300">
              <h4 className="mb-1.5 font-semibold">Voting Management System</h4>
              <p className="text-sm text-slate-500">
                Full-stack voting platform in PHP and MySQL, built and run for real campus elections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-b border-slate-200 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHead index="04" title="Skills" />
          <div className="space-y-7">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-600">
                  <span className="h-1.5 w-1.5 bg-teal-600"></span>
                  {g.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 transition-colors hover:border-teal-400 hover:text-teal-700"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="border-b border-slate-200 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHead index="05" title="Education & certifications" />
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="font-semibold">B.Tech, Electrical &amp; Electronics Engineering</h3>
              <p className="mt-1 text-sm text-slate-500">NIT Calicut · 2020 – 2024 · CGPA 7.99/10</p>
            </div>
            <ul className="divide-y divide-slate-200">
              <li className="py-3 text-sm text-slate-700">Google Data Analytics Professional Certificate — Coursera</li>
              <li className="py-3 text-sm text-slate-700">AWS Cloud Practitioner concepts</li>
              <li className="py-3 text-sm text-slate-700">Advanced SQL — LeetCode, StrataScratch</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-xl text-3xl font-bold sm:text-4xl">
            Building evaluation-first LLM systems — let's talk.
          </h2>
          <p className="mt-6 max-w-2xl text-slate-300">
            Open to AI/ML Engineer and Data Scientist roles. Happy to walk through the reranking
            result, the retrieval fix, or anything else on this page in more depth.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="mailto:harishk123mhk@gmail.com"
              className="rounded bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-300"
            >
              Email harishk123mhk@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/muthyam-harish-kumar-1b270b232/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-slate-600 px-6 py-3 text-sm font-medium transition-colors hover:border-teal-400 hover:text-teal-400"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/harik1508"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-slate-600 px-6 py-3 text-sm font-medium transition-colors hover:border-teal-400 hover:text-teal-400"
            >
              See the code on GitHub
            </a>
          </div>
          <div className="mt-14 flex flex-col gap-2 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <span>Muthyam Harish Kumar · Hyderabad, Telangana</span>
            <span>+91 99497 28978</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ index, title }) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-2xl font-bold text-slate-200">{index}</span>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
}

function RoleBlock({ title, org, period, bullets }) {
  return (
    <div className="relative">
      <span className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full border-2 border-teal-600 bg-white"></span>
      <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-bold">{title}</h3>
        <span className="text-sm text-slate-500">{period}</span>
      </div>
      <p className="mb-3 text-sm font-medium text-teal-700">{org}</p>
      <ul className="max-w-2xl space-y-2">
        {bullets.map((b, i) => (
          <Bullet key={i}>{b}</Bullet>
        ))}
      </ul>
    </div>
  );
}

function Bullet({ children }) {
  return (
    <li className="relative pl-5 text-[0.95rem] leading-relaxed text-slate-700">
      <span className="absolute left-0 text-slate-400">—</span>
      {children}
    </li>
  );
}
