import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white" aria-label="Sravashrani Groups Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.75)_40%,rgba(255,255,255,0.55)_70%,rgba(255,255,255,0.35)_100%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#D9D9D9] bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#0A1128]" />
          <span className="text-sm font-medium tracking-wide text-[#0A1128]">Sravashrani Groups</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#0A1128] md:text-6xl">
          Building the Future,
          <span className="block italic text-[#0A1128]/80">Guided by Values</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-[#0A1128]/70 md:text-lg">
          A global home for technology, AI, web development, digital marketing, and education platforms — blending innovation with heritage.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="#divisions"
            className="group inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-[#0A1128] shadow-sm transition-transform duration-200 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #F5C842 0%, #ffd970 100%)',
            }}
          >
            Explore Our Divisions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href="#about"
            className="rounded-2xl border border-[#D9D9D9] bg-white px-6 py-3 text-sm font-semibold text-[#0A1128] shadow-sm transition-colors hover:bg-[#0A1128] hover:text-white"
          >
            Our Vision
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
