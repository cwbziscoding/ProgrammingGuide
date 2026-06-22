"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Layers,
  Database,
  Code,
  BookOpen,
} from "lucide-react";

type RoadmapTab = "frontend" | "backend" | "database";

const ROADMAPS = {
  frontend: [
    { title: "HTML", desc: "Page Structure" },
    { title: "CSS", desc: "Design & Layout" },
    { title: "JavaScript", desc: "Logic & Interactions" },
    { title: "React", desc: "Component UI Library" },
    { title: "Tailwind CSS", desc: "Utility Styling" },
    { title: "Next.js", desc: "Fullstack Framework" },
  ],
  backend: [
    { title: "Node.js", desc: "JS Runtime" },
    { title: "Express.js", desc: "REST API Routing" },
    { title: "REST APIs", desc: "Endpoints & JSON" },
    { title: "Authentication", desc: "JWT" },
    { title: "Security", desc: "CORS" },
  ],
  database: [
    { title: "MongoDB", desc: "NoSQL Document Store" },
    { title: "MySQL", desc: "Relational DB" },
  ],
};

const TECH_CARDS = [
  {
    name: "HTML",
    what: "HyperText Markup Language - the skeleton of every website.",
    why: "Defines the structural content of a page, such as paragraphs, headers, buttons, and forms.",
    usage:
      "Required for all web applications, SEO metadata structures, and email rendering.",
    when: "Day 1 of your web developer path.",
    advantages:
      "Universal standard, semantic elements, fast rendering, highly accessible.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    what: "Cascading Style Sheets - the styling layer.",
    why: "Responsible for color schemes, custom layouts (Flexbox, Grid), typography, and responsiveness.",
    usage:
      "Customizing responsive styles, scroll triggers, animations, and typography scales.",
    when: "Directly after mastering HTML fundamentals.",
    advantages:
      "Separates content from visual styling, powerful media queries, rich transition animations.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    what: "A dynamic scripting language enabling browser interactivity.",
    why: "Allows you to update page content dynamically, handle network API calls, and build UI logic.",
    usage:
      "Interactivity, state validation, building single-page apps, and managing events.",
    when: "As soon as you understand layout structures with HTML and CSS.",
    advantages:
      "Ubiquitous on the web, vast package registry (NPM), supports both frontend and backend development.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    what: "A strict typed superset of JavaScript.",
    why: "Provides type safety, compiles down to plain JavaScript, and catches errors during development.",
    usage:
      "Large enterprise codebases where type consistency is crucial to prevent bugs.",
    when: "After you gain confidence writing vanilla JavaScript.",
    advantages:
      "Catches compile-time bugs, provides autocomplete in editors, and speeds up team code refactoring.",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    what: "A popular declarative component library built by Meta.",
    why: "Simplifies state sync across multiple UI elements using a modular component structure.",
    usage:
      "Building single-page web applications (SPAs), developer dashboards, and dynamic client sites.",
    when: "After comfortable knowledge of JavaScript functions, arrays, and ES6+ modules.",
    advantages:
      "Component reusability, virtual DOM optimization, and a massive community/package ecosystem.",
    link: "https://react.dev/",
  },
  {
    name: "Tailwind CSS",
    what: "A utility-first CSS framework for rapid UI styling.",
    why: "Allows you to build interfaces quickly by applying class selectors directly in HTML/React.",
    usage:
      "Quick prototyping, uniform spacing layouts, and modern dark-mode configurations.",
    when: "Along with learning React or template layouts.",
    advantages:
      "No bloated CSS stylesheets, rapid prototyping, highly configurable theme extensions.",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Next.js",
    what: "A production-grade React framework built by Vercel.",
    why: "Enables Server Components, Server-Side Rendering (SSR), and automated image/font optimizations.",
    usage:
      "Modern high-performance web applications, blogs, portfolios, and e-commerce websites.",
    when: "After you are comfortable with basic client-side React components.",
    advantages:
      "Automated code splitting, excellent SEO indexing out of the box, serverless endpoint routing.",
    link: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    what: "A runtime built on Chrome V8 to run JavaScript on server systems.",
    why: "Enables developers to run JS server-side to read databases, write files, and handle HTTP servers.",
    usage:
      "Backend applications, dev tooling scripts, build orchestrators, and scraping systems.",
    when: "When you are ready to transition into backend development.",
    advantages:
      "Asynchronous event-driven paradigm, single language stack, and extremely fast data throughput.",
    link: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    what: "A minimal and flexible web application framework for Node.js.",
    why: "Simplifies the writing of REST API endpoint handlers and server middleware routing.",
    usage:
      "REST and GraphQL APIs, API gateways, microservices, and user auth routing.",
    when: "Immediately when starting Node.js server development.",
    advantages:
      "Extremely thin footprint, straightforward routing syntax, and hundreds of middleware plugins.",
    link: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    what: "A NoSQL document database representing data in JSON format.",
    why: "Stores data in schemas that match modern frontend JavaScript objects, making read/writes intuitive.",
    usage:
      "User sessions, content management platforms, logging, and unstructured collections.",
    when: "Your first step into backend database persistence.",
    advantages:
      "Highly flexible schema layouts, built-in horizontal scaling, and quick document lookup queries.",
    link: "https://www.mongodb.com/",
  },
  {
    name: "MySQL",
    what: "A highly structured Relational Database Management System (RDBMS).",
    why: "Uses SQL queries to query tables linked together by strict structural foreign key schemas.",
    usage:
      "Financial transactions, analytics, and complex relationship tracking applications.",
    when: "When learning standard query language (SQL) and relational schema design.",
    advantages:
      "Strong ACID compliance guarantees, complex relational JOIN lookups, and excellent stability.",
    link: "https://www.mysql.com/",
  },
  {
    name: "Git",
    what: "A local command-line distributed version control system.",
    why: "Tracks source changes so you can safely modify codebase files and rollback mistakes.",
    usage:
      "Standard version history checkouts, collaborative branches, and code changes merges.",
    when: "During your first week of programming.",
    advantages:
      "Local history snapshots, easy branch management, and essential for all tech workspaces.",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    what: "A cloud platform to host Git repositories for sharing and teamwork.",
    why: "Provides code reviews (PRs), automated actions (CI/CD), issue logs, and hosts your developer portfolio.",
    usage:
      "Backing up projects online, open-source work, and job application code verification.",
    when: "Simultaneously when setting up Git locally.",
    advantages:
      "Excellent community workspace, simple Vercel deployments, and visual developer contributions profile.",
    link: "https://docs.github.com/",
  },
];

