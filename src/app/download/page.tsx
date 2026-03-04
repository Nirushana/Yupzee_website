import type { Metadata } from "next";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Download",
  description: "Download Yupzee on iOS and Android. Coming soon to the App Store and Google Play.",
};

// TODO: replace href "#" with real store URLs when app is published
const stores = [
  {
    name: "App Store",
    platform: "iOS",
    href: "#",
    iconBg: "bg-primary-light text-primary",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 384 512" fill="currentColor">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
    ),
  },
  {
    name: "Google Play",
    platform: "Android",
    href: "#",
    iconBg: "bg-teal-light text-teal",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.18 23.76c.37.21.8.27 1.22.15l12.48-7.18L13.62 12l-10.44 11.76zM20.54 10.3L17.4 8.5 13.9 12l3.5 3.5 3.16-1.82a1.91 1.91 0 000-3.38zM1.5.56A1.88 1.88 0 001 1.9v20.2a1.88 1.88 0 00.5 1.34L12 12 1.5.56zM4.4.09L16.88 7.27 13.62 10.5 4.4.09z" />
      </svg>
    ),
  },
];

export default function DownloadPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-[#1420a8] via-primary to-teal text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-8 font-medium">
            <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
            Launching soon
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            Download Yupzee
          </h1>
          <p className="text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
            Coming soon to iOS and Android. Join the waitlist to be first to know when we launch.
          </p>
        </div>
      </section>

      {/* Store cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {stores.map((store) => (
              <div
                key={store.name}
                className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col items-center text-center hover:border-primary-light hover:shadow-md transition-all"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${store.iconBg}`}>
                  {store.icon}
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                  {store.platform}
                </p>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {store.name}
                </h2>
                <span className="inline-flex items-center gap-1.5 bg-primary-light text-primary-dark text-xs font-semibold px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
                  Coming soon
                </span>
              </div>
            ))}
          </div>

          {/* Waitlist */}
          <div className="bg-white rounded-2xl p-10 border border-gray-100 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Get notified at launch
            </h2>
            <p className="text-gray-500 mb-8">
              Drop your email and we&apos;ll let you know the moment it&apos;s live.
            </p>
            <WaitlistForm className="max-w-md mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
}
