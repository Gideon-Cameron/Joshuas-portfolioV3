import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);

    const name = String(formData.get("user_name") || "").trim();
    const email = String(formData.get("user_email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_2e9zq4f",
        "template_mq85xh3",
        form.current,
        "VSey23muaE28V71S_"
      )
      .then(
        () => {
          setMessageSent(true);
          setError(null);
          form.current?.reset();
        },
        () => {
          setError("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-slate-950 py-28 font-manrope overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-cyan-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-100 sm:text-4xl">
            Let’s work together
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Have a project in mind or want to explore an idea? Send me a message
            and I’ll get back to you shortly.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-lg backdrop-blur"
            >
              <div className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project"
                  className="w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                />

                <button
                  type="submit"
                  className="group inline-flex w-fit items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-teal-400 hover:shadow-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                >
                  Send Message
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
                </button>

                {messageSent && (
                  <p className="text-sm font-medium text-emerald-400">
                    ✅ Message sent successfully.
                  </p>
                )}
                {error && (
                  <p className="text-sm font-medium text-red-400">
                    ❌ {error}
                  </p>
                )}
              </div>
            </form>
          </div>

          {/* Socials */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Or find me on
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-slate-400 transition-colors hover:text-cyan-400"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-slate-400 transition-colors hover:text-cyan-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-slate-400 transition-colors hover:text-cyan-400"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
