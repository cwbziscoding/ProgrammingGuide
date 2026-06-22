'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Map, Users, Wrench, GraduationCap, BookOpen, Cpu, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
} as const;

const FEATURES = [
  {
    icon: Map,
    title: 'Structured Roadmaps',
    description: 'Visual step-by-step guides for Frontend, Backend, and Database domains.',
  },
  {
    icon: GraduationCap,
    title: 'Beginner Friendly',
    description: 'Clear analogies, step-by-step explanations, and real-world guidance.',
  },
  {
    icon: BookOpen,
    title: 'Learning Resources',
    description: 'Essential documentation cards and references for languages and frameworks.',
  },
  {
    icon: Wrench,
    title: 'Essential Tools',
    description: 'Curated list of the best AI tools, developer software, and database clients.',
  },
  {
    icon: Users,
    title: 'Helpful Creators',
    description: 'A searchable directory of the best educational content creators in tech.',
  },
  {
    icon: Cpu,
    title: 'AI-Assisted Learning',
    description: 'Learn how to leverage modern AI tools to accelerate your path to software engineering.',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 py-16 sm:py-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center gap-6"
        >
          {/* Tags */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-medium tracking-tight text-zinc-800 transition-colors dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300"
          >
            <span className="font-semibold">Powered by wTechnologies</span>
            <span className="mx-2 h-3 w-[1px] bg-zinc-300 dark:bg-zinc-700" />
            <span className="font-light">Personalized by cwbz</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="font-sans text-5xl font-black tracking-tight text-black sm:text-7xl dark:text-white"
          >
            Programming Guide Website
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg text-zinc-500 sm:text-xl dark:text-zinc-400"
          >
            A beginner-friendly guide to becoming a software engineer and developer.
          </motion.p>

          {/* Motto */}
          <motion.p
            variants={itemVariants}
            className="font-mono text-sm tracking-wide text-zinc-400 dark:text-zinc-500"
          >
            &ldquo;Learn the fundamentals, build real projects, and never stop creating.&rdquo;
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all dark:bg-white dark:text-black dark:hover:bg-zinc-150"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/roadmaps"
              className="inline-flex items-center rounded-md border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 hover:scale-[1.02] active:scale-[0.98] transition-all dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900"
            >
              Explore Roadmaps
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Programming Guide Section */}
      <section className="border-y border-zinc-200 bg-zinc-50/50 py-20 transition-colors dark:border-zinc-800 dark:bg-zinc-900/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid gap-12 lg:grid-cols-3"
          >
            <div className="lg:col-span-1">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                01 / OVERVIEW
              </h2>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-black dark:text-white">
                What is Programming?
              </h3>
            </div>
            <div className="space-y-6 lg:col-span-2 text-zinc-600 dark:text-zinc-400">
              <p className="text-lg leading-relaxed">
                Programming is the art and science of writing instructions for computers. It gives us the power to automate complex processes, solve intricate logical puzzles, and construct software applications that improve the lives of millions.
              </p>
              <p className="leading-relaxed">
                But becoming a software developer can feel overwhelming. With thousands of technologies, stacks, and frameworks, beginners often face &ldquo;tutorial hell.&rdquo; This guide cuts through the noise, providing a structured, step-by-step path tailored for self-directed learning.
              </p>
              <p className="font-mono text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
                &ldquo;Consistency over intensity, and projects over certificates.&rdquo;
              </p>
              <p className="leading-relaxed">
                The most important part of programming is the habit of building. Write code every day, embrace failure as debugging practice, and use tutorials as references to build your own unique creations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            02 / FEATURES
          </h2>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
            Everything You Need to Learn
          </h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6, borderColor: 'var(--color-foreground)' }}
                className="group flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div>
                  <div className="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-2.5 text-zinc-800 transition-colors group-hover:bg-black group-hover:text-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:group-hover:bg-white dark:group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-black dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
}
