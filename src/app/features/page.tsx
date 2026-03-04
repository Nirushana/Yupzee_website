import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Yupzee brings your campus together Campus Feed, Events, Follow & Connect, and University Announcements in one app.",
};

const features = [
  {
    id: "feed",
    title: "Your campus, live.",
    desc: "Posts from friends, societies, departments all in one feed. Like, comment, share. No algorithm burying the good stuff.",
    bullets: [
      "Real-time posts from friends, alumni and departments",
      "Like, comment, and share campus moments",
      "University announcements delivered straight to your feed",
    ],
    iconPath:
      "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2",
    accentColor: "bg-primary-light text-primary",
  },
  {
    id: "events",
    title: "Events that actually reach you.",
    desc: "Browse by date, department, or what\u2019s popular. RSVP with one tap. Get reminders so you actually show up.",
    bullets: [
      "Browse official events by departments",
      "One-tap RSVP and calendar sync",
      "Reminders so you never forget an event",
      "Push notifications for newly published events",
    ],
    iconPath:
      "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    accentColor: "bg-teal-light text-teal",
  },
  {
    id: "follow",
    title: "Your people. Found.",
    desc: "Follow friends from your course. See what they\u2019re up to. We suggest people you probably know.",
    bullets: [
      "Follow friends and discover new connections",
      "See what your campus community is up to",
      "Connect with students across your whole campus",
    ],
    iconPath:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    accentColor: "bg-accent-light text-accent-dark",
  },
  {
    id: "announcements",
    title: "Official updates. Actually seen.",
    desc: "University announcements, department updates, not buried in your inbox.",
    bullets: [
      "Official announcements from university administration",
      "Department and faculty updates",
      "Important information and notices",
      "Push notifications for urgent communications",
    ],
    iconPath:
      "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
    accentColor: "bg-primary-light text-primary",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-[#1420a8] via-primary to-teal text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            Everything student life needs.
            <br className="hidden sm:block" /> Nothing it doesn&apos;t.
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Events, posts, announcements one app instead of ten broken systems.
          </p>
        </div>
      </section>

      {/* Feature sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-20">
        {features.map((feature) => (
          <div key={feature.id}>
            <div
              className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.accentColor} mb-6`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={feature.iconPath}
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {feature.title}
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              {feature.desc}
            </p>
            <ul className="space-y-3" aria-label="Key benefits">
              {feature.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-linear-to-br from-[#1420a8] to-teal-dark py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Want in?</h2>
          <p className="text-white/70 text-lg mb-10 max-w-lg mx-auto">
            We&apos;re launching soon at UK universities.
          </p>
          <WaitlistForm variant="outline" className="max-w-md mx-auto" />
        </div>
      </section>
    </>
  );
}
