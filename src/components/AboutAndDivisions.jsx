import React from 'react';
import { GraduationCap, BrainCircuit, Code2, Megaphone, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }) => (
  <div className="mx-auto mb-10 max-w-3xl text-center">
    <h2 className="text-3xl font-semibold text-[#0A1128] md:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mt-3 text-[#0A1128]/70">{subtitle}</p>
    )}
  </div>
);

const AboutAndDivisions = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          title="About Sravashrani Groups"
          subtitle="A values-driven parent company uniting technology, AI, web development, digital marketing, and education platforms."
        />

        <div className="grid gap-6 rounded-2xl border border-[#D9D9D9] bg-white p-8 shadow-sm md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-[#0A1128]">Vision</h3>
            <p className="mt-2 text-[#0A1128]/70">
              To build a timeless global brand known for technological excellence and ethical leadership.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A1128]">Values</h3>
            <p className="mt-2 italic text-[#0A1128]/70">
              Integrity, Innovation, Knowledge, and Growth — the compass guiding every decision.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#0A1128]">Philosophy</h3>
            <p className="mt-2 text-[#0A1128]/70">
              We blend heritage with modern design, creating products that are elegant, reliable, and human-centered.
            </p>
          </div>
        </div>

        <div id="divisions" className="mt-20">
          <SectionHeader
            title="Our Divisions"
            subtitle="Exploring knowledge, building products, and inventing the future."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <motion.a
              whileHover={{ y: -4 }}
              href="#"
              className="group block rounded-2xl border border-[#D9D9D9] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A1128] text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1128]">Sravashrani Academy</h3>
                  <p className="text-sm text-[#0A1128]/60">Learning platforms, LMS, certifications</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#0A1128]/70">
                World-class learning experiences powered by modern pedagogy and technology.
              </p>
            </motion.a>

            <motion.a
              whileHover={{ y: -4 }}
              href="#"
              className="group block rounded-2xl border border-[#D9D9D9] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A1128] text-white">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1128]">Sravashrani Solutions</h3>
                  <p className="text-sm text-[#0A1128]/60">Web, AI, and Digital Marketing</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#0A1128]/70">
                From strategy to execution — scalable platforms, intelligent automation, and brand growth.
              </p>
              <div className="mt-3 flex gap-2 text-xs text-[#0A1128]/60">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#D9D9D9]/40 px-2 py-1"><Code2 className="h-3 w-3"/>Web</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#D9D9D9]/40 px-2 py-1"><BrainCircuit className="h-3 w-3"/>AI</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#D9D9D9]/40 px-2 py-1"><Megaphone className="h-3 w-3"/>Marketing</span>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ y: -4 }}
              href="#"
              className="group block rounded-2xl border border-[#D9D9D9] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A1128] text-white">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1128]">Sravashrani Labs</h3>
                  <p className="text-sm text-[#0A1128]/60">Innovation & R&D</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#0A1128]/70">
                Exploring frontier tech with rapid prototyping, research partnerships, and open innovation.
              </p>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAndDivisions;
