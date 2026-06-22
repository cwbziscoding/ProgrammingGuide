'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo and Credits */}
          <div className="text-center sm:text-left">
            <span className="font-mono text-lg font-black tracking-tighter text-black dark:text-white">
              w<span className="font-light">Technologies</span>
            </span>
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              Powered by wTechnologies | Personalized by cwbz
            </p>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/get-started" className="hover:text-black dark:hover:text-white transition-colors">
              Get Started
            </Link>
            <Link href="/roadmaps" className="hover:text-black dark:hover:text-white transition-colors">
              Roadmaps
            </Link>
            <Link href="/tools" className="hover:text-black dark:hover:text-white transition-colors">
              Tools
            </Link>
            <Link href="/creators" className="hover:text-black dark:hover:text-white transition-colors">
              Creators
            </Link>
            <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
              About
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-100 pt-8 text-center dark:border-zinc-900">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            &copy; {currentYear} wTechnologies. All rights reserved. Made for aspiring developers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
