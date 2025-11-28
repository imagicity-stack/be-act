'use client';

import { useMemo, useState } from 'react';
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
  const [activeSector, setActiveSector] = useState(sectors[0]);
  const [amountMode, setAmountMode] = useState('preset');
  const [selectedAmount, setSelectedAmount] = useState(sectors[0].packages[0].amount);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    pan: '',
    note: ''
  });

  const sectorPackages = useMemo(() => activeSector.packages, [activeSector]);
  const isCustomSelected = amountMode === 'custom';

  const handleSectorSelect = (sector) => {
    setActiveSector(sector);
    setAmountMode('preset');
    setSelectedAmount(sector.packages[0].amount);
    setCustomAmount('');
  };

  const handleCustomToggle = () => {
    setAmountMode('custom');
    setSelectedAmount('custom');
  };

  const handlePresetSelect = (amount) => {
    setAmountMode('preset');
    setSelectedAmount(amount);
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
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-14">
      <SectionHeader
        title="Give with purpose — every rupee finds its way to impact"
        subtitle="Choose the cause closest to your heart, pick a package, or add a custom amount."
      />

      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            {sectors.map((sector) => {
              const isActive = activeSector.id === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => handleSectorSelect(sector)}
                  className={`text-left rounded-3xl p-5 border shadow-card transition-all hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-act-green/60 ${
                    isActive
                      ? 'bg-act-green text-cream border-act-green'
                      : 'bg-white text-act-green border-act-green/10 hover:border-act-green/40'
                  }`}
                >
                  <p className="uppercase text-xs tracking-[0.2em] opacity-70">Sector</p>
                  <h3 className="font-heading text-xl mb-2">{sector.name}</h3>
                  <p className={`text-sm leading-relaxed ${isActive ? 'text-cream/80' : 'text-act-green/80'}`}>
                    {sector.summary}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-card border border-act-green/10 space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-act-green/70">Selected sector</p>
                <h3 className="font-heading text-2xl text-act-green">{activeSector.name}</h3>
              </div>
              <CTAButton href="#donate" className="bg-act-green text-cream">
                Start a donation
              </CTAButton>
            </div>
            <p className="text-act-green/80">
              Click a package to prefill your form. Custom amounts switch off preset packages to keep the selection clear.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {sectorPackages.map((pack) => (
                <button
                  key={pack.amount}
                  disabled={isCustomSelected}
                  onClick={() => handlePresetSelect(pack.amount)}
                  className={`w-full text-left rounded-2xl border px-4 py-3 shadow-card transition ${
                    isCustomSelected
                      ? 'border-act-green/10 bg-act-green/5 text-act-green/50 cursor-not-allowed'
                      : selectedAmount === pack.amount
                        ? 'border-act-green bg-act-green text-cream'
                        : 'border-act-green/15 hover:border-act-green/50 bg-cream'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xl">₹{pack.amount.toLocaleString()}</span>
                    {!isCustomSelected && selectedAmount === pack.amount && (
                      <span className="text-sm font-semibold">Chosen</span>
                    )}
                  </div>
                  <p className="text-sm mt-1 leading-relaxed opacity-80">{pack.purpose}</p>
                </button>
              ))}
              <div className="rounded-2xl border border-dashed border-act-green/40 bg-be-yellow/30 p-4 shadow-card space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-act-green/70">Custom pledge</p>
                    <p className="font-heading text-lg text-act-green">Write any amount</p>
                  </div>
                  <label className="flex items-center gap-2 text-act-green font-semibold">
                    <input
                      type="radio"
                      name="amount-mode"
                      checked={isCustomSelected}
                      onChange={handleCustomToggle}
                      className="w-4 h-4 accent-act-green"
                      aria-label="Select custom amount"
                    />
                    Custom
                  </label>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-act-green font-semibold">₹</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    disabled={!isCustomSelected}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="flex-1 rounded-2xl border border-act-green/30 px-4 py-3 bg-white focus:outline-none focus:border-act-green focus:ring-2 focus:ring-act-green/30 disabled:bg-act-green/5 disabled:text-act-green/50"
                  />
                </div>
                {isCustomSelected && (
                  <button
                    type="button"
                    onClick={() => handlePresetSelect(activeSector.packages[0].amount)}
                    className="text-sm font-semibold text-act-green underline"
                  >
                    Use preset packages instead
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div id="donate" className="bg-white rounded-3xl p-6 shadow-card border border-act-green/10 space-y-5 sticky top-24">
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
