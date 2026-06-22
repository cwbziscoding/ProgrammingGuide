'use client';

import React, { useState } from 'react';
import { Search, ExternalLink, Video } from 'lucide-react';

const CREATORS = [
  { name: 'Traversy Media', platform: 'YouTube', specialty: 'Fullstack Web Dev & Crash Courses', link: 'https://www.youtube.com/@TraversyMedia' },
  { name: 'The Net Ninja', platform: 'YouTube', specialty: 'Frontend Frameworks & Modern JavaScript', link: 'https://www.youtube.com/@NetNinja' },
  { name: 'Web Dev Simplified', platform: 'YouTube', specialty: 'Core CSS, React, and Beginner Tips', link: 'https://www.youtube.com/@WebDevSimplified' },
  { name: 'Fireship', platform: 'YouTube', specialty: 'Fast-paced tech news & code introductions', link: 'https://www.youtube.com/@Fireship' },
  { name: 'Hitesh Choudhary', platform: 'YouTube', specialty: 'Fullstack Development & Coding Logic', link: 'https://www.youtube.com/@HiteshChoudharydotcom' },
  { name: 'Programming with Mosh', platform: 'YouTube', specialty: 'Software Design, OOP, Python, & SQL', link: 'https://www.youtube.com/@programmingwithmosh' },
  { name: 'CodeWithHarry', platform: 'YouTube', specialty: 'Web Development & Programming Tutorials (Hindi)', link: 'https://www.youtube.com/@CodeWithHarry' },
  { name: 'freeCodeCamp', platform: 'YouTube / Web', specialty: 'Comprehensive Coding Bootcamps & Long Tutorials', link: 'https://www.youtube.com/@freecodecamp' },
  { name: 'Theo - t3.gg', platform: 'YouTube / Twitch', specialty: 'Web Tech Stack Commentary & React Trends', link: 'https://www.youtube.com/@t3dotgg' },
];

export default function CreatorsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCreators = CREATORS.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.platform.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 flex flex-col gap-12">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          LEARNING CHANNELS
        </span>
        <h1 className="text-4xl font-black tracking-tight text-black sm:text-5xl dark:text-white">
          Helpful Tech Creators
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          A list of the best developers and teachers offering top-tier coding guides, crash courses, and architecture walkthroughs.
        </p>
      </section>

      {/* Search Input */}
      <div className="mx-auto max-w-md w-full relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
          <Search className="h-4 w-4" />
        </div>
        <input
          type="text"
          placeholder="Search by name, platform, or specialty..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block w-full rounded-md border border-zinc-200 bg-white py-3 pl-10 pr-4 text-sm text-black shadow-sm placeholder-zinc-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder-zinc-650 dark:focus:border-white dark:focus:ring-white"
        />
      </div>

      {/* Table Component */}
      <div className="overflow-x-auto border border-zinc-200 rounded-xl bg-white dark:border-zinc-850 dark:bg-zinc-950 shadow-sm">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-850 text-left text-sm">
          <thead className="bg-zinc-50 font-mono text-xs uppercase tracking-wider text-zinc-500 dark:bg-zinc-900/60 dark:text-zinc-400">
            <tr>
              <th scope="col" className="px-6 py-4 font-bold">
                Creator
              </th>
              <th scope="col" className="px-6 py-4 font-bold">
                Platform
              </th>
              <th scope="col" className="px-6 py-4 font-bold">
                Specialty
              </th>
              <th scope="col" className="px-6 py-4 font-bold text-right">
                Link
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-850 bg-white dark:bg-zinc-950">
            {filteredCreators.length > 0 ? (
              filteredCreators.map((creator, idx) => (
                <tr
                  key={idx}
                  className="transition-colors hover:bg-zinc-50/50 dark:hover:bg-zinc-900/20"
                >
                  <td className="whitespace-nowrap px-6 py-4 font-semibold text-black dark:text-white flex items-center gap-2">
                    <Video className="h-4 w-4 text-zinc-400 shrink-0" />
                    {creator.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-zinc-505 dark:text-zinc-400 font-mono text-xs">
                    {creator.platform}
                  </td>
                  <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xs sm:max-w-md truncate">
                    {creator.specialty}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <a
                      href={creator.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors"
                    >
                      Visit Channel
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-zinc-500 font-mono">
                  No creators matching &ldquo;{searchQuery}&rdquo; found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
