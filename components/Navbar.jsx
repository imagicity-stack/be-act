'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Mascot from './Mascot';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-act-green/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-act-green text-be-yellow flex items-center justify-center font-heading text-xl shadow-card">
              BE
            </div>
            <Mascot className="absolute -right-4 -top-2 hidden sm:block" />
          </div>
          <div>
            <p className="font-heading text-lg leading-tight">BE ACT Foundation</p>
            <p className="text-sm text-act-green/70">Building Action. Building Impact.</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                pathname === link.href
                  ? 'bg-act-green text-cream shadow-card'
                  : 'hover:bg-be-yellow/30 text-act-green'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/involve"
            className="ml-2 px-4 py-2 rounded-full bg-be-yellow text-act-green font-bold shadow-card hover:-translate-y-0.5 transition-transform"
          >
            INVOLVE
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-be-yellow text-act-green font-bold"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden bg-cream/95 px-4 pb-4 shadow-card"
        >
          <div className="flex flex-col space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-xl font-semibold ${
                  pathname === link.href ? 'bg-act-green text-cream' : 'bg-be-yellow/40 text-act-green'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/involve"
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-center rounded-xl bg-act-green text-cream font-bold"
            >
              INVOLVE
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
