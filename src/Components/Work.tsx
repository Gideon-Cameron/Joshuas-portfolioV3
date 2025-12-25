// Work.tsx
import React from "react";

const videos = [
  {
    id: 1,
    label: "Portfolio Video 1",
    headline: "Turning Viewers into Heroes",
    description:
      "Most brand films position the company as the hero. This story reframes the audience as the hero on a mission — and heroes take action.",
    url: "https://www.youtube.com/embed/_o0zXgaCt4Y",
  },
  {
    id: 2,
    label: "Portfolio Video 2",
    headline: "When Clarity Beats Cleverness",
    description:
      "Many campaigns confuse complexity for intelligence. This piece simplifies the message so the value lands instantly.",
    url: "https://www.youtube.com/embed/S-ll-twQhQg",
  },
  {
    id: 3,
    label: "Portfolio Video 3",
    headline: "Proof Over Promises",
    description:
      "Audiences don’t trust claims — they trust evidence. This video lets real results carry the narrative weight.",
    url: "https://www.youtube.com/embed/FH1vYuKWvrQ",
  },
  {
    id: 4,
    label: "Portfolio Video 4",
    headline: "The Narrative Problem",
    description:
      "Most promos make the organization the hero, leaving the audience as spectators. In 2025, spectators don’t buy tickets — heroes on a mission do.",
    url: "https://www.youtube.com/embed/uOgcMRxGfDQ",
  },
  {
    id: 5,
    label: "Portfolio Video 5",
    headline: "Emotion Before Explanation",
    description:
      "Before audiences understand features, they need to feel the stakes. This story leads with emotion, then earns attention.",
    url: "https://www.youtube.com/embed/pdVTSSsMNEo",
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-slate-950 py-24 font-manrope overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-200 md:text-4xl">
            Some of the stories I’ve helped bring to life
          </h2>
          <p className="mt-3 text-slate-400">
            Each project starts with a narrative problem — and ends with a story
            designed to move the audience to action.
          </p>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="relative">
          <div className="flex gap-10 overflow-x-auto pb-6 pr-10 scroll-smooth">
            {videos.map((video) => (
              <div
                key={video.id}
                className="min-w-[340px] flex-shrink-0 md:min-w-[400px] lg:min-w-[460px]"
              >
                {/* Video Card */}
                <div className="group relative aspect-video overflow-hidden rounded-xl border border-slate-800 bg-black shadow-lg shadow-black/30 transition-transform hover:-translate-y-1">
                  {/* Overlay */}
                  <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <p className="text-[10px] uppercase tracking-widest text-cyan-400">
                      {video.label}
                    </p>
                    <h3 className="text-sm font-semibold text-slate-100">
                      {video.headline}
                    </h3>
                    <p className="mt-1 text-xs leading-snug text-slate-300 line-clamp-4">
                      {video.description}
                    </p>
                  </div>

                  {/* Video */}
                  <iframe
                    src={video.url}
                    title={video.headline}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Work;
