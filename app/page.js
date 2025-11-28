'use client';

import { motion } from 'framer-motion';
import CTAButton from '../components/CTAButton';
import SectionHeader from '../components/SectionHeader';
import Modal from '../components/Modal';
import Mascot from '../components/Mascot';
import { useState } from 'react';

const amountOptions = [10, 50, 100, 200, 500, 1000, 5000, 10000];

const donationSectors = [
  {
    id: 'education',
    name: 'Education Access',
    description: 'Books, digital kits, and mentors that keep classrooms playful and bright.',
    accent: 'from-be-yellow/70 via-cream to-white',
    icon: '📚',
    packages: {
      10: 'Stationery for a learner for a week',
      50: 'Story books for a mini reading circle',
      100: 'STEM experiment kit for hands-on learning',
      200: 'Weekend digital lab session for 5 students',
      500: 'Learning festival for one community',
      1000: 'Scholarship support for a semester',
      5000: 'Fully stock a micro library',
      10000: 'Power an entire learning lab for a year'
    }
  },
  {
    id: 'society',
    name: 'Community Wellbeing',
    description: 'Clean streets, safer nights, and care packs for neighbours who need them most.',
    accent: 'from-act-green/10 via-be-yellow/40 to-white',
    icon: '🤝',
    packages: {
      10: 'Water bottles and snacks for volunteers',
      50: 'Glow bands and torches for night patrols',
      100: 'Hygiene kits for three families',
      200: 'Waste segregation starter bundle for one street',
      500: 'Pop-up health camp materials',
      1000: 'Support a neighbourhood safety drive',
      5000: 'Set up a community resilience hub',
      10000: 'Sponsor a month-long city cleanliness sprint'
    }
  },
  {
    id: 'animals',
    name: 'Animal Care',
    description: 'Comfort, rescues, and shelters for the gentle paws around us.',
    accent: 'from-be-yellow/60 via-white to-act-green/10',
    icon: '🐾',
    packages: {
      10: 'Fresh water bowls in a hotspot',
      50: 'Nutritious meals for five strays',
      100: 'Basic first-aid for rescued animals',
      200: 'Warm bedding for a recovery pen',
      500: 'Vaccination drive for a cluster',
      1000: 'Emergency rescue and vet visit',
      5000: 'Sponsor a foster shelter for a month',
      10000: 'Build a mobile animal care van'
    }
  },
  {
    id: 'climate',
    name: 'Climate Action',
    description: 'Saplings, clean air pledges, and zero-waste pop-ups for greener neighbourhoods.',
    accent: 'from-act-green/20 via-cream to-be-yellow/50',
    icon: '🌿',
    packages: {
      10: 'Seed bombs for a community trail',
      50: 'Soil and pots for balcony forests',
      100: 'Watering kits for new saplings',
      200: 'Training session on zero-waste living',
      500: 'Climate lab for a school group',
      1000: 'Micro forest starter pack',
      5000: 'Rainwater harvesting demo build',
      10000: 'Green corridor across a neighbourhood'
    }
  }
];

