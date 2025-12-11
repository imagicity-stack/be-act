'use client';

import { useState } from 'react';
import CTAButton from '../components/CTAButton';
import SectionHeader from '../components/SectionHeader';
import ProgramCard from '../components/ProgramCard';
import GalleryGrid from '../components/GalleryGrid';
import Modal from '../components/Modal';
import { programs, galleryItems } from '../lib/content';

const heroStats = [
  { label: 'Learners reached', value: '12,400+' },
  { label: 'Cities served', value: '32' },
  { label: 'Women-led circles', value: '18' }
];

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

const promise = [
  {
    label: 'Transparent giving',
    copy: 'Clear packages and reporting so every rupee follows the impact you choose.'
  },
  {
    label: 'Human-first design',
    copy: 'Soft hues, generous spacing, and language that keeps dignity at the core.'
  },
  {
    label: 'Premium simplicity',
    copy: 'Less noise, more clarity. A calm space to get involved in seconds.'
  }
];

export default function HomePage() {
  const [openProgram, setOpenProgram] = useState(null);

  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-abstract.svg" alt="Abstract illustration" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/70 to-act-green/60" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 w-full grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-6 text-white">
            <p className="uppercase tracking-[0.32em] text-sm text-white/70">Premium care for a public mission</p>
            <h1 className="font-heading text-4xl md:text-5xl leading-tight max-w-2xl">
              Education that feels premium, purposeful, and within reach for every community.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              We design serene, future-forward programs—where learning, livelihood, and clean environments meet with quiet
              confidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/involve" className="bg-white text-ink">Donate &amp; get involved</CTAButton>
              <CTAButton href="#programs" variant="secondary" className="bg-white/10 text-white border-white/30">
                Explore programs
              </CTAButton>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur">
                  <p className="text-sm text-white/70">{stat.label}</p>
                  <p className="text-2xl font-heading">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-card p-6 backdrop-blur border border-white/40 space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-act-green">Our promise</p>
            {promise.map((item) => (
              <div key={item.label} className="p-4 rounded-xl bg-cream/70 border border-act-green/10">
                <p className="text-xs font-semibold text-act-green/70 uppercase tracking-[0.25em]">{item.label}</p>
                <p className="text-ink/80 mt-2 leading-relaxed">{item.copy}</p>
              </div>
            ))}
            <div className="rounded-xl bg-act-green text-cream p-4">
              <p className="text-sm font-semibold">Already with us?</p>
              <p className="text-cream/70 text-sm">Log impact hours, download receipts, or connect with our team anytime.</p>
            </div>
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
