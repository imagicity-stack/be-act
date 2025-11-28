'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';

const blocks = [
  {
    title: 'Volunteer',
    description: 'Lead workshops, design campaigns, or run clean-up sprints. We welcome all superpowers.',
    action: 'Sign up to volunteer'
  },
  {
    title: 'Donate',
    description: 'Fuel scholarships, program kits, and makerspace gear for youth and women.',
    action: 'Fund an action'
  },
  {
    title: 'Partner',
    description: 'Bring BE ACT to your school, company, or city. Co-create initiatives that fit your needs.',
    action: 'Launch a partnership'
  }
];

export default function GetInvolvedPage() {
  const [donation, setDonation] = useState('50');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [toast, setToast] = useState('');

  const slabs = [
    { amount: 25, label: 'Starter kit' },
    { amount: 50, label: 'One workshop' },
    { amount: 100, label: 'Sponsor a classroom' },
    { amount: 250, label: 'Empower a cohort' }
  ];

  const submitDonation = async (e) => {
    e.preventDefault();
    setToast('Sending your impact pledge...');
    await fetch(`${process.env.NEXT_PUBLIC_API_BASE || ''}/api/donate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, amount: donation })
    });
    setToast('Thank you for powering action!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeader title="Get involved" subtitle="Three vibrant ways to fuel action." />
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {blocks.map((block) => (
          <motion.div
            key={block.title}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-6 shadow-card border border-act-green/10 card-hover"
          >
            <div className="w-12 h-12 rounded-2xl bg-be-yellow flex items-center justify-center font-heading text-act-green text-xl mb-4">
              {block.title.charAt(0)}
            </div>
            <h3 className="font-heading text-2xl text-act-green mb-2">{block.title}</h3>
            <p className="text-act-green/80 mb-4">{block.description}</p>
            <CTAButton href="#donate" className="bg-act-green text-cream">
              {block.action}
            </CTAButton>
          </motion.div>
        ))}
      </div>

      <section id="donate" className="bg-act-green text-cream rounded-3xl p-8 shadow-card">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="uppercase text-xs tracking-widest text-cream/80">Donation slabs</p>
            <h3 className="font-heading text-3xl mb-4">Fuel the movement</h3>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {slabs.map((slab) => (
                <button
                  key={slab.amount}
                  onClick={() => setDonation(String(slab.amount))}
                  className={`rounded-2xl px-4 py-3 text-left border ${
                    donation === String(slab.amount)
                      ? 'bg-be-yellow text-act-green border-be-yellow'
                      : 'bg-cream/10 border-cream/40 text-cream'
                  }`}
                >
                  <div className="font-heading text-xl">${slab.amount}</div>
                  <p className="text-sm opacity-80">{slab.label}</p>
                </button>
              ))}
            </div>
            <p className="text-cream/70 text-sm">Every contribution funds creative kits, safe spaces, and mentorship hours.</p>
          </div>
          <form onSubmit={submitDonation} className="bg-white text-act-green rounded-3xl p-6 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="px-4 py-3 rounded-2xl border border-act-green/20"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className="px-4 py-3 rounded-2xl border border-act-green/20"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                className="px-4 py-3 rounded-2xl border border-act-green/20"
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <input
                className="px-4 py-3 rounded-2xl border border-act-green/20"
                placeholder="Amount"
                value={donation}
                onChange={(e) => setDonation(e.target.value)}
              />
            </div>
            <button type="submit" className="mt-4 w-full bg-act-green text-cream py-3 rounded-2xl font-bold">
              Donate now
            </button>
            {toast && <p className="text-sm text-act-green/70 mt-2">{toast}</p>}
          </form>
        </div>
      </section>
    </div>
  );
}
