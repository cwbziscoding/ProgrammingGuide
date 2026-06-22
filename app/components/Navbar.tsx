'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/get-started', label: 'Get Started' },
  { href: '/roadmaps', label: 'Roadmaps' },
  { href: '/tools', label: 'Tools' },
  { href: '/creators', label: 'Helpful Creators' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-mono text-xl font-black tracking-tighter text-black transition-colors dark:text-white">
            w<span className="font-light">Technologies</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex md:space-x-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-2 text-sm font-medium transition-colors"
              >
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive
                      ? 'text-black dark:text-white font-semibold'
                      : 'text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-black dark:bg-white"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Buttons: Theme Toggle & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-md p-2 border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-black transition-all dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </motion.div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-md p-2 border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-black md:hidden transition-all dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="border-b border-zinc-200 bg-white md:hidden dark:border-zinc-800 dark:bg-zinc-950 overflow-hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-zinc-100 text-black dark:bg-zinc-900 dark:text-white'
                        : 'text-zinc-600 hover:bg-zinc-50 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-900/50 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
