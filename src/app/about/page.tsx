import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why we\u2019re building Yupzee \u2014 a campus social network for students who are tired of missing everything.",
};

const values = [
  {
    title: "Students first",
    desc: "Every decision starts with: does this make student life better?",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    iconBg: "bg-primary-light text-primary",
    cardAccent: "border-t-4 border-t-primary",
  },
  {
    title: "Genuinely useful",
    desc: "No dark patterns. No engagement tricks. Just useful.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    iconBg: "bg-teal-light text-teal",
    cardAccent: "border-t-4 border-t-teal",
  },
  {
    title: "Your data, your control",
    desc: "We don\u2019t sell your data. You can export or delete it anytime.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    iconBg: "bg-accent-light text-accent-dark",
    cardAccent: "border-t-4 border-t-accent",
  },
];

const milestones = [
  {
    year: "2024",
    event:
      "Started building. Frustrated with how disconnected campus life felt.",
  },
  { year: "2025", event: "App in final testing. Preparing to launch." },
  { year: "Soon", event: "First UK university pilots." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-[#1420a8] via-primary to-teal text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            University is incredible.
            <br className="hidden sm:block" /> Staying connected to it
            <br className="hidden sm:block" /> shouldn&apos;t be this hard.
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest text-primary mb-4"
            aria-hidden="true"
          >
            Why we&apos;re building this
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Campus life is fragmented. It doesn&apos;t have to be.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            Every university has events, societies, announcements,
            opportunities. And every university scatters them across emails,
            notice boards, Instagram accounts, WhatsApp groups, and websites no
            one checks.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed mb-6">
            Students miss things. They feel disconnected. First year is lonely,
            and it doesn&apos;t have to be.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            Yupzee puts it all in one place a social network built specifically
            for campus life. Events you&apos;ll actually see. Announcements that
            reach you. A community that&apos;s easy to find.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What we stand for
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className={`bg-white rounded-2xl p-8 border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 ${v.cardAccent}`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${v.iconBg}`}
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
                      d={v.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our story</h2>
          </div>
          <ol className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-4 top-2 bottom-2 w-px bg-primary-light"
              aria-hidden="true"
            />
            <div className="space-y-10">
              {milestones.map((m) => (
                <li key={m.year} className="flex gap-6 pl-12 relative">
                  <div
                    className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary border-4 border-white flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">
                      {m.year}
                    </p>
                    <p className="text-gray-700 leading-relaxed">{m.event}</p>
                  </div>
                </li>
              ))}
            </div>
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who&apos;s building this
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center max-w-xs w-full hover:shadow-md transition-shadow duration-200">
              <div
                className="w-20 h-20 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-5"
                aria-label="Nirushana, Founder"
              >
                N
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Nirushana</h3>
              <p className="text-primary text-sm font-medium mb-3">Founder</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Building Yupzee to fix what frustrated me as a student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to bring Yupzee to your university?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            We&apos;re looking for pilot partners.
          </p>
          <a
            href="mailto:partnerships@yupzee.com"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Get in touch
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
          </a>
        </div>
      </section>
    </>
  );
}
