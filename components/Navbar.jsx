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
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-act-green/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-act-green text-cream flex items-center justify-center font-heading text-lg shadow-card">
              BE
            </div>
            <Mascot className="absolute -right-4 -top-2 hidden sm:block" />
          </div>
          <div className="leading-tight">
            <p className="font-heading text-lg tracking-tight text-ink">BE ACT Foundation</p>
            <p className="text-sm text-act-green/70">Building Action. Building Impact.</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === link.href
                  ? 'bg-act-green text-cream shadow-card'
                  : 'text-ink hover:bg-act-green/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/involve"
            className="ml-2 px-4 py-2 rounded-lg bg-act-green text-cream font-semibold shadow-card hover:-translate-y-0.5 transition-transform"
          >
            Donate / Involve
          </Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-act-green text-cream font-bold"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="md:hidden bg-white/95 px-4 pb-4 shadow-card"
        >
          <div className="flex flex-col space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-lg font-semibold ${
                  pathname === link.href ? 'bg-act-green text-cream' : 'bg-act-green/5 text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/involve"
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-center rounded-lg bg-act-green text-cream font-semibold"
            >
              Donate / Involve
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