export default function RoadmapsPage() {
  const [activeTab, setActiveTab] = useState<RoadmapTab>("frontend");
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const scrollTechIntoView = (techName: string) => {
    const element = document.getElementById(`tech-${techName.toLowerCase()}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      // Add temporary highlight animation class
      element.classList.add("ring-2", "ring-black", "dark:ring-white");
      setTimeout(() => {
        element.classList.remove("ring-2", "ring-black", "dark:ring-white");
      }, 1500);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-col gap-24">
      {/* Title Header */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          DEVELOPMENT FLOWS
        </span>
        <h1 className="text-4xl font-black tracking-tight text-black sm:text-5xl dark:text-white">
          Roadmaps Personalized by cwbz
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          Select a domain flow below to see the logical sequence of technologies
          you should learn to build modern software applications.
        </p>
      </section>

      {/* Roadmap Container */}
      <section className="flex flex-col items-center gap-12">
        {/* Tabs */}
        <div className="flex border border-zinc-200 dark:border-zinc-800 rounded-lg p-1 bg-zinc-50 dark:bg-zinc-900/50">
          {(["frontend", "backend", "database"] as RoadmapTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative rounded-md px-6 py-2.5 text-sm font-semibold capitalize transition-colors duration-200 ${
                activeTab === tab
                  ? "text-black dark:text-white"
                  : "text-zinc-550 dark:text-zinc-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeRoadmapTab"
                  className="absolute inset-0 rounded-md bg-white shadow-sm dark:bg-zinc-950"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab === "frontend" && <Code className="h-4 w-4" />}
                {tab === "backend" && <Layers className="h-4 w-4" />}
                {tab === "database" && <Database className="h-4 w-4" />}
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* Visual Roadmap Nodes Diagram - Vertical Flow (1, 2, 3) */}
        <div className="w-full border border-zinc-200 bg-white rounded-xl dark:border-zinc-800 dark:bg-zinc-950 p-8 sm:p-12 shadow-sm max-w-xl">
          <div className="flex flex-col items-center justify-center">
            <motion.div layout className="flex flex-col items-center">
              <AnimatePresence mode="popLayout">
                {ROADMAPS[activeTab].map((node, index) => {
                  const isLast = index === ROADMAPS[activeTab].length - 1;
                  const isTechInGrid = TECH_CARDS.some(
                    (tc) => tc.name.toLowerCase() === node.title.toLowerCase(),
                  );
                  return (
                    <React.Fragment key={`${activeTab}-${node.title}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                          type: "spring" as const,
                          stiffness: 200,
                          damping: 25,
                          delay: index * 0.05,
                        }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() =>
                          isTechInGrid && scrollTechIntoView(node.title)
                        }
                        onMouseEnter={() => setHoveredNode(index)}
                        onMouseLeave={() => setHoveredNode(null)}
                        className={`relative cursor-pointer rounded-lg border-2 p-5 w-64 text-center transition-all duration-300 ${
                          hoveredNode === index
                            ? "border-black bg-zinc-50 dark:border-white dark:bg-zinc-900/50"
                            : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                        }`}
                      >
                        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 block mb-1">
                          Step {index + 1}
                        </span>
                        <h3 className="font-bold text-base text-black dark:text-white truncate">
                          {node.title}
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 truncate">
                          {node.desc}
                        </p>

                        {isTechInGrid && (
                          <span className="absolute right-3 top-3 text-zinc-400">
                            <BookOpen className="h-3.5 w-3.5" />
                          </span>
                        )}
                      </motion.div>

                      {!isLast && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col items-center py-4 text-zinc-200 dark:text-zinc-800"
                        >
                          <div className="h-8 w-[2px] bg-zinc-200 dark:bg-zinc-800" />
                        </motion.div>
                      )}
                    </React.Fragment>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-center max-w-md">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-center gap-1.5 font-mono">
            <HelpCircle className="h-4 w-4" />
            Tip: Click on a highlighted node to scroll down directly to its
            technical documentation card.
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono italic leading-relaxed mt-2">
            There are many more technologies in Frontend, Backend, and
            Databases. Feel free to explore and learn about them on the web.
          </p>
        </div>
      </section>

      {/* Technology Documentation Grid Section */}
      <section className="border-t border-zinc-200 pt-20 dark:border-zinc-800">
        <div className="mb-16 text-center max-w-2xl mx-auto flex flex-col gap-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            05 / TECH SPECIFICATIONS & DOCUMENTATION
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
            Technology Reference Guide
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Deep dive into the core specifications of the technologies on our
            roadmaps. Study what they are, why they are used, and access their
            official documentation.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_CARDS.map((tech) => (
            <div
              key={tech.name}
              id={`tech-${tech.name.toLowerCase()}`}
              className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-black dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-white"
            >
              <div>
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3 dark:border-zinc-900">
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {tech.name}
                  </h3>
                  <a
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-450 hover:text-black dark:text-zinc-500 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-650 dark:text-zinc-350">
                  <div>
                    <span className="font-semibold text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500 block mb-1">
                      What it is:
                    </span>
                    <p>{tech.what}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500 block mb-1">
                      Why it exists:
                    </span>
                    <p>{tech.why}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500 block mb-1">
                      Real-World Usage:
                    </span>
                    <p>{tech.usage}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500 block mb-1">
                      When to learn:
                    </span>
                    <p>{tech.when}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-xs font-mono uppercase text-zinc-400 dark:text-zinc-500 block mb-1">
                      Key Advantages:
                    </span>
                    <p>{tech.advantages}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
