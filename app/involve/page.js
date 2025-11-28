import SectionHeader from '../../components/SectionHeader';
import CTAButton from '../../components/CTAButton';

const pillars = [
  {
    title: 'Education & Child Development',
    items: [
      'Strengthening rural and semi-urban schools',
      'Providing learning materials, digital tools, and academic support',
      'Enabling classroom upgrades and teacher development programs',
      'Supporting children from low-income families with essential resources'
    ]
  },
  {
    title: 'Healthcare & Wellness',
    items: [
      'Medical camps and health awareness initiatives',
      'Assistance for families facing medical emergencies',
      'Distribution of nutrition kits, sanitary supplies, and basic medication',
      'Support for preventive and community health programs'
    ]
  },
  {
    title: 'Women Empowerment',
    items: [
      'Financial literacy workshops',
      'Self-help and skill training programs',
      'Capacity-building activities to promote independence and confidence'
    ]
  },
  {
    title: 'Livelihood & Skilling',
    items: [
      'Vocational training for youth',
      'Entrepreneurship assistance for small business starters',
      'Skill-building courses that lead to employability'
    ]
  },
  {
    title: 'Rural Development & Environment',
    items: [
      'Clean drinking water access initiatives',
      'Community hygiene and sanitation efforts',
      'Plantation and clean-environment drives',
      'Infrastructure improvements in underserved areas'
    ]
  },
  {
    title: 'Relief & Rehabilitation',
    items: [
      'Rapid response during natural disasters, accidents, or crises',
      'Food distribution, temporary shelter, and essential supplies',
      'Long-term rehabilitation for affected communities'
    ]
  }
];

const presetAmounts = [
  { amount: '₹500', detail: 'Helps provide basic learning or health support' },
  { amount: '₹1000', detail: 'Supports community health and welfare initiatives' },
  { amount: '₹2500', detail: 'Funds learning kits, skill sessions, or women empowerment activities' },
  { amount: '₹5000', detail: 'Supports high-impact development and livelihood programs' },
  { amount: 'Custom Amount', detail: 'Contribute as per your wish' }
];

const assurances = [
  {
    title: 'Genuine Utilisation',
    description: 'Your donation is used strictly for community development and welfare programs.'
  },
  {
    title: 'Verified Processes',
    description: 'All transactions are securely documented with full compliance.'
  },
  {
    title: 'Acknowledgment & Receipt',
    description: 'Receive email confirmation, official receipt, and purpose acknowledgment (if specified).'
  },
  {
    title: 'Regular Updates',
    description: 'Donors may receive periodic updates, stories of impact, and program progress reports.'
  },
  {
    title: 'Ethical Standards',
    description: 'We follow strict guidelines on resource utilisation, child protection, and data handling.'
  }
];

const credentials = [
  { label: 'BE ACT Foundation', value: 'Operated Under: Bhagwati Educational and Charitable Trust' },
  { label: 'Registered', value: '[Insert registration number]' },
  { label: 'Address', value: '[Insert full registered address]' },
  { label: 'Email', value: '[Insert NGO email]' },
  { label: 'Phone', value: '[Insert contact number]' },
  {
    label: 'Documentation',
    value: 'Trust Certificate, PAN, bank details, and registration copies available on request.'
  }
];

