import WaitlistForm from "@/components/WaitlistForm";

const GRID_STYLE = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
};

function FeatureIcon({ path }: { path: string }) {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

function Check({ color }: { color: string }) {
  return (
    <svg
      className={`w-4 h-4 mt-0.5 shrink-0 ${color}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  const features = [
    {
      title: "Campus Feed",
      desc: "Real-time posts from friends, societies, and your university — all in one scroll.",
      icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2",
      iconBg: "bg-primary-light text-primary",
    },
    {
      title: "Events",
      desc: "Browse events, RSVP with one tap, get reminders. Never miss what matters.",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      iconBg: "bg-teal-light text-teal",
    },
    {
      title: "Follow & Connect",
      desc: "Find your people on campus. Follow friends, societies, and departments.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
      iconBg: "bg-accent-light text-accent-dark",
    },
    {
      title: "Announcements",
      desc: "Official updates that actually reach you — not buried in your inbox.",
      icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
      iconBg: "bg-teal-light text-teal",
    },
    {
      title: "Societies & Clubs",
      desc: "Join SU-approved societies. Member-only events, posts, and updates in one place.",
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      iconBg: "bg-teal-light text-teal",
    },
    {
      title: "Student Union",
      desc: "The official university voice. SU events reach the whole campus. Societies vetted before going live.",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      iconBg: "bg-primary-light text-primary",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Sign up",
      desc: "Create your account with your university email. Takes 30 seconds.",
    },
    {
      n: "02",
      title: "Connect",
      desc: "Find your friends, follow societies, join your campus community.",
    },
    {
      n: "03",
      title: "Discover",
      desc: "Events, announcements, and opportunities — all in one feed.",
    },
  ];

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-[#080f2a] text-white">
        {/* Ambient gradient orbs */}
        <div className="pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 -translate-x-1/3 w-225 h-225 rounded-full bg-primary/20 blur-[140px]" />
          <div className="absolute top-1/3 -right-32 w-150 h-150 rounded-full bg-teal/15 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-100 h-100 rounded-full bg-primary/10 blur-[80px]" />
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0" style={GRID_STYLE} aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 text-center">
          {/* Launch badge */}
          <div className="inline-flex items-center gap-2.5 border border-white/10 rounded-full px-5 py-2 text-sm mb-10 font-medium bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" aria-hidden="true" />
            <span className="text-white/70">Launching at UK universities soon</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.08] tracking-tight mb-6">
            Your university,
            <br />
            <span className="bg-linear-to-r from-sky-300 via-white to-teal-300 bg-clip-text text-transparent">
              finally connected.
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-white/50 leading-relaxed mb-10 max-w-lg mx-auto">
            Events, societies, and announcements — one campus app that actually makes sense.
          </p>

          <WaitlistForm variant="outline" className="max-w-sm mx-auto" />

          <p className="text-white/25 text-sm mt-5">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* HOW IT WORKS                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section id="how-it-works" className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Getting started
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Up and running in minutes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {steps.map((step) => (
              <div key={step.n}>
                <div
                  className="text-8xl font-black text-gray-100 leading-none select-none mb-4 tabular-nums"
                  aria-hidden="true"
                >
                  {step.n}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FEATURE HIGHLIGHTS                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              What&apos;s inside
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything student life needs
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              One app. Your entire campus experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-3xl p-8 border border-gray-100 bg-white hover:border-transparent hover:shadow-2xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 ${f.iconBg}`}
                >
                  <FeatureIcon path={f.icon} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SU + SOCIETIES ECOSYSTEM                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-primary-light text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Verified structure
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Student Union. Societies. You.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Every society on Yupzee is approved by your Student Union — so
              every club you join is real, active, and accountable.
            </p>
          </div>

          {/* Process flow */}
          <div className="relative">
            {/* Gradient connecting line — sits behind the icon nodes */}
            <div
              className="hidden md:block absolute top-8 h-0.5 bg-linear-to-r from-primary via-teal to-accent-dark opacity-20"
              style={{ left: "calc(100% / 6)", right: "calc(100% / 6)" }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

              {/* Student Union */}
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/25">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Student Union</span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">University authority</h3>
                <ul className="space-y-2.5 text-left w-full max-w-xs mx-auto">
                  <li className="flex items-start gap-2.5 text-gray-500 text-sm">
                    <svg className="w-4 h-4 shrink-0 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Approves or rejects society applications
                  </li>
                  <li className="flex items-start gap-2.5 text-gray-500 text-sm">
                    <svg className="w-4 h-4 shrink-0 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Publishes university-wide events
                  </li>
                  <li className="flex items-start gap-2.5 text-gray-500 text-sm">
                    <svg className="w-4 h-4 shrink-0 text-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Sends official announcements to all students
                  </li>
                </ul>
              </div>

              {/* Societies */}
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-teal text-white flex items-center justify-center mb-6 shadow-lg shadow-teal/25">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal mb-2">Societies</span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">SU-verified clubs</h3>
                <ul className="space-y-2.5 text-left w-full max-w-xs mx-auto">
                  <li className="flex items-start gap-2.5 text-gray-500 text-sm">
                    <svg className="w-4 h-4 shrink-0 text-teal mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Verified badge after SU approval
                  </li>
                  <li className="flex items-start gap-2.5 text-gray-500 text-sm">
                    <svg className="w-4 h-4 shrink-0 text-teal mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Host member-only and open events
                  </li>
                  <li className="flex items-start gap-2.5 text-gray-500 text-sm">
                    <svg className="w-4 h-4 shrink-0 text-teal mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Post updates to members and followers
                  </li>
                </ul>
              </div>

              {/* Students */}
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-accent-dark text-white flex items-center justify-center mb-6 shadow-lg shadow-accent/25">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent-dark mb-2">Students</span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your campus experience</h3>
                <ul className="space-y-2.5 text-left w-full max-w-xs mx-auto">
                  <li className="flex items-start gap-2.5 text-gray-500 text-sm">
                    <svg className="w-4 h-4 shrink-0 text-accent-dark mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Join and follow approved societies
                  </li>
                  <li className="flex items-start gap-2.5 text-gray-500 text-sm">
                    <svg className="w-4 h-4 shrink-0 text-accent-dark mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    See SU and society events in one feed
                  </li>
                  <li className="flex items-start gap-2.5 text-gray-500 text-sm">
                    <svg className="w-4 h-4 shrink-0 text-accent-dark mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Know which events are open vs. members-only
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA STRIP                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section id="waitlist" className="relative overflow-hidden bg-[#080f2a] py-28 text-white">
        {/* Orbs */}
        <div className="pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-100 h-100 rounded-full bg-teal/15 blur-[80px]" />
        </div>

        {/* Grid */}
        <div className="absolute inset-0" style={GRID_STYLE} aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get early access
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            We&apos;re launching soon at UK universities. Drop your email and be first in.
          </p>
          <WaitlistForm variant="outline" className="max-w-sm mx-auto" />
        </div>
      </section>
    </>
  );
}
