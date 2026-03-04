import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

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

export default function Home() {
  const features = [
    {
      title: "Campus Feed",
      desc: "See what\u2019s happening. Real-time posts from friends, societies, and your university.",
      icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2",
      iconBg: "bg-primary-light text-primary",
      iconHover: "group-hover:bg-primary-dark group-hover:text-white",
    },
    {
      title: "Events",
      desc: "Never miss anything. Browse events, RSVP with one tap, get reminders.",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      iconBg: "bg-teal-light text-teal",
      iconHover: "group-hover:bg-teal-dark group-hover:text-white",
    },
    {
      title: "Follow & Connect",
      desc: "Your people, your campus. Follow friends and stay in the loop.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
      iconBg: "bg-accent-light text-accent-dark",
      iconHover: "group-hover:bg-accent group-hover:text-slate",
    },
    {
      title: "Announcements",
      desc: "Official updates that actually reach you. No more buried emails.",
      icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
      iconBg: "bg-teal-light text-teal",
      iconHover: "group-hover:bg-teal-dark group-hover:text-white",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "Sign up",
      desc: "Create your account with your university email. Takes 30 seconds.",
      color:
        "bg-primary-light text-primary-dark group-hover:bg-primary-dark group-hover:text-white",
    },
    {
      n: "02",
      title: "Connect",
      desc: "Find your friends, follow societies, join your campus.",
      color:
        "bg-teal-light text-teal-dark group-hover:bg-teal-dark group-hover:text-white",
    },
    {
      n: "03",
      title: "Discover",
      desc: "Events, announcements, opportunities all in one feed.",
      color:
        "bg-accent-light text-accent-dark group-hover:bg-accent group-hover:text-slate",
    },
  ];

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#1420a8] via-primary to-teal text-white">
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-48 -right-48 w-125 h-125 rounded-full bg-white/5" />
          <div className="absolute -bottom-32 -left-32 w-100 h-100 rounded-full bg-white/5" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-4 py-1.5 text-sm mb-8 font-medium">
              <span
                className="w-2 h-2 rounded-full bg-yellow-400 inline-block"
                aria-hidden="true"
              />
              <span>Launching soon</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6">
              Your university,
              <br />
              finally connected.
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-md mx-auto">
              Events, announcements, and your campus community in one app that
              actually makes sense.
            </p>

            <WaitlistForm variant="outline" className="max-w-md mx-auto" />

            <p className="text-white/50 text-sm mt-4">
              Be first to know when we launch.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* HOW IT WORKS                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="how-it-works"
        className="py-24 bg-linear-to-b from-white via-primary-light/20 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Get started in minutes. Your campus network is waiting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.n}
                className="relative text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary-light hover:shadow-md transition-all duration-200 group"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-full font-bold text-lg mb-6 transition-colors duration-200 relative z-10 ${step.color}`}
                  aria-label={`Step ${step.n}`}
                >
                  {step.n}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FEATURE HIGHLIGHTS                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need for university life
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              One app, your entire campus experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-light hover:shadow-md transition-all duration-200 group"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 transition-colors duration-200 ${f.iconBg} ${f.iconHover}`}
                >
                  <FeatureIcon path={f.icon} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4">{f.desc}</p>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA STRIP                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="waitlist"
        className="bg-linear-to-br from-[#1420a8] to-teal-dark py-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get early access
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            We&apos;re launching soon. Drop your email and be first in.
          </p>
          <WaitlistForm variant="outline" className="max-w-md mx-auto" />
        </div>
      </section>
    </>
  );
}
