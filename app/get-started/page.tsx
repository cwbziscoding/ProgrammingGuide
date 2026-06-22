"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Laptop, ChevronDown, CheckCircle2 } from "lucide-react";

const SOFTWARE_TOOLS = [
  {
    name: "Visual Studio Code",
    description:
      "The industry-standard code editor. Light, modular, and highly customizable.",
    details:
      "Why use it: Built-in Git support, integrated terminal, and thousands of extensions. Recommended Extensions: Prettier (formatting), ESLint (linting), Auto Rename Tag, and GitLens. Theme recommendations: Github Theme, Tokyo Night, or Minimal Black.",
  },
  {
    name: "Git",
    description: "Version control system to track changes in your source code.",
    details:
      "Crucial for collaborating with other developers and rolling back mistakes.",
  },
  {
    name: "GitHub",
    description:
      "Cloud hosting service for Git repositories and portfolio building.",
    details:
      "Allows you to publish code, contribute to open source, and show work to recruiters.",
  },
  {
    name: "Node.js",
    description:
      "JavaScript runtime that lets you run JS code outside of the browser.",
    details: "Allows building server-side applications and using NPM packages.",
  },
  {
    name: "Browser Developer Tools",
    description:
      "Built-in tools inside Chrome, Firefox, or Safari for debugging.",
    details:
      "Use the Console, Inspector, and Network tab to debug UI and API calls.",
  },
  {
    name: "Terminal / Command Line",
    description:
      "Text-based interface for running scripts, compiling code, and managing folders.",
    details: "Essential skill to interact with developer servers and bundlers.",
  },
];

const FUNDAMENTALS = [
  {
    id: "variables",
    title: "Variables",
    definition:
      "Containers for storing data values. In modern JavaScript, we declare variables using const and let.",
    code: `// Declaring variables
const developerName = "Andrei"; // Read-only reference
let currentLevel = 1;          // Can be reassigned

currentLevel = 2; // Valid re-assignment`,
  },
  {
    id: "operators",
    title: "Operators",
    definition:
      "Symbols used to perform operations on variables and values, such as arithmetic, comparison, or logical evaluations.",
    code: `// Arithmetic and Comparison
const sum = 10 + 5; 
const isEqual = (sum === 15); // Strict equality check (true)

// Logical Operators
const canCode = true;
const isTired = false;
const shouldBreak = canCode && isTired; // Logical AND`,
  },
  {
    id: "conditions",
    title: "Conditions",
    definition:
      "Statements that control the flow of execution based on boolean evaluations (if, else if, else).",
    code: `const hoursSlept = 6;

if (hoursSlept >= 8) {
  console.log("Fully rested.");
} else if (hoursSlept >= 6) {
  console.log("Good enough to code.");
} else {
  console.log("Get some coffee first.");
}`,
  },
  {
    id: "loops",
    title: "Loops",
    definition:
      "Structures that repeat a block of code while a specified condition holds true (for, while, for...of).",
    code: `// Loop through a block 5 times
for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
}

// Loop through an array
const items = ['HTML', 'CSS', 'JS'];
for (const item of items) {
  console.log("Learning " + item);
}`,
  },
  {
    id: "functions",
    title: "Functions",
    definition:
      "Reusable blocks of code designed to perform a specific task, executed when invoked.",
    code: `// Function declaration
function greet(user) {
  return "Hello, " + user;
}

// Arrow function (Modern syntax)
const add = (a, b) => a + b;

const greeting = greet("Developer");
const sumResult = add(12, 8);`,
  },
  {
    id: "arrays",
    title: "Arrays",
    definition:
      "Special objects used to store multiple values in a single ordered list or collection.",
    code: `const tools = ['Git', 'VS Code', 'NPM'];

// Accessing index (0-based)
console.log(tools[0]); // 'Git'

// Mapping over an array (creates a new array)
const shoutTools = tools.map(t => t.toUpperCase()); // ['GIT', 'VS CODE', 'NPM']`,
  },
  {
    id: "objects",
    title: "Objects",
    definition:
      "Variables that contain property-value pairs (unordered collection of related data).",
    code: `const laptop = {
  brand: 'Apple',
  ram: '16GB',
  hasSSD: true
};

// Accessing properties (Dot notation)
console.log(laptop.brand); // 'Apple'

// Destructuring
const { ram } = laptop;`,
  },
  {
    id: "scope",
    title: "Scope",
    definition:
      "Context in which variables are accessible. Javascript has Global, Local, and Block scope.",
    code: `const globalVar = "I am global";

function checkScope() {
  const localVar = "I am local to this function";
  if (true) {
    const blockVar = "I exist only in this block";
    console.log(blockVar); // Works
  }
  // console.log(blockVar); // ReferenceError
}

checkScope();`,
  },
  {
    id: "errors",
    title: "Error Handling",
    definition:
      "The process of catching runtime errors so the entire program does not crash, using try-catch blocks.",
    code: `try {
  // Code that might fail
  const data = JSON.parse("{ invalid json }");
} catch (error) {
  console.error("Parsing error: ", error.message);
} finally {
  console.log("This will always execute.");
}`,
  },
  {
    id: "async",
    title: "Asynchronous Programming",
    definition:
      "Allowing the program to perform operations in the background (like API calls) without freezing the main execution thread.",
    code: `// Fetching data using async/await
async function fetchDocs() {
  try {
    const response = await fetch('https://api.github.com');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Fetch failed", err);
  }
}`,
  },
];

