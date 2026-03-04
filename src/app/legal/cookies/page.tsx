import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Yupzee uses cookies and similar tracking technologies.",
};

const cookieTypes = [
  {
    name: "Strictly necessary cookies",
    required: true,
    desc: "These cookies are essential for the website to function. They enable core features such as security, authentication, and session management. These cannot be disabled.",
    examples: "Session token, CSRF protection, login state",
  },
  {
    name: "Analytics cookies",
    required: false,
    desc: "These cookies help us understand how visitors interact with our website by collecting anonymous usage data. We use this to improve the site and app experience.",
    examples: "Page views, session duration, navigation paths",
  },
  {
    name: "Functional cookies",
    required: false,
    desc: "These cookies enable enhanced functionality and personalisation, such as remembering your preferences (e.g. language, region) and your cookie consent choice.",
    examples: "Cookie consent preference, interface settings",
  },
  {
    name: "Marketing cookies",
    required: false,
    desc: "These cookies may be set by our advertising partners to build a profile of your interests and serve relevant ads. We do not currently use marketing cookies on the Yupzee website.",
    examples: "Currently not used",
  },
];

export default function CookiesPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
            Legal
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Cookie Policy
          </h1>
          <p className="text-gray-500 text-sm">Last updated: 1 March 2026</p>
        </div>

        <div className="text-gray-600 leading-relaxed space-y-6 text-base mb-12">
          <p>
            This Cookie Policy explains how Yupzee Ltd ("Yupzee", "we", "us")
            uses cookies and similar tracking technologies on our website and
            app. It should be read alongside our{" "}
            <Link
              href="/legal/privacy"
              className="text-primary underline hover:text-primary-dark"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <p>
            Cookies are small text files stored on your device by your browser
            when you visit a website. They help websites work properly, remember
            your preferences, and provide information about how the site is used.
          </p>
        </div>

        {/* Cookie types table */}
        <div className="space-y-6 mb-12">
          {cookieTypes.map((type) => (
            <div
              key={type.name}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <div
                className={`flex items-center justify-between px-6 py-4 ${
                  type.required ? "bg-primary-light" : "bg-gray-50"
                }`}
              >
                <h2 className="font-semibold text-gray-900">{type.name}</h2>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    type.required
                      ? "bg-primary-light text-primary-dark"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {type.required ? "Always on" : "Optional"}
                </span>
              </div>
              <div className="px-6 py-5 space-y-3">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {type.desc}
                </p>
                <p className="text-gray-400 text-xs">
                  <strong className="text-gray-500 font-medium">
                    Examples:
                  </strong>{" "}
                  {type.examples}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Managing cookies */}
        <div className="space-y-6 text-gray-600 text-base leading-relaxed">
          <h2 className="text-xl font-semibold text-gray-900">
            Managing your cookie preferences
          </h2>
          <p>
            When you first visit our website, you will be shown a cookie banner
            where you can accept or decline optional cookies. You can change your
            preferences at any time by clearing your browser cookies and
            revisiting the site.
          </p>
          <p>
            You can also control cookies through your browser settings. Most
            browsers allow you to block or delete cookies. However, blocking
            strictly necessary cookies may prevent the site from functioning
            correctly.
          </p>
          <p>
            For more information about managing cookies, visit{" "}
            <a
              href="https://www.aboutcookies.org"
              className="text-primary underline hover:text-primary-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              aboutcookies.org
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">
            Changes to this policy
          </h2>
          <p>
            We may update this Cookie Policy from time to time. Changes will be
            posted on this page with an updated date.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 pt-4">
            Contact us
          </h2>
          <p>
            For any questions about our use of cookies, contact us at{" "}
            <a
              href="mailto:hello@yupzee.com"
              className="text-primary underline hover:text-primary-dark"
            >
              hello@yupzee.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
