import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lightbulb, BookOpen, TrendingUp } from 'lucide-react';

const ProjectCard = ({ title, desc, tag }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="rounded-2xl border border-[#D9D9D9] bg-white p-6 shadow-sm"
  >
    <div className="flex items-center justify-between">
      <h4 className="text-lg font-semibold text-[#0A1128]">{title}</h4>
      <span
        className="rounded-full px-3 py-1 text-xs font-medium text-[#0A1128]"
        style={{ background: 'linear-gradient(135deg, #F5C842 0%, #ffd970 100%)' }}
      >
        {tag}
      </span>
    </div>
    <p className="mt-3 text-sm text-[#0A1128]/70">{desc}</p>
  </motion.div>
);

const ValueItem = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4 rounded-2xl border border-[#D9D9D9] bg-white p-6 shadow-sm">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A1128] text-white">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h5 className="text-base font-semibold text-[#0A1128]">{title}</h5>
      <p className="mt-1 text-sm text-[#0A1128]/70">{desc}</p>
    </div>
  </div>
);

const ShowcaseAndValues = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-[#0A1128] md:text-4xl">Projects & Highlights</h2>
          <p className="mt-3 text-[#0A1128]/70">A selection of initiatives that reflect our commitment to elegance, utility, and scale.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ProjectCard title="AI Voice Assistant" desc="An enterprise-ready voice agent platform with adaptive workflows and analytics." tag="AI" />
          <ProjectCard title="Education LMS" desc="A modular learning platform with certifications, cohorts, and content analytics." tag="LMS" />
          <ProjectCard title="Digital Growth Suite" desc="Performance-centric marketing automation and web experience optimization tools." tag="Growth" />
        </div>

        <div className="mx-auto mt-20 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-[#0A1128] md:text-4xl">Our Values</h2>
          <p className="mt-3 text-[#0A1128]/70">Principles that shape our culture and every product decision.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <ValueItem icon={Shield} title="Integrity" desc="We uphold the highest standards of ethics and transparency." />
          <ValueItem icon={Lightbulb} title="Innovation" desc="We experiment thoughtfully to find elegant, scalable solutions." />
          <ValueItem icon={BookOpen} title="Knowledge" desc="We invest in continuous learning and share what we learn." />
          <ValueItem icon={TrendingUp} title="Growth" desc="We create compounding value for our partners, team, and society." />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseAndValues;
