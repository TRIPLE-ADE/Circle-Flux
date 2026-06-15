import Image from "next/image";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-[#1d2428]">
      <Navbar variant="solid" />

      <main className="pt-[116px]">
        <section className="relative min-h-[420px] md:min-h-[600px] flex items-center justify-center overflow-hidden text-white">
          <Image
            src="/images/about-bg.png"
            alt="Clean water surface"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <p className="font-overpass text-lg md:text-2xl uppercase tracking-[0.04em] mb-4">
              We Believe
            </p>
            <h1 className="font-hedvig text-5xl md:text-7xl leading-[1.05]">
              Our water should
              be 100% clean &amp; natural
            </h1>
          </div>
        </section>

        <section className="bg-[#07586a] text-white px-6 md:px-12 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative aspect-4/3 md:aspect-square">
              <Image
                src="/images/bottle.png"
                alt="CircleFlux bottled water pack"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
            <div>
              <h2 className="font-overpass text-3xl md:text-[40px] font-black mb-7">
                Circleflux Story
              </h2>
              <p className="font-source-sans text-sm md:text-base leading-relaxed text-white/85">
                CircleFlux Nigeria Limited was born out of a vision to solve one of Nigeria&apos;s most persistent challenges, access to safe, affordable drinking water. The founder recognized that despite the country&apos;s vast water resources, many communities still struggle with unreliable public water supply, forcing millions of people to depend on packaged water for daily survival.
              </p>
              <p className="font-source-sans text-sm md:text-base leading-relaxed text-white/85 mt-5">
                What began as a bottled water production initiative soon evolved into a bigger ambition. The founder saw a gap in the industry: most water companies depended heavily on imported packaging materials and limited production capacity. This created high costs and supply inefficiencies.
              </p>
              <a href="/where-to-buy" className="inline-block mt-6 text-brand-yellow font-overpass text-xs font-black uppercase">
                View more &gt;
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-overpass text-xl uppercase text-[#5d6366] mb-4">The Problem</p>
              <h2 className="font-hedvig text-4xl md:text-5xl leading-tight">
                Just because it&apos;s a packaged bottle
                <br className="hidden md:block" />
                water doesn&apos;t mean its clean
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
              <div className="relative aspect-4/5">
                <Image
                  src="/images/about-image-1.png"
                  alt="Clear bottled water"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="font-hedvig text-3xl leading-tight">Inconsistent Water Quality</h3>
                  <p className="font-source-sans text-sm md:text-base text-[#596266] leading-relaxed mt-2">
                    Many table water brands are not consistent with their water quality. This can result in variations in taste, purity, and safety, reducing consumer confidence and potentially posing health risks.
                  </p>
                </div>
                <div>
                  <h3 className="font-hedvig text-3xl leading-tight">Counterfeit and Unregulated Products</h3>
                  <p className="font-source-sans text-sm md:text-base text-[#596266] leading-relaxed mt-2">
                    Unregulated table water can expose families and businesses to unsafe production practices, uncertain sourcing, and inconsistent packaging standards.
                  </p>
                </div>
                <div>
                  <h3 className="font-hedvig text-3xl leading-tight">That is why we are here</h3>
                  <p className="font-source-sans text-sm md:text-base text-[#596266] leading-relaxed mt-2">
                    At CircleFlux, we combine premium water sourcing with advanced filtration, balanced mineralization, and hygienic packaging to deliver exceptional quality in every bottle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative min-h-[560px] md:min-h-[680px] flex items-center justify-center overflow-hidden text-white">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/hero-bg.png"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-brand-teal/45" />
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <p className="font-overpass text-lg md:text-xl uppercase tracking-[0.04em] mb-4">
              The Solution
            </p>
            <h2 className="font-hedvig text-5xl md:text-7xl leading-[1.12]">
              Pure water to help you power through your day.
            </h2>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[620px]">
          <div className="flex items-center px-8 md:px-16 py-16">
            <div className="max-w-md">
              <h2 className="font-overpass text-3xl md:text-[34px] font-normal mb-8">
                Our water is not only pure.
              </h2>
              <p className="font-overpass text-xl md:text-2xl leading-snug font-semibold">
                Circleflux premium table water is tested and approved by regulatory agencies like NAFDAC, SON etc...
              </p>
              <p className="font-overpass text-xl md:text-2xl leading-snug font-semibold mt-8">
                We are committed to delivering quality water at all times.
              </p>
            </div>
          </div>
          <div className="bg-brand-yellow relative min-h-[520px] overflow-hidden">
            <Image
              src="/images/about-image-2.png"
              alt="CircleFlux bottle"
              fill
              className="object-contain scale-125 rotate-12 translate-x-10"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </section>

        <Gallery title="CircleFlux Lovers" />
      </main>

      <Footer />
    </div>
  );
}