const PROJECTS = [
  {
    title: "Calculator",
    description:
      "Build a standard math calculator with addition, subtraction, division, and multiplication operations.",
    why: "Tests basic arithmetic operations, state management, button click event listeners, and operator input validation.",
  },
  {
    title: "To-Do List",
    description:
      "Create an application to add, delete, mark as complete, and filter list items.",
    why: "Teaches array manipulation (push, filter, map), input forms, CRUD concepts, and local storage state persistence.",
  },
  {
    title: "Weather App",
    description:
      "Fetch live weather forecasts using an external API for specified cities.",
    why: "Deepens understanding of asynchronous programming (fetch, async/await), JSON parsing, environment variables, and loading states.",
  },
  {
    title: "Notes App",
    description:
      "A markdown note-taking app that allows editing, saving, and search operations.",
    why: "Expands experience in rich text manipulation, state debounce, and structured data storage.",
  },
  {
    title: "Portfolio Website",
    description:
      "Build your personal portal showcasing your profile, projects, and contact links.",
    why: "Perfect for understanding clean semantic markup, CSS layouts (Flexbox, Grid), media queries, and deploying to platforms like Vercel.",
  },
];

export default function GetStartedPage() {
  const [openFundamental, setOpenFundamental] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-col gap-24">
      {/* Welcome Block */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-6">
        <h1 className="text-4xl font-black tracking-tight text-black sm:text-5xl dark:text-white">
          Beginner's Kickstart Guide
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          Every expert programmer started exactly where you are right now.
          Programming isn&rsquo;t about memorization—it is a logical,
          step-by-step process of breaking down massive challenges into
          manageable files.
        </p>
        <div className="h-[1px] w-24 bg-zinc-200 dark:bg-zinc-800 mx-auto" />
      </section>

      {/* Essential Software Tooling */}
      <section className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1 flex flex-col gap-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            STEP 01
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Set Up Your Dev Workspace
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Before writing a single line of code, you need a comfortable
            environment. These core programs will serve as your developer
            dashboard.
          </p>
        </div>
        <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
          {SOFTWARE_TOOLS.map((tool, index) => (
            <div
              key={index}
              className={`rounded-xl border p-6 bg-white transition-all duration-300 dark:bg-zinc-950 ${
                index === 0
                  ? "border-black dark:border-white sm:col-span-2 shadow-sm"
                  : "border-zinc-200 dark:border-zinc-800"
              }`}
            >
              <h3 className="text-lg font-bold text-black dark:text-white flex items-center gap-2">
                {tool.name}
                {index === 0 && (
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 border border-black dark:border-white rounded-full bg-zinc-50 dark:bg-zinc-900">
                    Primary Editor
                  </span>
                )}
              </h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {tool.description}
              </p>
              <p className="mt-4 text-xs font-mono text-zinc-400 dark:text-zinc-500 leading-relaxed border-t border-zinc-100 pt-3 dark:border-zinc-900">
                {tool.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Choose a Language */}
      <section className="grid gap-12 lg:grid-cols-3 border-t border-zinc-200 pt-16 dark:border-zinc-800">
        <div className="lg:col-span-1 flex flex-col gap-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            STEP 02
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Choose Your First Language
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Don&rsquo;t get stuck in decision paralysis. The logic elements are
            similar in almost all modern languages. Start with one of these
            entry pathways.
          </p>
        </div>
        <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
          {/* JavaScript */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 flex flex-col justify-between">
            <div>
              <div className="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-2 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-black dark:text-white">
                JavaScript (Recommended)
              </h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                The language of the web browser. Every modern website runs
                JavaScript. Perfect if you want to build visual user interfaces,
                full-stack web products, or interactive designs.
              </p>
            </div>
            <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-900">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 block">
                Career Path:
              </span>
              <span className="text-xs font-medium text-black dark:text-white">
                Frontend Developer, Fullstack Engineer, Web Creator
              </span>
            </div>
          </div>

          {/* Python */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 flex flex-col justify-between">
            <div>
              <div className="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-2 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                <Laptop className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-black dark:text-white">
                Python
              </h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Known for its clear, human-readable syntax. Highly popular for
                data analyses, machine learning model integrations, server
                automation scripts, and scraping web pages.
              </p>
            </div>
            <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-900">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 block">
                Career Path:
              </span>
              <span className="text-xs font-medium text-black dark:text-white">
                Data Analyst, AI Research Scientist, Automation/QA Engineer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Core Fundamentals (Accordion) */}
      <section className="grid gap-12 lg:grid-cols-3 border-t border-zinc-200 pt-16 dark:border-zinc-800">
        <div className="lg:col-span-1 flex flex-col gap-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            STEP 03
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Learn Core Fundamentals
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            These structural concepts are the blocks of all code bases. Click
            each module to explore a detailed definition and reference code
            example.
          </p>
        </div>
        <div className="lg:col-span-2 space-y-4">
          {FUNDAMENTALS.map((fundamental) => {
            const isOpen = openFundamental === fundamental.id;
            return (
              <div
                key={fundamental.id}
                className="rounded-lg border border-zinc-200 bg-white overflow-hidden transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <button
                  onClick={() =>
                    setOpenFundamental(isOpen ? null : fundamental.id)
                  }
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-black dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                >
                  <span className="text-base">{fundamental.title}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-zinc-400" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-zinc-150 px-6 py-4 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/10 flex flex-col gap-4">
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {fundamental.definition}
                        </p>
                        <div className="rounded-lg border border-zinc-200 bg-zinc-950 p-4 dark:border-zinc-900 overflow-x-auto">
                          <pre className="font-mono text-xs text-zinc-350 dark:text-zinc-200">
                            <code>{fundamental.code}</code>
                          </pre>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Build Core Projects */}
      {/* <section className="grid gap-12 lg:grid-cols-3 border-t border-zinc-200 pt-16 dark:border-zinc-800">
        <div className="lg:col-span-1 flex flex-col gap-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            STEP 04 (First Milestone)
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Build Real Projects
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400">
            Stop watching tutorials and start writing code. Building
            applications requires you to make logical layout choices and debug
            issues. Start with these milestone projects.
          </p>
        </div>
        <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-black dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-zinc-450 dark:text-zinc-550" />
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 border-t border-zinc-100 pt-4 dark:border-zinc-900">
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 block">
                  Why it matters:
                </span>
                <span className="text-xs text-zinc-650 dark:text-zinc-350 leading-relaxed block mt-1">
                  {project.why}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
