'use client';

import Link from 'next/link';
import Mascot from './Mascot';

export default function Navbar() {
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
        <Link
          href="/get-involved"
          className="px-4 py-2 rounded-full bg-act-green text-cream font-bold shadow-card hover:-translate-y-0.5 transition-transform"
        >
          Get Involved
        </Link>
      </div>
    </header>
  );
}
