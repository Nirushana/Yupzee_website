import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Yupzee brings your campus together — Campus Feed, Events, Societies, Student Union, and University Announcements in one app.",
};

const GRID_STYLE = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
};

const features = [
  {
    id: "feed",
    title: "Your campus, live.",
    desc: "Posts from friends, societies, departments — all in one feed. No algorithm burying the good stuff.",
    bullets: [
      "Real-time posts from friends, alumni and departments",
      "Like, comment, and share campus moments",
      "University announcements delivered straight to your feed",
    ],
    iconPath:
      "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2",
    iconColor: "bg-primary-light text-primary",
    panelBg: "bg-linear-to-br from-primary to-primary-dark",
    checkColor: "text-primary",
  },
  {
    id: "events",
    title: "Events that actually reach you.",
    desc: "Browse by date, department, or what's popular. RSVP with one tap. Get reminders so you actually show up.",
    bullets: [
      "Browse official events by departments",
      "One-tap RSVP and calendar sync",
      "Reminders so you never forget an event",
      "Push notifications for newly published events",
    ],
    iconPath:
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    iconColor: "bg-teal-light text-teal",
    panelBg: "bg-linear-to-br from-teal to-teal-dark",
    checkColor: "text-teal",
  },
  {
    id: "follow",
    title: "Your people. Found.",
    desc: "Follow friends from your course. See what they're up to. We suggest people you probably know.",
    bullets: [
      "Follow friends and discover new connections",
      "See what your campus community is up to",
      "Connect with students across your whole campus",
    ],
    iconPath:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    iconColor: "bg-accent-light text-accent-dark",
    panelBg: "bg-linear-to-br from-accent-dark to-[#8a5c08]",
    checkColor: "text-accent-dark",
  },
  {
    id: "announcements",
    title: "Official updates. Actually seen.",
    desc: "University announcements, department updates — not buried in your inbox.",
    bullets: [
      "Official announcements from university administration",
      "Department and faculty updates",
      "Important information and notices",
      "Push notifications for urgent communications",
    ],
    iconPath:
      "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
    iconColor: "bg-primary-light text-primary",
    panelBg: "bg-linear-to-br from-[#1420a8] to-primary",
    checkColor: "text-primary",
  },
  {
    id: "student-union",
    title: "Student Union. In the app.",
    desc: "Your SU isn't just a building. On Yupzee it's the verified authority that keeps campus life structured, trusted, and active.",
    bullets: [
      "One SU per university — the official campus voice",
      "SU creates and publishes university-wide events visible to all students",
      "Approves or rejects society applications before they go live",
      "Sends official announcements that actually reach every student",
      "SU-verified badge displayed on all approved society profiles",
    ],
    iconPath:
      "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    iconColor: "bg-primary-light text-primary",
    panelBg: "bg-linear-to-br from-primary-dark to-[#0f1890]",
    checkColor: "text-primary",
  },
  {
    id: "societies",
    title: "Societies & Clubs. For real.",
    desc: "No more dead WhatsApp groups. Every society on Yupzee is SU-approved, has a proper profile, and can actually reach its members.",
    bullets: [
      "Societies apply and go through an SU approval workflow",
      "Approved societies display a verified badge on their profile",
      "Host member-only events or open university-wide events",
      "Post updates that reach members and followers directly",
      "Students can discover, join, and follow societies from one place",
      "Clear distinction between SU events and society events in the feed",
    ],
    iconPath:
      "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    iconColor: "bg-teal-light text-teal",
    panelBg: "bg-linear-to-br from-teal to-[#0e6b6b]",
    checkColor: "text-teal",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#080f2a] text-white py-28">
        <div className="pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-200 h-200 rounded-full bg-primary/20 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-100 h-100 rounded-full bg-teal/15 blur-[80px]" />
        </div>
        <div className="absolute inset-0" style={GRID_STYLE} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-300 mb-4">
            Product
          </p>
          <h1 className="text-5xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.08] mb-5">
            Everything student life needs.
            <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-sky-300 via-white to-teal-300 bg-clip-text text-transparent">
              Nothing it doesn&apos;t.
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Events, posts, announcements — one app instead of ten broken systems.
          </p>
        </div>
      </section>

      {/* Feature sections — alternating layout */}
      <div>
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={feature.id}
              className={`py-20 lg:py-28 ${isEven ? "bg-white" : "bg-gray-50"}`}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                  {/* Text side */}
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${feature.iconColor} mb-6`}>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d={feature.iconPath} />
                      </svg>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">
                      {feature.desc}
                    </p>
                    <ul className="space-y-3" aria-label="Key benefits">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <svg className={`w-5 h-5 mt-0.5 shrink-0 ${feature.checkColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual panel */}
                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className={`${feature.panelBg} rounded-3xl h-64 lg:h-80 flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" aria-hidden="true" />
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5" aria-hidden="true" />
                      <svg
                        className="w-28 h-28 text-white/20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={0.75}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={feature.iconPath} />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#080f2a] py-28 text-white">
        <div className="pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-primary/20 blur-[120px]" />
        </div>
        <div className="absolute inset-0" style={GRID_STYLE} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Want in?</h2>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">
            We&apos;re launching soon at UK universities.
          </p>
          <WaitlistForm variant="outline" className="max-w-sm mx-auto" />
        </div>
      </section>
    </>
  );
}
