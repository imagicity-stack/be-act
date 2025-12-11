'use client';

import { useState } from 'react';
import CTAButton from '../components/CTAButton';
import SectionHeader from '../components/SectionHeader';
import ProgramCard from '../components/ProgramCard';
import GalleryGrid from '../components/GalleryGrid';
import Modal from '../components/Modal';
import { programs, galleryItems } from '../lib/content';

const pillars = [
  {
    title: 'Education at the center',
    description:
      'Bridge classes, joyful reading, STEM curiosity labs, and support that keeps every child moving forward.',
    tag: 'Child education'
  },
  {
    title: 'Skill ladders for youth',
    description:
      'Studios, mentors, and career pilots that translate ambition into livelihoods with dignity and stability.',
    tag: 'Youth skills'
  },
  {
    title: 'Care that steadies families',
    description: 'Women’s leadership, clean neighbourhoods, and relief programs that keep learning journeys steady.',
    tag: 'Community care'
  }
];

export default function HomePage() {
  const [openProgram, setOpenProgram] = useState(null);

  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-[80vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img src="/images/hero-abstract.svg" alt="Abstract illustration" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink/30" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 py-24 space-y-6 text-white">
          <p className="uppercase tracking-[0.32em] text-sm text-white/70">Premium simplicity for public good</p>
          <h1 className="font-heading text-4xl md:text-5xl leading-tight">
            One clear promise across the skyline: education, dignity, and livelihoods for every neighbourhood.
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 text-base md:text-lg">
            <CTAButton href="/involve" className="bg-white text-ink">Donate now</CTAButton>
            <CTAButton href="#programs" variant="secondary" className="bg-white/10 text-white border-white/30">
              See where we work
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeader title="Quiet confidence. Bold action." subtitle="A simplified home for premium social impact." />
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-white rounded-2xl p-6 border border-act-green/10 shadow-card space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-act-green/70">{pillar.tag}</p>
              <h3 className="font-heading text-xl text-ink">{pillar.title}</h3>
              <p className="text-ink/80 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="programs" className="bg-white/70 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Program gallery"
            subtitle="Select a program to see details, packages, and the communities it uplifts."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.title} program={program} onOpen={setOpenProgram} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div className="space-y-4">
          <SectionHeader
            title="A hero section that whispers premium"
            subtitle="Minimal words. Full-bleed imagery. A calming palette that lets the mission shine."
          />
          <p className="text-ink/80 leading-relaxed">
            The refreshed experience keeps a single line of intent over a sweeping image, while every page follows with
            balanced spacing, light typography, and purposeful calls to action. It feels like a boutique space for public good.
          </p>
          <div className="flex gap-3 flex-wrap">
            <CTAButton href="/about">Meet our story</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Talk to our team
            </CTAButton>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-act-green/10 shadow-card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.25em] text-act-green">Design decisions</p>
            <span className="px-3 py-1 rounded-full bg-act-green/10 text-act-green text-xs font-semibold">Fresh UI</span>
          </div>
          <ul className="space-y-3 text-ink/80">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-lg bg-act-green text-cream flex items-center justify-center text-sm">1</span>
              <div>
                <p className="font-semibold text-ink">Full-bleed hero</p>
                <p className="text-sm text-ink/70">A single headline overlays the hero image with a gentle gradient for legibility.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-lg bg-act-green text-cream flex items-center justify-center text-sm">2</span>
              <div>
                <p className="font-semibold text-ink">Sans-serif pairing</p>
                <p className="text-sm text-ink/70">Plus Jakarta Sans for titles, Inter for body text—clean, warm, and modern.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-lg bg-act-green text-cream flex items-center justify-center text-sm">3</span>
              <div>
                <p className="font-semibold text-ink">Premium surfaces</p>
                <p className="text-sm text-ink/70">Soft cards, delicate borders, and muted gradients that frame stories with ease.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-white/60 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="Snapshots from the field" subtitle="Proof of impact captured quietly." />
          <GalleryGrid items={galleryItems.slice(0, 6)} />
          <div className="mt-8 text-center">
            <CTAButton href="/gallery" variant="secondary">
              View full gallery
            </CTAButton>
          </div>
        </div>
      </section>

      {openProgram && <Modal program={openProgram} onClose={() => setOpenProgram(null)} />}
    </div>
  );
}