export default function InvolvePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      <SectionHeader
        title="Donate Now – Your Support Creates Real, Measurable Change"
        subtitle="Your contribution is not a transaction; it is an investment in human potential, dignity, and long-term community growth."
      />

      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-card p-8 border border-act-green/10">
        <div className="space-y-4">
          <p className="text-act-green/80 leading-relaxed">
            Across communities, there are children who want to learn, families who need healthcare, women striving for
            independence, and villages waiting for basic opportunities that many take for granted. At BE ACT Foundation, we
            work every day to bridge these gaps — but lasting change is possible only when compassionate individuals come
            forward to support the mission.
          </p>
          <p className="text-act-green/80 leading-relaxed">
            Your support strengthens every layer of this work. From immediate relief to long-term programs, every rupee is
            carefully directed to where it matters most.
          </p>
          <div className="flex flex-wrap gap-3">
            <CTAButton href="#donate" className="bg-act-green text-cream">
              Begin Your Contribution
            </CTAButton>
            <CTAButton href="#transparency" variant="secondary">
              How we steward your gift
            </CTAButton>
          </div>
        </div>
        <div className="bg-act-green text-cream rounded-3xl p-6 space-y-4 shadow-card">
          <p className="uppercase text-xs tracking-widest text-cream/80">Choose How You Wish to Contribute</p>
          <h3 className="font-heading text-3xl">Preset Amounts</h3>
          <div className="space-y-3">
            {presetAmounts.map((preset) => (
              <div
                key={preset.amount}
                className="rounded-2xl bg-cream/10 border border-cream/20 px-4 py-3 flex justify-between items-start"
              >
                <span className="font-heading text-xl">{preset.amount}</span>
                <span className="text-sm text-cream/80 ml-4">{preset.detail}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-cream/80">
            Every donation strengthens one or more of our core development pillars.
          </p>
        </div>
      </div>

      <section id="pillars" className="space-y-6">
        <SectionHeader
          title="How Your Contribution Helps"
          subtitle="Every donation strengthens one or more of our core development pillars."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-white rounded-3xl p-6 shadow-card border border-act-green/10">
              <h3 className="font-heading text-2xl text-act-green mb-3">{pillar.title}</h3>
              <ul className="space-y-2 text-act-green/80 list-disc list-inside">
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="transparency" className="bg-white rounded-3xl p-8 shadow-card border border-act-green/10 space-y-6">
        <SectionHeader
          title="Where Your Money Goes"
          subtitle="We believe in complete transparency. No contribution is wasted; everything is accounted for."
        />
        <div className="grid md:grid-cols-2 gap-6 text-act-green/80">
          <div className="space-y-3">
            <p>Direct program expenses</p>
            <p>Field operations and on-ground implementation</p>
            <p>Essential administrative costs required for safe, legal and effective functioning</p>
            <p>Monitoring, reporting and evaluation</p>
            <p className="font-semibold text-act-green">Every donor matters.</p>
          </div>
          <div className="space-y-3">
            <p className="font-heading text-xl text-act-green">Trust, Transparency, and Accountability</p>
            <div className="grid gap-3">
              {assurances.map((assurance) => (
                <div key={assurance.title} className="rounded-2xl bg-be-yellow/40 p-4 border border-act-green/10">
                  <p className="font-heading text-lg text-act-green">{assurance.title}</p>
                  <p className="text-sm text-act-green/80">{assurance.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="donate" className="grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-act-green text-cream rounded-3xl p-8 shadow-card space-y-4">
          <h3 className="font-heading text-2xl">Make a Secure Contribution</h3>
          <p className="text-cream/80">
            Please fill in the details below to proceed with your donation. After submitting, you will be redirected to our
            secure payment gateway. Every transaction is encrypted and processed through certified, trusted channels.
          </p>
          <form className="space-y-3">
            {[
              'Full Name',
              'Email Address',
              'Phone Number',
              'City',
              'Donation Amount',
              'PAN (optional for receipt)',
              'Purpose of Donation (optional: e.g., Education, Health, Women Empowerment, Rural Development, General Fund)'
            ].map((field) => (
              <input
                key={field}
                className="w-full px-4 py-3 rounded-2xl border border-cream/30 bg-cream/10 placeholder:text-cream/70 text-cream"
                placeholder={field}
                required={!field.toLowerCase().includes('optional')}
              />
            ))}
            <CTAButton className="w-full justify-center bg-be-yellow text-act-green" href="#">
              Proceed to Payment Gateway
            </CTAButton>
          </form>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-6 shadow-card border border-act-green/10">
            <h4 className="font-heading text-xl text-act-green mb-2">Foundation Credentials</h4>
            <ul className="space-y-2 text-act-green/80">
              {credentials.map((cred) => (
                <li key={cred.label}>
                  <span className="font-semibold text-act-green">{cred.label}:</span> {cred.value}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-be-yellow/60 rounded-3xl p-6 shadow-card text-act-green space-y-3">
            <h4 className="font-heading text-xl">Your Contribution Matters More Than You Realise</h4>
            <p className="text-act-green/80">
              When you donate, you help a child attend school with dignity, a family receive medical support during crisis, a
              woman gain financial independence, a village access clean water and essentials, youth learn skills, and a
              community recover from disaster with resilience.
            </p>
            <p className="font-semibold">
              Whether you give once or support us regularly, your kindness becomes someone’s turning point.
            </p>
            <p className="text-sm text-act-green/80">
              Together, we can build stronger, healthier, more empowered communities — one step at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
