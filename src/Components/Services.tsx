import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-slate-950 py-28 font-manrope overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-cyan-400">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-200 sm:text-4xl">
            What I can help you with
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-cyan-500/10">
            <img
              src={Img1}
              alt="Service One"
              className="h-48 w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
            />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-slate-200">
                Service One
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 self-start rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-md shadow-cyan-500/20 transition-all duration-200 hover:from-cyan-400 hover:to-teal-400 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Get Started
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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

          {/* Card 2 */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-cyan-500/10">
            <img
              src={Img2}
              alt="Service Two"
              className="h-48 w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
            />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-slate-200">
                Service Two
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 self-start rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-md shadow-cyan-500/20 transition-all duration-200 hover:from-cyan-400 hover:to-teal-400 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Get Started
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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

          {/* Card 3 */}
          <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-black/20 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-cyan-500/10">
            <img
              src={Img3}
              alt="Service Three"
              className="h-48 w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
            />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-slate-200">
                Service Three
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 self-start rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-md shadow-cyan-500/20 transition-all duration-200 hover:from-cyan-400 hover:to-teal-400 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Get Started
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
