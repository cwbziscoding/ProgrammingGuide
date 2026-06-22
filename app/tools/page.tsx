"use client";

import React from "react";
import {
  Cpu,
  Laptop,
  ShieldAlert,
  HardDrive,
  ExternalLink,
} from "lucide-react";

const AI_TOOLS = [
  {
    name: "ChatGPT",
    desc: "OpenAI's general assistant. Superb for high-level concepts, architectural analogies, and syntax code lookups.",
    link: "https://chatgpt.com/",
  },
  {
    name: "Gemini",
    desc: "Google's multimodal model. Excels at context-rich searches, code translation, and explaining documentation.",
    link: "https://gemini.google.com/",
  },
  {
    name: "Claude",
    desc: "Anthropic's reasoning model. Highly recommended for complex algorithm writing, TypeScript types, and long file analysis.",
    link: "https://claude.ai/",
  },
  {
    name: "Claude Code",
    desc: "Anthropic's command-line interface tool. Directly edits files, runs terminal tests, and commits code quickly.",
    link: "https://docs.anthropic.com/en/docs/about-claude/claude-code",
  },
  {
    name: "GitHub Copilot",
    desc: "Inline editor assistant. Auto-completes code comments, repeats template patterns, and finishes lines instantly.",
    link: "https://github.com/features/copilot",
  },
  {
    name: "Cursor AI",
    desc: "A code editor forked from VS Code. Designed specifically to index your directory for AI query context.",
    link: "https://www.cursor.com/",
  },
];

const DEV_TOOLS = [
  {
    name: "VS Code",
    desc: "The most popular text editor for web development. Highly custom extension framework.",
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Antigravity IDE",
    desc: "Google's AI agent editor environment, integrating direct workspace creation and verification workflows.",
    link: "https://github.com/google/antigravity",
  },
  {
    name: "Git",
    desc: "Distributed version control system. Tracks file changes and supports branching workflows.",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    desc: "Web host for git projects. Core portfolio hub for developers applying for roles.",
    link: "https://github.com/",
  },
  {
    name: "NPM (Node Package Manager)",
    desc: "The standard package manager. Installs frontend frameworks and library modules.",
    link: "https://www.npmjs.com/",
  },
  {
    name: "Node.js",
    desc: "JavaScript engine runner. Allows you to compile React code, run scripts, and spin up servers.",
    link: "https://nodejs.org/",
  },
];

const BACKEND_TOOLS = [
  {
    name: "Postman",
    desc: "Client for testing API endpoints. Supports collection testing, custom scripts, and headers verification.",
    link: "https://www.postman.com/",
  },
  {
    name: "MongoDB Compass",
    desc: "Graphical database interface. Visually query and manage MongoDB collections without CLI tools.",
    link: "https://www.mongodb.com/products/tools/compass",
  },
];

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-col gap-20">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          DEVELOPER TOOLKIT
        </span>
        <h1 className="text-4xl font-black tracking-tight text-black sm:text-5xl dark:text-white">
          Essential Developer Tools
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          A curated directory of software, environments, and AI systems
          configured to accelerate your growth.
        </p>
      </section>

      {/* AI Disclaimer Banner */}
      <section className="mx-auto max-w-4xl w-full">
        <div className="border border-black dark:border-white rounded-lg p-6 bg-zinc-950 text-white dark:bg-white dark:text-black shadow-sm">
          <div className="flex gap-4 items-start">
            <div className="p-2 border border-zinc-700 bg-zinc-900 rounded-md dark:border-zinc-350 dark:bg-zinc-100 shrink-0">
              <ShieldAlert className="h-6 w-6 text-white dark:text-black" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs tracking-widest uppercase font-bold text-zinc-450 dark:text-zinc-550">
                CRITICAL WARNING ON AI-ASSISTED DEVELOPMENT
              </span>
              <p className="text-sm sm:text-base leading-relaxed font-sans text-zinc-200 dark:text-zinc-800">
                &ldquo;AI is a tool, not a replacement for learning. The value
                comes from the developer using it. Learn the fundamentals first,
                ask better questions, and use AI to accelerate your growth
                rather than replace your understanding.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-3 border-b border-zinc-200 pb-4 dark:border-zinc-850">
          <Cpu className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
          <h2 className="text-2xl font-bold text-black dark:text-white">
            AI Assistants & Code Agents
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AI_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-black dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-black dark:text-white font-mono flex items-center justify-between">
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1.5"
                  >
                    {tool.name}
                    <ExternalLink className="h-3.5 w-3.5 opacity-60 hover:opacity-100" />
                  </a>
                  <span className="h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-650" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Tools Grid */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-3 border-b border-zinc-200 pb-4 dark:border-zinc-850">
          <Laptop className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Development Environments
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DEV_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-black dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-black dark:text-white font-mono flex items-center justify-between">
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1.5"
                  >
                    {tool.name}
                    <ExternalLink className="h-3.5 w-3.5 opacity-60 hover:opacity-100" />
                  </a>
                  <span className="h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-650" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Backend & DB Tools Grid */}
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-3 border-b border-zinc-200 pb-4 dark:border-zinc-850">
          <HardDrive className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
          <h2 className="text-2xl font-bold text-black dark:text-white">
            Backend & Database Clients
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BACKEND_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-black dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-white flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-black dark:text-white font-mono flex items-center justify-between">
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1.5"
                  >
                    {tool.name}
                    <ExternalLink className="h-3.5 w-3.5 opacity-60 hover:opacity-100" />
                  </a>
                  <span className="h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-650" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
