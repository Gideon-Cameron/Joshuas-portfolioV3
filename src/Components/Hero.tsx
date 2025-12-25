import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center px-6 py-32 font-manrope bg-slate-950 overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Main headline */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl md:text-6xl">
          I turn your ideas into{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            cinematic videos
          </span>
        </h1>

        {/* Supporting text */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          Helping brands hook their audience, build trust, and drive real
          results through high-impact video content.
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-9 py-4 text-lg font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:from-cyan-400 hover:to-teal-400 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Get in Touch
            <svg
              className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </a>

          {/* Secondary CTA */}
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-9 py-4 text-lg font-medium text-slate-300 transition-all duration-200 hover:border-slate-500 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
