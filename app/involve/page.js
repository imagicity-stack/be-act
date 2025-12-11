'use client';

import { useEffect, useMemo, useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';
import { programs } from '../../lib/content';

const sectors = programs.map((program) => ({
  id: program.slug,
  name: program.title,
  summary: program.preview,
  packages: program.donationPackages
}));

const formFields = [
  { name: 'fullName', label: 'Full Name', type: 'text', required: true },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
  { name: 'city', label: 'City', type: 'text', required: true },
  { name: 'pan', label: 'PAN (optional for receipt)', type: 'text', required: false },
  {
    name: 'note',
    label: 'Message for the team (optional)',
    type: 'textarea',
    required: false,
    placeholder: 'Share dedications, instructions, or how you heard about us.'
  }
];

export default function InvolvePage() {
  const [activeSectorId, setActiveSectorId] = useState(sectors[0].id);
  const [selectedAmount, setSelectedAmount] = useState(sectors[0].packages[0].amount);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('One-time');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    pan: '',
    note: ''
  });

  const activeSector = useMemo(
    () => sectors.find((sector) => sector.id === activeSectorId) ?? sectors[0],
    [activeSectorId]
  );
  const sectorPackages = useMemo(() => activeSector.packages, [activeSector]);
  const isCustomSelected = selectedAmount === 'custom';

  useEffect(() => {
    if (!activeSector) return;
    setSelectedAmount(activeSector.packages[0].amount);
    setCustomAmount('');
  }, [activeSector]);

  const handlePresetSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCustomSelected && !customAmount) {
      alert('Please enter a custom amount to continue.');
      return;
    }
    // Payment gateway integration will replace this handler.
    alert('Payment flow will open after integrating Razorpay.');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <SectionHeader
        title="Donate with calm, confident design"
        subtitle="Choose your cause from a dropdown, pick a ready package, or type a custom pledge. Everything stays light and simple."
      />

      <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
        <div className="space-y-6">
          <div className="rounded-2xl bg-ink text-cream p-6 shadow-card flex flex-col gap-4">
            <div className="space-y-2">
              <p className="uppercase text-[11px] tracking-[0.3em] text-cream/60">Pick your focus</p>
              <h3 className="font-heading text-xl">Select a program from the dropdown</h3>
              <p className="text-cream/80 leading-relaxed">
                Child education, youth skills, or neighbourhood care—choose the cause and we will tailor your receipt and
                updates.
              </p>
            </div>
            <label className="text-sm font-semibold text-cream" htmlFor="sector-select">
              Program
            </label>
            <select
              id="sector-select"
              value={activeSectorId}
              onChange={(e) => setActiveSectorId(e.target.value)}
              className="w-full rounded-2xl border border-cream/40 bg-cream/10 px-4 py-3 text-cream focus:outline-none focus:border-cream focus:ring-2 focus:ring-cream/30"
            >
              {sectors.map((sector) => (
                <option key={sector.id} value={sector.id} className="text-ink">
                  {sector.name}
                </option>
              ))}
            </select>
            <p className="text-sm text-cream/70 leading-relaxed">{activeSector.summary}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-card border border-act-green/10 space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-act-green/70">Ready-made packages</p>
                <h3 className="font-heading text-2xl text-ink">{activeSector.name}</h3>
              </div>
              <CTAButton href="#donate" className="bg-act-green text-cream">
                Start a donation
              </CTAButton>
            </div>
            <p className="text-ink/70">Tap a package or type a custom amount to keep the form tidy.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {sectorPackages.map((pack) => (
                <button
                  key={pack.amount}
                  onClick={() => handlePresetSelect(pack.amount)}
                  className={`w-full text-left rounded-2xl border px-4 py-3 shadow-card transition ${
                    selectedAmount === pack.amount
                      ? 'border-act-green bg-act-green text-cream'
                      : 'border-act-green/15 hover:border-act-green/50 bg-cream text-ink'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xl">₹{pack.amount.toLocaleString()}</span>
                    {selectedAmount === pack.amount && <span className="text-sm font-semibold">Chosen</span>}
                  </div>
                  <p className="text-sm mt-1 leading-relaxed opacity-80">{pack.purpose}</p>
                </button>
              ))}
              <div className="rounded-2xl border border-dashed border-act-green/40 bg-be-yellow/20 p-4 shadow-card space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-act-green/70">Custom pledge</p>
                    <p className="font-heading text-lg text-ink">Write any amount</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedAmount('custom')}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      isCustomSelected
                        ? 'bg-act-green text-cream'
                        : 'bg-white text-act-green border border-act-green/40'
                    }`}
                  >
                    {isCustomSelected ? 'Custom active' : 'Use custom'}
                  </button>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-act-green font-semibold">₹</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount('custom');
                    }}
                    className="flex-1 rounded-2xl border border-act-green/30 px-4 py-3 bg-white focus:outline-none focus:border-act-green focus:ring-2 focus:ring-act-green/20"
                  />
                </div>
                <p className="text-xs text-act-green/80">Custom amounts overwrite any selected package.</p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="donate"
          className="bg-white rounded-2xl p-6 shadow-card border border-act-green/10 space-y-5 sticky top-24"
        >
          <div className="rounded-2xl bg-act-green text-cream p-5 space-y-2">
            <p className="uppercase text-[11px] tracking-[0.25em] text-cream/70">One simple form</p>
            <h3 className="font-heading text-2xl">Donate to {activeSector.name}</h3>
            <p className="text-cream/80">
              Preset amounts cover program-ready packages. Custom giving unlocks flexible support. Payment will continue via Razorpay.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="text-sm font-semibold text-act-green" htmlFor="sector">
                  Selected sector
                </label>
                <input
                  id="sector"
                  value={activeSector.name}
                  readOnly
                  className="w-full px-4 py-3 rounded-2xl border border-act-green/20 bg-act-green/5 text-act-green font-semibold"
                />
              </div>
              <div className="col-span-2">
                <label className="text-sm font-semibold text-act-green" htmlFor="frequency">
                  Frequency
                </label>
                <select
                  id="frequency"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-act-green/20 bg-cream focus:outline-none focus:border-act-green focus:ring-2 focus:ring-act-green/30"
                >
                  <option>One-time</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-semibold text-act-green" htmlFor="amount">
                  Donation amount
                </label>
                <input
                  id="amount"
                  value={
                    isCustomSelected
                      ? customAmount
                        ? `₹${Number(customAmount).toLocaleString()}`
                        : ''
                      : `₹${Number(selectedAmount).toLocaleString()}`
                  }
                  placeholder="Select a package or enter a custom amount"
                  readOnly
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-act-green/20 bg-act-green/5 text-act-green font-semibold placeholder:text-act-green/50"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {formFields.map((field) => (
                <div key={field.name} className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
                  <label className="text-sm font-semibold text-act-green" htmlFor={field.name}>
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-act-green/20 bg-cream focus:outline-none focus:border-act-green focus:ring-2 focus:ring-act-green/30 min-h-[110px]"
                    />
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-act-green/20 bg-cream focus:outline-none focus:border-act-green focus:ring-2 focus:ring-act-green/30"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-be-yellow/40 px-4 py-3 text-sm text-act-green">
              <p className="font-semibold">Pre-payment note</p>
              <p className="leading-relaxed">
                The Pay button will open our Razorpay gateway in the next phase. You will receive a receipt and impact update based on the chosen sector.
              </p>
            </div>

            <CTAButton className="w-full justify-center bg-act-green text-cream" href="#" onClick={handleSubmit}>
              Pay securely (Razorpay coming soon)
            </CTAButton>
          </form>
        </div>
      </div>
    </div>
  );
}
