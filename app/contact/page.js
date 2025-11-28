'use client';

import { useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [toast, setToast] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setToast('Sending...');
    await fetch(`${process.env.NEXT_PUBLIC_API_BASE || ''}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setToast('Thanks! We will get back to you.');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <SectionHeader title="Contact" subtitle="A playful form that lands straight in our inbox." />
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <h3 className="font-heading text-3xl text-act-green">Let’s build something lively</h3>
          <p className="text-act-green/80">
            Whether you are a volunteer, donor, or partner, drop us a note. We read every message and reply with energy.
          </p>
          <div className="rounded-3xl bg-white p-6 shadow-card border border-act-green/10 space-y-3">
            <p className="font-heading text-lg">Need quick info?</p>
            <p className="text-act-green/70 text-sm">Phone: +1 (800) BE-ACT</p>
            <p className="text-act-green/70 text-sm">Email: hello@beact.org</p>
            <p className="text-act-green/70 text-sm">Location: 123 Impact Street, Inspire City</p>
            <CTAButton href="mailto:hello@beact.org" variant="secondary">
              Email us directly
            </CTAButton>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 shadow-card border border-act-green/10 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
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
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              className="px-4 py-3 rounded-2xl border border-act-green/20"
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="w-full bg-act-green text-cream py-3 rounded-2xl font-bold">
            Send message
          </button>
          {toast && <p className="text-sm text-act-green/70">{toast}</p>}
        </form>
      </div>
    </div>
  );
}
