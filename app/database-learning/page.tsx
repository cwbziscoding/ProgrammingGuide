'use client';

import React, { useState } from 'react';
import { Database, FileText, Share2, SquareTerminal } from 'lucide-react';

const CRUD_EXAMPLES = [
  {
    op: 'Create',
    desc: 'Inserting new data entries into the database room.',
    sql: `INSERT INTO users (name, email) 
VALUES ('Andrei', 'andrei@wtech.com');`,
    nosql: `db.users.insertOne({
  name: 'Andrei',
  email: 'andrei@wtech.com'
});`,
  },
  {
    op: 'Read',
    desc: 'Querying or retrieving existing data entries.',
    sql: `SELECT * FROM users 
WHERE email = 'andrei@wtech.com';`,
    nosql: `db.users.find({ 
  email: 'andrei@wtech.com' 
});`,
  },
  {
    op: 'Update',
    desc: 'Modifying properties of an existing data record.',
    sql: `UPDATE users 
SET email = 'newemail@wtech.com' 
WHERE name = 'Andrei';`,
    nosql: `db.users.updateOne(
  { name: 'Andrei' },
  { $set: { email: 'newemail@wtech.com' } }
);`,
  },
  {
    op: 'Delete',
    desc: 'Removing an entry permanently from storage.',
    sql: `DELETE FROM users 
WHERE name = 'Andrei';`,
    nosql: `db.users.deleteOne({ 
  name: 'Andrei' 
});`,
  },
];

export default function DatabaseLearningPage() {
  const [activeCrud, setActiveCrud] = useState(0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-col gap-20">
      {/* Page Title */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          DATA MANAGEMENT
        </span>
        <h1 className="text-4xl font-black tracking-tight text-black sm:text-5xl dark:text-white">
          Database Learning Section
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          Learn how software applications save, fetch, change, and destroy information.
        </p>
      </section>

      {/* What is a DB */}
      <section className="border border-zinc-200 rounded-xl bg-zinc-50/50 p-8 sm:p-12 dark:border-zinc-850 dark:bg-zinc-900/10 flex flex-col md:flex-row gap-8 items-center">
        <div className="p-4 border border-zinc-200 rounded-full bg-white dark:border-zinc-800 dark:bg-zinc-950 shrink-0">
          <Database className="h-12 w-12 text-zinc-800 dark:text-zinc-200" />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black dark:text-white">What is a Database?</h2>
          <p className="text-zinc-650 dark:text-zinc-400 leading-relaxed text-lg">
            &ldquo;A database is like a digital storage room where applications save information.&rdquo;
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Instead of saving user data in temporary files that disappear when the server turns off, databases store information on hard disks in highly structured indexes. This ensures details remain safe, searchable, and secure.
          </p>
        </div>
      </section>

      {/* Core Topics Split */}
      <section className="grid gap-12 lg:grid-cols-3">
        {/* SQL Tables vs NoSQL Collections */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-850 dark:bg-zinc-950 flex flex-col justify-between">
          <div>
            <div className="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-2 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-350">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-black dark:text-white">Tables vs. Collections</h3>
            <p className="mt-3 text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
              Relational databases (MySQL) store data in fixed grid structures called <strong>Tables</strong> with columns and rows. Document databases (MongoDB) store data as flexible JSON documents grouped in <strong>Collections</strong>.
            </p>
          </div>
        </div>

        {/* Records vs Documents */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-850 dark:bg-zinc-950 flex flex-col justify-between">
          <div>
            <div className="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-2 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-355">
              <Database className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-black dark:text-white">Records vs. Documents</h3>
            <p className="mt-3 text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
              A single entry in a MySQL Table is a <strong>Record</strong> (a row matching the column blueprint). A single entry in MongoDB is a <strong>Document</strong> (a nested JSON object containing dynamic fields).
            </p>
          </div>
        </div>

        {/* Relationships */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-850 dark:bg-zinc-950 flex flex-col justify-between">
          <div>
            <div className="inline-flex rounded-lg border border-zinc-200 bg-zinc-50 p-2 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-360">
              <Share2 className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-black dark:text-white">Relationships</h3>
            <p className="mt-3 text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
              How data connects. In <strong>One-to-Many</strong> connections, a single User has many Posts. In <strong>Many-to-Many</strong> mappings, a Student can attend many Classes, and a Class has many Students.
            </p>
          </div>
        </div>
      </section>

      {/* CRUD Operations Interactive Sandbox */}
      <section className="flex flex-col gap-8 border-t border-zinc-200 pt-16 dark:border-zinc-800">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            CRUD OPERATIONS
          </span>
          <h2 className="text-2xl font-bold text-black dark:text-white">CRUD Sandbox</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            CRUD stands for Create, Read, Update, and Delete. Click on each action to view side-by-side SQL (Relational) and NoSQL (Document) database query operations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 items-start">
          {/* Operations list */}
          <div className="lg:col-span-1 flex flex-col gap-3">
            {CRUD_EXAMPLES.map((item, idx) => (
              <button
                key={item.op}
                onClick={() => setActiveCrud(idx)}
                className={`w-full rounded-lg border p-4 text-left transition-all duration-200 ${
                  activeCrud === idx
                    ? 'border-black bg-zinc-50 dark:border-white dark:bg-zinc-900/50'
                    : 'border-zinc-200 bg-white hover:bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900/20'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm font-bold text-black dark:text-white">
                    {idx + 1}. {item.op}
                  </span>
                  <SquareTerminal className={`h-4 w-4 ${activeCrud === idx ? 'text-black dark:text-white' : 'text-zinc-400'}`} />
                </div>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Queries comparison board */}
          <div className="lg:col-span-2 flex flex-col gap-6 border border-zinc-200 rounded-xl p-6 bg-white dark:border-zinc-850 dark:bg-zinc-950">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
                {CRUD_EXAMPLES[activeCrud].op} Query Blueprint:
              </span>

              {/* SQL */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] font-semibold text-zinc-500 uppercase">
                  MySQL (SQL - Structured Tables)
                </span>
                <div className="rounded-lg bg-zinc-950 p-4 border border-zinc-900 overflow-x-auto">
                  <pre className="font-mono text-xs text-zinc-200">
                    <code>{CRUD_EXAMPLES[activeCrud].sql}</code>
                  </pre>
                </div>
              </div>

              {/* NoSQL */}
              <div className="flex flex-col gap-2 mt-2">
                <span className="font-mono text-[11px] font-semibold text-zinc-500 uppercase">
                  MongoDB (NoSQL - Flexible Objects)
                </span>
                <div className="rounded-lg bg-zinc-950 p-4 border border-zinc-900 overflow-x-auto">
                  <pre className="font-mono text-xs text-zinc-200">
                    <code>{CRUD_EXAMPLES[activeCrud].nosql}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
