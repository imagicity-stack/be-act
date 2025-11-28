'use client';

import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader';
import Counter from '../../components/Counter';
import CTAButton from '../../components/CTAButton';

const steps = [
  {
    title: 'Spark',
    text: 'An idea born from a playful “jumping dot” that made us ask: what if action felt this light?'
  },
  {
    title: 'Build',
    text: 'Communities shaped our model: co-create programs, keep things rounded and friendly, and celebrate every micro-action.'
  },
  { title: 'Amplify', text: 'Partnerships, volunteers, and mentors turned local sparks into regional movements.' },
  {
    title: 'Evolve',
    text: 'Today we are a youth-forward collective—experimenting, measuring impact, and keeping joy at the center.'
  }
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeader title="The personality of BE ACT" subtitle="Friendly, rounded, and relentlessly action-focused." />
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div className="space-y-4">
          <h3 className="font-heading text-3xl text-act-green">Who we are</h3>
          <p className="text-act-green/80 leading-relaxed">
            We are designers, educators, and community-builders who believe action should feel joyful. The BE ACT logo inspired
            our culture: bright yellow sparks ideas, deep green keeps us grounded, and the playful dot reminds us to stay nimble.
          </p>
          <CTAButton href="/contact">Say hello</CTAButton>
        </div>
        <div className="grid gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-3xl p-5 shadow-card border border-act-green/10 flex items-start space-x-4"
            >
              <div className="w-10 h-10 rounded-full bg-be-yellow flex items-center justify-center font-heading text-act-green">
                {idx + 1}
              </div>
              <div>
                <h4 className="font-heading text-xl text-act-green">{step.title}</h4>
                <p className="text-act-green/70">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-6 shadow-card border border-act-green/10">
          <h4 className="font-heading text-2xl text-act-green mb-2">What we believe</h4>
          <p className="text-act-green/80 leading-relaxed">
            Learning must feel playful, agency must be shared, and impact must be visible in the colors, shapes, and smiles we
            design together.
          </p>
        </div>
        <div className="bg-be-yellow/70 rounded-3xl p-6 shadow-card">
          <h4 className="font-heading text-2xl text-act-green mb-2">Mission</h4>
          <p className="text-act-green leading-relaxed">
            To activate bold acts of care and creativity by designing youthful experiences for communities.
          </p>
        </div>
        <div className="bg-act-green text-cream rounded-3xl p-6 shadow-card">
          <h4 className="font-heading text-2xl mb-2">Vision</h4>
          <p className="leading-relaxed">Cities and villages where taking action is the easiest and most joyful choice.</p>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeader title="Our impact story" subtitle="Numbers that continue to stretch and bounce." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Counter target={4200} label="Children reached" />
          <Counter target={2100} label="Women upskilled" />
          <Counter target={150} label="Partners collaborating" />
          <Counter target={860} label="Volunteers on-call" />
        </div>
      </div>
    </div>
  );
}
