'use client';

import { useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import ProgramCard from '../../components/ProgramCard';
import Modal from '../../components/Modal';
import CTAButton from '../../components/CTAButton';
import { programs } from '../../lib/content';

export default function ProgramsPage() {
  const [openProgram, setOpenProgram] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeader
        title="Education-first programs"
        subtitle="Learning and skill-building lead the way, with other initiatives supporting every learner and family."
      />
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {programs.map((program) => (
          <ProgramCard key={program.title} program={program} onOpen={setOpenProgram} />
        ))}
      </div>
      <div className="bg-act-green text-cream rounded-3xl p-8 shadow-card flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-2">
          <p className="uppercase text-xs tracking-widest text-cream/80">Want to collaborate?</p>
          <h3 className="font-heading text-2xl">Bring this energy to your city.</h3>
          <p className="text-cream/80">Partner with us to remix these initiatives for your community.</p>
        </div>
        <CTAButton href="/contact" variant="secondary" className="mt-4 md:mt-0 bg-cream text-act-green">
          Propose a program
        </CTAButton>
      </div>
      <Modal open={Boolean(openProgram)} onClose={() => setOpenProgram(null)} title={openProgram?.title}>
        <p>{openProgram?.details}</p>
      </Modal>
    </div>
  );
}
