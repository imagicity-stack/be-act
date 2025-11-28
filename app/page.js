'use client';

import { motion } from 'framer-motion';
import CTAButton from '../components/CTAButton';
import SectionHeader from '../components/SectionHeader';
import ProgramCard from '../components/ProgramCard';
import Counter from '../components/Counter';
import GalleryGrid from '../components/GalleryGrid';
import Modal from '../components/Modal';
import Mascot from '../components/Mascot';
import { useState } from 'react';
import { programs, galleryItems } from '../lib/content';

export default function HomePage() {
  const [openProgram, setOpenProgram] = useState(null);

  return (
    <div className="gradient-blob relative overflow-hidden">
      <motion.div
        className="absolute -right-24 -top-10 w-64 h-64 rounded-full funky-fade blur-3xl opacity-70 animate-wiggle-slow"
        aria-hidden
      />
      <motion.div
        className="absolute -left-10 bottom-0 w-52 h-52 rounded-[40%] bg-be-yellow/50 blur-3xl animate-pulse-glow"
        aria-hidden
      />

      <section className="relative max-w-6xl mx-auto px-4 pt-16 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center space-x-3 bg-be-yellow/40 text-act-green px-3 py-2 rounded-full font-semibold shadow-card">
            <span className="w-2 h-2 rounded-full bg-act-green animate-ping" />
            <span>Education-led, action-first NGO</span>
          </div>
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="uppercase tracking-[0.25em] text-act-green/70 text-sm"
            >
              Building Action. Building Impact.
            </motion.p>
            <h1 className="font-heading text-4xl md:text-5xl text-act-green leading-tight">
              <motion.span
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 140, damping: 12 }}
                className="inline-block rotate-[-2deg] bg-be-yellow/70 px-2 rounded-2xl"
              >
                Building Action through Education.
              </motion.span>
              <br />
              <motion.span
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08, type: 'spring', stiffness: 140, damping: 12 }}
                className="inline-flex items-center gap-2"
              >
                Building Impact
                <motion.span
                  className="w-10 h-10 rounded-full bg-act-green text-cream flex items-center justify-center shadow-card"
                  animate={{ rotate: [0, 8, -6, 0], scale: [1, 1.1, 0.95, 1] }}
                  transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
                >
                  ✺
                </motion.span>
              </motion.span>
            </h1>
          </div>
          <p className="text-lg text-act-green/80 max-w-xl leading-relaxed">
            A movement that inspires people to act, create, and contribute. We lead with playful education and skill journeys
            for children and youth, while also backing women-led ideas, clean community spaces, and rapid relief when needed.
          </p>
          <div className="flex space-x-4 items-center flex-wrap gap-3">
            <CTAButton href="/involve">INVOLVE</CTAButton>
            <CTAButton href="#programs" variant="secondary">
              Explore Programs
            </CTAButton>
            <motion.div
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-white shadow-card"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <span className="w-2 h-2 rounded-full bg-act-green animate-pulse" />
              <span className="text-sm font-semibold">Micro-acts daily</span>
            </motion.div>
          </div>
          <div className="flex space-x-6 pt-4">
            <div className="relative">
              <p className="text-sm text-act-green/60">Volunteers activated</p>
              <p className="text-3xl font-heading text-act-green">5k+</p>
              <span className="absolute -left-3 -bottom-3 w-14 h-14 rounded-full bg-be-yellow/40 blur-md animate-pulse-glow" />
            </div>
            <div>
              <p className="text-sm text-act-green/60">Communities served</p>
              <p className="text-3xl font-heading text-act-green">48</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <motion.div
            className="w-full h-[420px] bg-white rounded-[32px] shadow-2xl p-8 flex flex-col justify-between border border-act-green/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <p className="uppercase text-xs tracking-widest text-act-green/60">Action Dashboard</p>
                <h3 className="font-heading text-2xl text-act-green flex items-center gap-2">
                  People making moves
                  <span className="w-2 h-2 rounded-full bg-be-yellow animate-ping" />
                </h3>
              </div>
              <Mascot />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Learning Labs', value: '32', accent: 'bg-be-yellow' },
                { label: 'Women Circles', value: '18', accent: 'bg-act-green text-cream' },
                { label: 'Clean-up Sprints', value: '56', accent: 'bg-be-yellow' },
                { label: 'Skill Studios', value: '24', accent: 'bg-act-green text-cream' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={`rounded-3xl px-4 py-5 shadow-card ${stat.accent} bg-opacity-90 text-act-green`}
                  whileHover={{ y: -6, rotate: index % 2 === 0 ? 1 : -1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                >
                  <p className="text-sm text-act-green/80">{stat.label}</p>
                  <p className="text-3xl font-heading">{stat.value}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center space-x-3 text-act-green/70">
              <div className="w-10 h-10 rounded-full bg-be-yellow flex items-center justify-center font-bold shadow-card animate-wiggle-slow">
                ↗
              </div>
              <p className="text-sm">Elements rise, bounce, and stretch—just like our logo energy.</p>
            </div>
          </motion.div>
          <motion.div
            className="absolute -left-10 -bottom-10 w-24 h-24 rounded-full bg-be-yellow/60 blur-3xl"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <motion.div
            className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-act-green/40 blur-3xl"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.6 }}
          />
        </div>
      </section>

      <div className="flex justify-center pb-10">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="text-center">
          <div className="w-10 h-10 rounded-full bg-be-yellow/80 flex items-center justify-center text-act-green font-bold shadow-card">
            ↓
          </div>
          <p className="text-act-green/60 text-sm mt-2">Scroll for impact</p>
        </motion.div>
      </div>

      <section id="programs" className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeader title="Education-first programs" subtitle="Skills and learning at the core, with other supports alongside." />
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <ProgramCard key={program.title} program={program} onOpen={setOpenProgram} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <SectionHeader
              title="Why BE ACT exists"
              subtitle="We spark micro-actions that add up to movements—education first, equity and cleaner communities as strong enablers."
            />
            <p className="text-act-green/80 leading-relaxed">
              From the playful dot above the “e” to bold greens of “act”, every detail of our brand reminds people to move. We
              build joyful learning spaces, open skill ladders for youth, and keep complementary programs ready so every learner
              is supported at home, in class, and across their neighborhood.
            </p>
            <div className="flex space-x-3">
              <CTAButton href="/about">Meet the story</CTAButton>
              <CTAButton href="/contact" variant="secondary">
                Talk to us
              </CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-3xl bg-be-yellow/70 text-act-green p-6 shadow-card">
              <p className="text-sm uppercase tracking-widest text-act-green/70">Mission</p>
              <p className="text-lg font-heading">Activate bold acts of care through joyful community design.</p>
            </div>
            <div className="rounded-3xl bg-act-green text-cream p-6 shadow-card">
              <p className="text-sm uppercase tracking-widest text-cream/80">Vision</p>
              <p className="text-lg font-heading">People-powered cities where acting for others feels effortless.</p>
            </div>
            <div className="rounded-3xl bg-white text-act-green p-6 shadow-card border border-act-green/10">
              <p className="text-sm uppercase tracking-widest text-act-green/70">Values</p>
              <p className="font-heading text-lg">Playfulness, Equity, Courage, Collaboration.</p>
            </div>
            <div className="rounded-3xl bg-be-yellow/80 text-act-green p-6 shadow-card">
              <p className="text-sm uppercase tracking-widest text-act-green/70">Personality</p>
              <p className="font-heading text-lg">Rounded, friendly, high-energy UI that mirrors our people.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeader title="Impact that keeps rising" subtitle="Numbers that bounce with every new act." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Counter target={8200} label="People activated" />
          <Counter target={120} label="Workshops hosted" />
          <Counter target={64} label="Communities mobilized" />
          <Counter target={340} label="Scholarships awarded" />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="Gallery" subtitle="Moments of movement in action." />
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <Modal open={Boolean(openProgram)} onClose={() => setOpenProgram(null)} title={openProgram?.title}>
        <p>{openProgram?.details}</p>
      </Modal>
    </div>
  );
}
