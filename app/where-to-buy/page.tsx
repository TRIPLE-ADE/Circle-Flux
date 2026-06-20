"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const FAQS = [
  {
    question: "What product does CircleFlux offer?",
    answer: "CircleFlux offers purified bottled table water for homes, events, retailers, and wholesale distribution.",
  },
  {
    question: "How does CircleFlux ensure water quality?",
    answer: "Every bottle goes through advanced purification, careful packaging, and regular quality checks before distribution.",
  },
  {
    question: "Where is CircleFlux located?",
    answer: "CircleFlux is located at 1, Otunba Babalola Street, Off Old Lagos/Abeokuta Road, Akinbo Village, Obafemi Owode, Ogun State.",
  },
];

const LOCATION = "1, Otunba Babalola Street, Off Old Lagos/Abeokuta Road, Akinbo Village, Obafemi Owode, Ogun State, Nigeria";
const MAP_QUERY = encodeURIComponent(LOCATION);

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CircleFlux Nigeria Limited",
  description: "Producer and distributor of premium purified bottled table water in Ogun State, Nigeria.",
  foundingDate: "2021",
  email: "circleflux@gmail.com",
  telephone: "+2348066560964",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1, Otunba Babalola Street, Off Old Lagos/Abeokuta Road, Akinbo Village",
    addressLocality: "Obafemi Owode",
    addressRegion: "Ogun State",
    addressCountry: "NG",
  },
  sameAs: [
    "https://www.instagram.com/circlefluxng",
    "https://www.facebook.com/share/1BKybNtFny/",
  ],
};

export default function WhereToBuyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-[#1d2428]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Navbar variant="solid" />

      <main className="pt-[116px]">
        <section className="bg-brand-cyan px-6 md:px-12 py-16 md:py-20 overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="font-hedvig text-5xl md:text-7xl leading-[1.04]">
                You can find us at a
                store near you
              </h1>
              <p className="font-overpass text-xl md:text-2xl leading-snug mt-5 max-w-xl">
                Use the map to locate our factory or contact us.
              </p>
            </div>
            <div className="relative min-h-[260px] md:min-h-[360px]">
              <Image
                src="/images/bottle.webp"
                alt="CircleFlux bottled water pack"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 560px"
              />
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-16 md:py-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-8">
            <div className="bg-brand-pink p-8 md:p-10">
              <h2 className="font-hedvig text-3xl mb-7">CONTACT US</h2>
              <div className="space-y-5 font-overpass">
                <div>
                  <h3 className="text-2xl font-black">Email</h3>
                  <a
                    href="mailto:circleflux@gmail.com"
                    className="inline-block text-lg font-semibold mt-2 underline decoration-brand-cyan/50 underline-offset-4 hover:text-brand-cyan transition-colors"
                  >
                    circleflux@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-2xl font-black">Phone Number</h3>
                  <a
                    href="tel:+2348066560964"
                    className="inline-block text-lg font-semibold mt-2 underline decoration-brand-cyan/50 underline-offset-4 hover:text-brand-cyan transition-colors"
                  >
                    +234 806 656 0964
                  </a>
                </div>
                <div>
                  <h3 className="text-2xl font-black">Address</h3>
                  <p className="text-lg font-semibold leading-relaxed mt-2">
                    {LOCATION}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-yellow flex items-center justify-center py-10 min-h-[360px]">
              <div className="text-center font-overpass text-black">
                <p className="text-2xl font-black mb-2">Since</p>
                <p className="text-[112px] md:text-[150px] font-black leading-[0.78]">
                  20
                </p>
                <p className="text-[132px] md:text-[170px] font-black leading-[0.78]">
                  21
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-16 md:pb-20">
          <div className="max-w-4xl mx-auto bg-brand-yellow p-5 md:p-7 rounded-2xl">
            <div className="bg-white aspect-4/3 overflow-hidden">
              <iframe
                title="CircleFlux location map"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              />
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 min-h-12 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-7 py-3 font-overpass text-sm font-black uppercase text-white shadow-[6px_6px_0_#00a5ec] transition-transform hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1"
            >
              Get directions
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-16 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-overpass text-xl uppercase mb-3">FAQ</p>
            <h2 className="font-hedvig text-4xl md:text-5xl mb-10">
              Clarity Begins Here
            </h2>

            <div className="text-left">
              {FAQS.map((faq, index) => (
                <div key={faq.question} className="border-b border-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    className="w-full bg-brand-cyan text-white font-overpass text-sm md:text-base font-black px-5 py-4 flex items-center justify-between gap-4"
                  >
                    <span>{faq.question}</span>
                    <span className="text-2xl leading-none" aria-hidden="true">{openFaq === index ? "-" : "+"}</span>
                  </button>
                  {openFaq === index ? (
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className="bg-[#eaf8fd] px-5 py-4 font-source-sans text-sm md:text-base text-[#526064] leading-relaxed"
                    >
                      {faq.answer}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Ticker />
        <Testimonials />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
