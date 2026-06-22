"use client";

import { ShieldCheck, User2, Compass, ExternalLink } from "lucide-react";

const ADVICES = [
  {
    title: "Start Small",
    body: "Don't try to build a complex social media platform on day one. Master variables first, then write basic console scripts, then build minimal interfaces.",
  },
  {
    title: "Be Consistent",
    body: "Coding is about building muscle memory. Writing code for 30 minutes every single day is far more effective than code-cramming 6 hours on the weekend.",
  },
  {
    title: "Build Projects",
    body: "Tutorials give you the illusion of learning. Real growth happens when you close the video, open an empty file, and struggle to build something yourself.",
  },
  {
    title: "Read Documentation",
    body: "Tutorials can become outdated quickly. Form a habit of checking the official documentation of libraries and languages first for up-to-date syntax.",
  },
  {
    title: "Learn Git Early",
    body: "Understand version control within your first week. Storing code history snapshots and committing changes is a core requirement for every engineering job.",
  },
  {
    title: "Don't Compare",
    body: "Everyone learns at a different pace. Your only benchmark should be comparing your knowledge today with what you knew yesterday.",
  },
  {
    title: "Understand, Don't Memorize",
    body: "You do not need to memorize syntax. Google and AI are always there. Instead, focus on understanding programming concepts and logic.",
  },
  {
    title: "Use AI Wisely",
    body: "Leverage AI systems (Claude, Gemini) to explain errors and translate code logic, but never copy-paste blocks without tracing how they work.",
  },
  {
    title: "Never Stop Learning",
    body: "The software industry evolves constantly. Embrace the fact that you will be a lifelong learner. Stay curious and keep building.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-col gap-24">
      {/* wTechnologies Section */}
      <section className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1 flex flex-col gap-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            OUR COMPANY
          </span>
          <h1 className="text-4xl font-black tracking-tight text-black dark:text-white">
            wTechnologies
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            A technology startup dedicated to building innovative web
            applications, creator platforms, and developer tooling.
          </p>
        </div>
        <div className="lg:col-span-2 border border-zinc-200 bg-white rounded-xl p-8 dark:border-zinc-850 dark:bg-zinc-950 flex flex-col gap-6 justify-center">
          <div className="flex gap-4 items-start">
            <div className="p-3 border border-zinc-200 bg-zinc-50 rounded-lg dark:border-zinc-800 dark:bg-zinc-900 shrink-0">
              <Compass className="h-6 w-6 text-zinc-800 dark:text-zinc-200" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-black dark:text-white">
                Our Mission
              </h2>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-450 leading-relaxed">
                To empower developers, local businesses, and communities by
                constructing clean, performant, and highly accessible software
                platforms. We believe that technology should be intuitive,
                aesthetic, and solve real challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="grid gap-12 lg:grid-cols-3 border-t border-zinc-200 pt-16 dark:border-zinc-800">
        <div className="lg:col-span-1 flex flex-col gap-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            THE FOUNDER
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Andrei Custodio Ferrer
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Software Developer, Tech Enthusiast, Startup Builder, Passion for
            Ed.
          </p>
        </div>
        <div className="lg:col-span-2 border border-zinc-200 bg-white rounded-xl p-8 dark:border-zinc-850 dark:bg-zinc-950 flex flex-col gap-6 justify-between">
          <div className="space-y-4">
            <div className="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-2.5 text-zinc-850 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
              <User2 className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-white">
              Founder
            </h3>
            <p className="text-sm text-zinc-505 dark:text-zinc-400 leading-relaxed">
              Andrei (cwbz) established wTechnologies with the vision of
              building simple, high-performance web systems and developer
              guides. With a deep passion for education, Andrei designs learning
              modules to help the next generation of engineers bypass the
              complexities of traditional tutorials and learn by building.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-6 border-t border-zinc-100 pt-6 dark:border-zinc-900">
            <a
              href="https://andrei-custodio.vercel.app/"
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-850 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Advice Section */}
      <section className="grid gap-12 lg:grid-cols-3 border-t border-zinc-200 pt-16 dark:border-zinc-800">
        <div className="lg:col-span-1 flex flex-col gap-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            GUIDELINES
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Advice for Future Developers
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Essential mindset shifts and developer principles compiled to help
            guide your programming career path.
          </p>
        </div>
        <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
          {ADVICES.map((advice, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-850 dark:bg-zinc-950 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 font-bold text-black dark:text-white text-base">
                <ShieldCheck className="h-5 w-5 text-zinc-450 shrink-0" />
                {advice.title}
              </div>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 mt-1">
                {advice.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
