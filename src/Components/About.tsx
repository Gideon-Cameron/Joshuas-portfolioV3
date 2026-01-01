import React from "react";
import Profile from "../assets/Profile.png";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-slate-950 py-28 font-manrope overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-5">
        {/* Left: Image */}
        <div className="md:col-span-2 flex justify-center">
          <div className="relative">
            <img
              src={Profile}
              alt="Josh profile"
              className="w-80 max-w-full rounded-2xl border border-slate-800 shadow-xl"
            />
            <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 blur-xl" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="md:col-span-3 text-slate-400">
          {/* Section label */}
          {/* <p className="text-sm font-medium uppercase tracking-wide text-cyan-400">
            About
          </p> */}

          {/* Name */}
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-200 sm:text-4xl">
            Josh
          </h2>

          {/* Intro paragraph */}
          <p className="mt-6 text-lg leading-relaxed">
            I work with brands that know they’re building something great — but
            struggle to communicate it in a way that truly connects.
          </p>

          {/* Body paragraph */}
          <p className="mt-4 text-base leading-relaxed">
            Most brands sound the same because they focus on features instead of
            meaning. I help bridge the gap between your technical brilliance and
            your audience’s emotions by combining strategic scriptwriting with
            cinematic storytelling.
          </p>

          {/* Emphasis paragraph */}
          <p className="mt-4 text-base leading-relaxed">
            By building what I call{" "}
            <span className="font-medium text-cyan-400">
              narrative infrastructure
            </span>
            , I don’t just edit videos — I design stories that earn trust,
            position authority, and turn attention into action.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
