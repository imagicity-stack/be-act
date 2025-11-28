'use client';

import { motion } from 'framer-motion';
import SectionHeader from '../../components/SectionHeader';
import Counter from '../../components/Counter';
import CTAButton from '../../components/CTAButton';

const principles = [
  {
    title: 'Multi-sector focus',
    text: 'We address challenges across education, health, livelihood, and community resilience to ensure holistic development.'
  },
  {
    title: 'Impact-first approach',
    text: 'Every project is aligned to clear outcomes with measurable progress and long-term value.'
  },
  {
    title: 'Strong partnerships',
    text: 'Schools, healthcare institutions, local authorities, and grassroots organisations expand our reach and depth.'
  },
  {
    title: 'Transparency and accountability',
    text: 'Initiatives are tracked, monitored, and responsibly executed with data-led reviews.'
  },
  {
    title: 'Long-term thinking',
    text: 'We build solutions that remain effective well beyond immediate interventions.'
  }
];

const workAreas = [
  {
    title: 'Education',
    details: 'School development, learning resources, teacher training, and student support initiatives.'
  },
  {
    title: 'Healthcare',
    details: 'Medical camps, awareness drives, essential aid, and sanitation projects.'
  },
  {
    title: 'Livelihood & Skills',
    details: 'Entrepreneurship support, youth training, and vocational skill programs.'
  },
  {
    title: 'Women Empowerment',
    details: 'Safety programs, financial literacy, capacity building, and self-help initiatives.'
  },
  {
    title: 'Rural Development',
    details: 'Water access, basic infrastructure, community support, and hygiene initiatives.'
  },
  {
    title: 'Environment',
    details: 'Plantation drives, waste management, and sustainability initiatives.'
  },
  {
    title: 'Digital Literacy',
    details: 'Access to devices, digital training, and e-learning support.'
  },
  {
    title: 'Relief & Rehabilitation',
    details: 'Rapid response during crises, food distribution, and rehabilitation support.'
  }
];

const stats = [
  { target: 4200, label: 'Children reached' },
  { target: 2100, label: 'Women upskilled' },
  { target: 150, label: 'Partners collaborating' },
  { target: 860, label: 'Volunteers on-call' }
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <SectionHeader
            title="About Us – BE ACT Foundation"
            subtitle="The social impact arm of Bhagwati Educational and Charitable Trust — created to turn real community challenges into measurable action."
          />
          <div className="bg-white rounded-3xl p-6 shadow-card border border-act-green/10 space-y-4 text-act-green/80 leading-relaxed">
            <p>
              BE ACT Foundation exists to deliver meaningful change across multiple sectors because society’s needs are diverse and our responsibility is to respond to all of them.
            </p>
            <p>
              We operate with a proactive, solution-driven approach. When a gap is identified, we step in. When a system needs support, we strengthen it. When a community requires long-term development, we commit to building it.
            </p>
            <p>
              Every initiative is planned with strategy, executed with integrity, and evaluated for impact so that uplifted individuals, supported families, and empowered communities can become resilient and self-sufficient.
            </p>
          </div>
          <CTAButton href="/contact">Partner with us</CTAButton>
        </div>
        <div className="bg-act-green text-cream rounded-3xl p-8 shadow-card border border-act-green/10 space-y-6">
          <div className="space-y-3">
            <h3 className="font-heading text-3xl">Our Purpose</h3>
            <p className="leading-relaxed">
              To ensure that communities — regardless of geography, background, or socio-economic status — receive the support, opportunities, and resources they need to move forward with confidence.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-2xl">Our Approach</h3>
            <p className="leading-relaxed">
              Grounded in transparency, data-driven planning, and on-ground execution. We believe change must be sustainable, inclusive, and rooted in dignity. BE ACT Foundation is not ceremonial; it is a working institution dedicated to measurable progress and long-term development.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-be-yellow/70 rounded-3xl p-8 shadow-card space-y-4"
        >
          <h3 className="font-heading text-3xl text-act-green">Our Vision</h3>
          <p className="text-act-green leading-relaxed">
            To create empowered, self-reliant communities where every individual has access to opportunities, dignity, and pathways to a better future.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-card border border-act-green/10 space-y-4"
        >
          <h3 className="font-heading text-3xl text-act-green">Our Mission</h3>
          <p className="text-act-green/80 leading-relaxed">
            To identify critical gaps in society and deploy sustainable, scalable solutions that improve quality of life across education, health, livelihood, and community development.
          </p>
        </motion.div>
      </div>

      <div className="space-y-6">
        <SectionHeader title="What sets us apart" subtitle="Principles that guide every act." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-3xl p-6 shadow-card border border-act-green/10 h-full"
            >
              <h4 className="font-heading text-xl text-act-green mb-2">{item.title}</h4>
              <p className="text-act-green/80 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <SectionHeader title="Our work areas" subtitle="Where we activate solutions and long-term support." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workAreas.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-3xl p-6 shadow-card border border-act-green/10 h-full"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-heading text-xl text-act-green">{item.title}</h4>
                <div className="w-8 h-8 rounded-full bg-be-yellow flex items-center justify-center font-heading text-act-green">
                  {idx + 1}
                </div>
              </div>
              <p className="text-act-green/80 leading-relaxed">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <SectionHeader title="Progress we are proud of" subtitle="Every number represents a story of resilience." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Counter key={stat.label} target={stat.target} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
