import React from 'react';
import { Mail, Linkedin, Twitter, Globe } from 'lucide-react';

const ContactFooter = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-[#0A1128] md:text-4xl">Get in Touch</h2>
          <p className="mt-3 text-[#0A1128]/70">Let's explore how we can build the future together.</p>
        </div>

        <form className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
          <input className="rounded-xl border border-[#D9D9D9] bg-white px-4 py-3 text-sm text-[#0A1128] placeholder-[#0A1128]/40 focus:outline-none focus:ring-2 focus:ring-[#F5C842] md:col-span-1" placeholder="First name" />
          <input className="rounded-xl border border-[#D9D9D9] bg-white px-4 py-3 text-sm text-[#0A1128] placeholder-[#0A1128]/40 focus:outline-none focus:ring-2 focus:ring-[#F5C842] md:col-span-1" placeholder="Last name" />
          <input type="email" className="rounded-xl border border-[#D9D9D9] bg-white px-4 py-3 text-sm text-[#0A1128] placeholder-[#0A1128]/40 focus:outline-none focus:ring-2 focus:ring-[#F5C842] md:col-span-2" placeholder="Email address" />
          <textarea rows="4" className="rounded-xl border border-[#D9D9D9] bg-white px-4 py-3 text-sm text-[#0A1128] placeholder-[#0A1128]/40 focus:outline-none focus:ring-2 focus:ring-[#F5C842] md:col-span-2" placeholder="Your message" />

          <div className="md:col-span-2">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-[#0A1128] shadow-sm"
              style={{ background: 'linear-gradient(135deg, #F5C842 0%, #ffd970 100%)' }}
            >
              Send Message
              <Mail className="h-4 w-4" />
            </button>
          </div>
        </form>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-[#0A1128]/70">
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#D9D9D9] bg-white px-4 py-2 hover:bg-[#0A1128] hover:text-white transition-colors"><Mail className="h-4 w-4"/> contact@sravashrani.com</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#D9D9D9] bg-white px-4 py-2 hover:bg-[#0A1128] hover:text-white transition-colors"><Linkedin className="h-4 w-4"/> LinkedIn</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#D9D9D9] bg-white px-4 py-2 hover:bg-[#0A1128] hover:text-white transition-colors"><Twitter className="h-4 w-4"/> Twitter</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#D9D9D9] bg-white px-4 py-2 hover:bg-[#0A1128] hover:text-white transition-colors"><Globe className="h-4 w-4"/> sravashrani.com</a>
        </div>
      </div>

      <footer className="relative overflow-hidden border-t border-[#D9D9D9] bg-white">
        {/* Faint infinity-lotus style watermark using gradients */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{
            background: 'radial-gradient(circle at center, #D9D9D9 0%, transparent 60%)'
          }} />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-8 text-center text-sm text-[#0A1128]/70">
          <p className="font-medium text-[#0A1128]">Sravashrani Groups</p>
          <p className="italic">Building the Future, Guided by Values</p>
          <p className="mt-2">© {new Date().getFullYear()} Sravashrani Groups. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default ContactFooter;
