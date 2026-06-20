

"use client";

import { useState } from "react";
import Modal from "./Modal";
import ViewportVideo from "./ViewportVideo";

export default function OurWater() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="our-water" className="py-16 md:py-20 px-6 md:px-12 bg-white text-[#1d2428] relative z-20">
      <h2 className="font-overpass text-3xl md:text-[34px] text-center font-black leading-tight text-[#1d2428]">
        Our Water
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mt-12">
        <div className="flex flex-col items-start">
          <p className="font-source-sans text-sm md:text-[15px] text-[#556064] leading-relaxed">
            CircleFlux Bottled Water is a trusted source of pure, refreshing, and high-quality drinking water, dedicated to supporting the health and wellbeing of individuals, families, and communities across Nigeria.
          </p>
          <p className="font-source-sans text-sm md:text-[15px] text-[#556064] mt-5 leading-relaxed">
            Carefully sourced and processed using advanced purification technology, CircleFlux provides consumers with the confidence that comes from knowing they are drinking water that meets the highest standards of safety, purity, and quality.
          </p>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="font-overpass text-xs font-black text-brand-red uppercase hover:opacity-85 transition-opacity mt-5 cursor-pointer"
          >
            View more &gt;&gt;
          </button>
        </div>

        <div className="flex justify-center md:justify-end relative">
          <div className="relative w-full max-w-[420px] aspect-video overflow-hidden rounded-lg">
            <ViewportVideo
              src="/videos/about-water-video.mp4"
              poster="/images/water-pour.webp"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Our Water">
        <p>
          CircleFlux Bottled Water is a trusted source of pure, refreshing, and high-quality drinking water, dedicated to supporting the health and wellbeing of individuals, families, and communities across Nigeria.
        </p>
        <p>
          Carefully sourced and processed using advanced purification technology, CircleFlux provides consumers with the confidence that comes from knowing they are drinking water that meets the highest standards of safety, purity, and quality. Our commitment to excellence has earned us the trust of customers who depend on us for consistent refreshment and healthy hydration every day.
        </p>
        <p>
          At CircleFlux, we believe that clean water is essential to a healthy lifestyle. That is why every bottle undergoes rigorous quality control procedures to preserve its freshness, purity, and great taste. We remain committed to delivering a premium drinking experience while upholding the values of innovation, sustainability, and customer satisfaction.
        </p>
        <p>
          With every bottle of CircleFlux Water, you can enjoy the refreshing confidence of pure hydration designed to keep you energized, refreshed, and ready for life&apos;s daily challenges.
        </p>
      </Modal>
    </section>
  );
}
