import React from "react";
import Serv1 from "../assets/Serv1.jpg";
import Serv2 from "../assets/Serv2.jpg";
import Serv3 from "../assets/Serv3.jpg";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-slate-950 py-28 font-manrope"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          {/* <p className="text-sm font-medium uppercase tracking-wide text-cyan-400">
            Services
          </p> */}
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-200 sm:text-4xl">
            How I help founders win
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Strategic narrative systems designed to eliminate leaks, build
            authority, and convert attention into revenue.
          </p>
        </div>

        {/* Service rows */}
        <div className="space-y-8">
          {/* Service 1 */}
          <div className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-cyan-500/10 md:grid-cols-2">
            {/* Image */}
            <div className="flex items-center justify-center p-6">
              <img
                src={Serv1}
                alt="The Narrative Blueprint"
                className="max-h-[320px] w-full object-contain opacity-90 transition-opacity group-hover:opacity-100"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-semibold text-slate-200">
                The Narrative Blueprint
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                A high-impact, one-time foundation for founders ready to fix the
                “Invisibility Leak” and establish undeniable brand authority.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>• Complete visual identity (logo, type, color)</li>
                <li>• Full Hero narrative: Hero, Villain, Solution</li>
                <li>• Cinematic brand film to launch the movement</li>
              </ul>

              <p className="mt-4 text-sm font-medium text-slate-300">
                Goal: Stop being invisible. Start selling a transformation.
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-medium text-slate-950 shadow-md shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-teal-400 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Get Started
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
            </div>
          </div>

          {/* Service 2 */}
          <div className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-cyan-500/10 md:grid-cols-2">
            <div className="flex items-center justify-center p-6">
              <img
                src={Serv2}
                alt="The Founder’s Authority Bundle"
                className="max-h-[320px] w-full object-contain opacity-90 transition-opacity group-hover:opacity-100"
              />
            </div>

            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-semibold text-slate-200">
                The Founder’s Authority Bundle
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Your outsourced Narrative Department — a monthly partnership so
                you stay in your zone of genius while I handle strategy and execution.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>• Weekly 1-on-1 strategic roadmap sessions</li>
                <li>• Customer journey audits & leak prevention</li>
                <li>• 3–4 ghostwritten authority posts per week</li>
              </ul>

              <p className="mt-4 text-sm font-medium text-slate-300">
                Investment: $1,500 / month
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-medium text-slate-950 shadow-md shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-teal-400 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Get Started
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
            </div>
          </div>

          {/* Service 3 */}
          <div className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-cyan-500/10 md:grid-cols-2">
            <div className="flex items-center justify-center p-6">
              <img
                src={Serv3}
                alt="The Leak Audit"
                className="max-h-[320px] w-full object-contain opacity-90 transition-opacity group-hover:opacity-100"
              />
            </div>

            <div className="flex flex-col justify-center p-8">
              <h3 className="text-2xl font-semibold text-slate-200">
                The Leak Audit
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                A fast, low-friction deep dive to uncover exactly where you’re
                losing money — and how to fix it.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li>• 60-minute end-to-end journey audit</li>
                <li>• Revenue leak diagnosis (Google → payment)</li>
                <li>• Custom Patch Report with next steps</li>
              </ul>

              <p className="mt-4 text-sm font-medium text-slate-300">
                Investment: $450 (one-time)
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-medium text-slate-950 shadow-md shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-teal-400 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Get Started
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