export default function HomePage() {
  const [activeSector, setActiveSector] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [useCustom, setUseCustom] = useState(false);

  const resetSelection = () => {
    setSelectedAmount(null);
    setCustomAmount('');
    setUseCustom(false);
  };

  const chosenAmount = useCustom ? customAmount : selectedAmount;

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

      <section className="relative max-w-6xl mx-auto px-4 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-7">
          <div className="inline-flex items-center space-x-3 bg-be-yellow/40 text-act-green px-3 py-2 rounded-full font-semibold shadow-card">
            <span className="w-2 h-2 rounded-full bg-act-green animate-ping" />
            <span>One joyful involve button. Infinite impact.</span>
          </div>
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="uppercase tracking-[0.25em] text-act-green/70 text-sm"
            >
              Choose your cause. Spark a ripple.
            </motion.p>
            <h1 className="font-heading text-4xl md:text-5xl text-act-green leading-tight">
              <motion.span
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 140, damping: 12 }}
                className="inline-block rotate-[-2deg] bg-be-yellow/70 px-2 rounded-2xl"
              >
                Design your donation.
              </motion.span>
              <br />
              <motion.span
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08, type: 'spring', stiffness: 140, damping: 12 }}
                className="inline-flex items-center gap-2"
              >
                Watch impact bloom
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
            Pick a sector, pick a purpose, and pledge an amount. Every pathway uses the same simple donation packages, tuned to
            the people and places you want to lift up.
          </p>
          <div className="flex space-x-4 items-center flex-wrap gap-3">
            <CTAButton href="#donations">Explore causes</CTAButton>
            <CTAButton href="/get-involved" variant="secondary">
              Get involved
            </CTAButton>
            <motion.div
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-white shadow-card"
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <span className="w-2 h-2 rounded-full bg-act-green animate-pulse" />
              <span className="text-sm font-semibold">Razorpay coming soon</span>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-card border border-act-green/10 p-5">
              <p className="text-sm text-act-green/60">Active supporters</p>
              <p className="text-3xl font-heading text-act-green">5k+</p>
              <p className="text-sm text-act-green/70">people who love one-click giving</p>
              <span className="absolute -left-3 -bottom-3 w-14 h-14 rounded-full bg-be-yellow/40 blur-md animate-pulse-glow" />
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-act-green text-cream shadow-card p-5">
              <p className="text-sm text-cream/80">Communities waiting</p>
              <p className="text-3xl font-heading">48</p>
              <p className="text-sm text-cream/80">and growing every month</p>
              <Mascot className="absolute -right-4 -top-3" />
            </div>
          </div>
        </div>
        <div className="relative">
          <motion.div
            className="w-full h-full bg-white rounded-[32px] shadow-2xl p-8 flex flex-col justify-between border border-act-green/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-2">
              <p className="uppercase text-xs tracking-widest text-act-green/60">Give with intention</p>
              <h3 className="font-heading text-2xl text-act-green flex items-center gap-2">Pre-built donation palettes</h3>
              <p className="text-act-green/70 text-sm">
                The same amounts power every sector. Tap a tile below and pick the impact story you want to unlock.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {amountOptions.slice(0, 6).map((amount) => (
                <motion.div
                  key={amount}
                  className="rounded-3xl px-4 py-5 shadow-card bg-be-yellow/40 text-act-green border border-act-green/10"
                  whileHover={{ y: -6, rotate: amount % 2 === 0 ? 1 : -1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                >
                  <p className="text-sm text-act-green/80">₹{amount}</p>
                  <p className="text-lg font-heading">micro to mega gifts</p>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center space-x-3 text-act-green/70 pt-2">
              <div className="w-10 h-10 rounded-full bg-be-yellow flex items-center justify-center font-bold shadow-card animate-wiggle-slow">
                ↗
              </div>
              <p className="text-sm">One design, four sectors, endless generosity.</p>
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

      <section id="donations" className="max-w-6xl mx-auto px-4 pb-16">
        <SectionHeader
          title="Pick your sector"
          subtitle="Education, community, animals, or climate—every card opens the same easy donation builder."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {donationSectors.map((sector, index) => (
            <motion.button
              key={sector.id}
              onClick={() => {
                resetSelection();
                setActiveSector(sector);
              }}
              className={`text-left rounded-[28px] p-6 shadow-card border border-act-green/10 bg-gradient-to-br ${sector.accent} hover:-translate-y-1 transition-transform`}
              whileHover={{ rotate: index % 2 === 0 ? -1 : 1 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>
                    {sector.icon}
                  </span>
                  <h3 className="font-heading text-xl text-act-green">{sector.name}</h3>
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-white/70 text-act-green font-semibold">View packages</span>
              </div>
              <p className="text-act-green/80 mt-3 leading-relaxed">{sector.description}</p>
              <div className="flex items-center gap-3 mt-4 text-act-green/70 text-sm">
                <span className="w-2 h-2 rounded-full bg-act-green animate-pulse" />
                <p>Tap to see ₹10–₹10,000 pathways crafted for this cause.</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-6">
            <SectionHeader
              title="How giving works here"
              subtitle="Simple flows, transparent purposes, and a ready Razorpay button when you are." 
            />
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  title: 'Choose a sector',
                  detail: 'Education, community wellbeing, animal care, or climate action—each with curated purposes.'
                },
                {
                  title: 'Pick an amount',
                  detail: 'Standard ₹10–₹10,000 packages keep impact predictable and easy to compare.'
                },
                {
                  title: 'Tell us about you',
                  detail: 'Fill the short form, select pay, and we will plug Razorpay in for instant checkout.'
                }
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-act-green/10 p-4 bg-be-yellow/30 text-act-green shadow-card">
                  <p className="text-xs uppercase tracking-widest text-act-green/70">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] bg-act-green text-cream p-6 shadow-card space-y-4">
            <p className="uppercase text-xs tracking-[0.2em] text-cream/80">Promise</p>
            <h3 className="font-heading text-2xl">One involve button. Zero confusion.</h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              We stripped the menu and kept the right-most involve button, so your focus stays on the cause you want to lift.
              Custom amounts are welcome—when you type yours in, the preset buttons pause automatically.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-cream/20 flex items-center justify-center text-2xl">✨</div>
              <p className="text-sm text-cream/90">Designed for joyful giving on desktop and mobile alike.</p>
            </div>
          </div>
        </div>
      </section>

      <Modal
        open={Boolean(activeSector)}
        onClose={() => setActiveSector(null)}
        title={activeSector?.name}
        pretitle="Donation pathway"
      >
        {activeSector && (
          <div className="space-y-6">
            <p className="text-act-green/80">{activeSector.description}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {amountOptions.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  disabled={useCustom}
                  onClick={() => {
                    setUseCustom(false);
                    setCustomAmount('');
                    setSelectedAmount(amount);
                  }}
                  className={`w-full text-left rounded-2xl border px-4 py-3 shadow-card transition ${
                    useCustom
                      ? 'bg-act-green/5 border-act-green/20 text-act-green/40 cursor-not-allowed'
                      : selectedAmount === amount
                        ? 'bg-act-green text-cream border-act-green'
                        : 'bg-white border-act-green/20 hover:border-act-green/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-heading text-lg">₹{amount}</p>
                    <span className="text-xs uppercase tracking-widest text-act-green/60">Preset</span>
                  </div>
                  <p className={`mt-1 text-sm ${selectedAmount === amount ? 'text-cream/90' : 'text-act-green/80'}`}>
                    {activeSector.packages[amount]}
                  </p>
                </button>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex items-center gap-3 rounded-2xl bg-be-yellow/40 px-3 py-2 border border-act-green/10 shadow-card">
                <input
                  type="radio"
                  name="amount-mode"
                  checked={useCustom}
                  onChange={() => {
                    setUseCustom(true);
                    setSelectedAmount(null);
                  }}
                  className="accent-act-green"
                />
                <div>
                  <p className="font-semibold text-act-green">Use a custom amount</p>
                  <p className="text-sm text-act-green/70">Preset buttons pause while you type.</p>
                </div>
              </label>
              <input
                type="number"
                min="1"
                placeholder="Enter custom amount"
                value={customAmount}
                onFocus={() => {
                  setUseCustom(true);
                  setSelectedAmount(null);
                }}
                onChange={(e) => {
                  setUseCustom(true);
                  setSelectedAmount(null);
                  setCustomAmount(e.target.value);
                }}
                className="w-full rounded-2xl border border-act-green/20 px-4 py-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-act-green"
              />
            </div>

            <form className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-act-green/80">Full name</label>
                <input
                  required
                  type="text"
                  placeholder="You or your organisation"
                  className="w-full rounded-xl border border-act-green/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-act-green"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-act-green/80">Email</label>
                <input
                  required
                  type="email"
                  placeholder="name@email.com"
                  className="w-full rounded-xl border border-act-green/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-act-green"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-act-green/80">Phone</label>
                <input
                  required
                  type="tel"
                  placeholder="Include country code"
                  className="w-full rounded-xl border border-act-green/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-act-green"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-act-green/80">City / Region</label>
                <input
                  type="text"
                  placeholder="Where you want the impact"
                  className="w-full rounded-xl border border-act-green/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-act-green"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-sm font-semibold text-act-green/80">Notes</label>
                <textarea
                  rows="3"
                  placeholder="Add dedication, preferences, or instructions"
                  className="w-full rounded-xl border border-act-green/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-act-green"
                />
              </div>
            </form>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <p className="text-act-green/70 text-sm">
                Selected amount: {chosenAmount ? `₹${chosenAmount}` : 'Pick a preset or enter custom to continue.'}
              </p>
              <button
                type="button"
                className={`px-4 py-3 rounded-full font-bold shadow-card transition ${
                  chosenAmount ? 'bg-act-green text-cream hover:-translate-y-0.5' : 'bg-act-green/40 text-cream cursor-not-allowed'
                }`}
                disabled={!chosenAmount}
              >
                Pay with Razorpay (coming soon)
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
