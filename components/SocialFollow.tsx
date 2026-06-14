const ICONS = [
  {
    label: "Instagram",
    icon: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M16.8 7.2h.01" />
      </>
    ),
  },
  {
    label: "Facebook",
    icon: <path d="M14 8h-2a2 2 0 0 0-2 2v2H8v3h2v6h3v-6h2.5l.5-3h-3v-1.5c0-.8.3-1.2 1.2-1.2H16V8z" />,
  },
  {
    label: "X",
    icon: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6L6 18" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <>
        <path d="M7 10v8" />
        <path d="M7 7.2v.01" />
        <path d="M11 18v-4.4c0-2.4 4-2.6 4 0V18" />
        <path d="M11 10v8" />
      </>
    ),
  },
];

export default function SocialFollow() {

  return (
    <section className="bg-brand-pink py-11 px-6 md:px-12 text-[#1d2428]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-7">
        <h2 className="font-overpass text-2xl md:text-[32px] font-black leading-tight">
          Follow us on social media
        </h2>
        <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3">
          {ICONS.map((item) => (
            <a
              href="#"
              key={item.label}
              aria-label={item.label}
              className="w-7 h-7 rounded-full border border-[#1d2428]/60 text-[#1d2428] flex items-center justify-center hover:bg-brand-yellow transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {item.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
