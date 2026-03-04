function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 384 512" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.37.21.8.27 1.22.15l12.48-7.18L13.62 12l-10.44 11.76zM20.54 10.3L17.4 8.5 13.9 12l3.5 3.5 3.16-1.82a1.91 1.91 0 000-3.38zM1.5.56A1.88 1.88 0 001 1.9v20.2a1.88 1.88 0 00.5 1.34L12 12 1.5.56zM4.4.09L16.88 7.27 13.62 10.5 4.4.09z" />
    </svg>
  );
}

interface Props {
  className?: string;
  variant?: "dark" | "light" | "outline";
}

export default function AppStoreBadges({ className = "", variant = "dark" }: Props) {
  const badgeClass =
    variant === "dark"
      ? "bg-black hover:bg-gray-900 border-gray-800 text-white"
      : variant === "light"
      ? "bg-white hover:bg-gray-50 border-gray-200 text-gray-900"
      : "bg-white/10 hover:bg-white/20 border-white/20 text-white";

  const subTextClass =
    variant === "dark"
      ? "text-gray-400"
      : variant === "light"
      ? "text-gray-500"
      : "text-white/60";

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href="#"
        className={`flex items-center gap-3 transition-colors rounded-xl px-4 py-3 border ${badgeClass}`}
      >
        <AppleIcon className="w-6 h-6 shrink-0" />
        <div>
          <p className={`${subTextClass} text-xs leading-none`}>
            Download on the
          </p>
          <p className="text-sm font-semibold leading-tight mt-0.5">
            App Store
          </p>
        </div>
      </a>
      <a
        href="#"
        className={`flex items-center gap-3 transition-colors rounded-xl px-4 py-3 border ${badgeClass}`}
      >
        <PlayIcon className="w-6 h-6 shrink-0" />
        <div>
          <p className={`${subTextClass} text-xs leading-none`}>Get it on</p>
          <p className="text-sm font-semibold leading-tight mt-0.5">
            Google Play
          </p>
        </div>
      </a>
    </div>
  );
}
