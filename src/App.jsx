import React from 'react';
import Hero from './components/Hero';
import AboutAndDivisions from './components/AboutAndDivisions';
import ShowcaseAndValues from './components/ShowcaseAndValues';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-[#D9D9D9]/80 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#0A1128]" />
            <span className="text-sm font-semibold tracking-wide text-[#0A1128]">Sravashrani Groups</span>
          </div>
          <nav className="hidden gap-6 text-sm text-[#0A1128]/80 md:flex">
            <a href="#about" className="hover:text-[#0A1128]">About</a>
            <a href="#divisions" className="hover:text-[#0A1128]">Divisions</a>
            <a href="#contact" className="hover:text-[#0A1128]">Contact</a>
          </nav>
          <a
            href="#divisions"
            className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-[#0A1128] md:inline-block"
            style={{ background: 'linear-gradient(135deg, #F5C842 0%, #ffd970 100%)' }}
          >
            Explore
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <AboutAndDivisions />
        <ShowcaseAndValues />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
