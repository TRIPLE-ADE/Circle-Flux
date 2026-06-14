"use client";

import { useState } from "react";

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-white text-[#1d2428] relative z-20">
      <div className="max-w-4xl mx-auto text-center">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.04em] font-overpass">
            Our Goal
          </span>
          <h2 className="font-overpass text-2xl md:text-[34px] font-black mt-5 leading-tight">
            Our Vision & Mission Statement
          </h2>
        </div>

        <div className="grid grid-cols-2 mt-12 max-w-[760px] mx-auto">
          <button
            onClick={() => setActiveTab("vision")}
            className={`py-5 text-center font-hedvig text-xl md:text-2xl uppercase transition-all duration-300 ${activeTab === "vision"
              ? "bg-brand-yellow text-[#1d2428]"
              : "bg-[#f4f1fe] text-[#1d2428] hover:bg-[#ede8fa]"
              }`}
          >
            VISION
          </button>

          <button
            onClick={() => setActiveTab("mission")}
            className={`py-5 text-center font-hedvig text-xl md:text-2xl uppercase transition-all duration-300 ${activeTab === "mission"
              ? "bg-brand-yellow text-[#1d2428]"
              : "bg-[#f4f1fe] text-[#1d2428] hover:bg-[#ede8fa]"
              }`}
          >
            MISSION
          </button>
        </div>

        <div className="mt-12 min-h-[120px] flex items-start justify-center">
          {activeTab === "vision" ? (
            <div className="animate-fade-in flex flex-col items-center">
              <p className="font-source-sans text-sm md:text-base leading-relaxed text-[#667074] max-w-xl">
                &ldquo;Our vision is to be a leading provider of premium bottled water, committed to delivering exceptional purity and quality to our customers.&rdquo;
              </p>
            </div>
          ) : (
            <div className="animate-fade-in flex flex-col items-center">
              <p className="font-source-sans text-sm md:text-base leading-relaxed text-[#667074] max-w-xl">
                &ldquo;Our mission is to refresh daily life with safe, reliable water, responsible production, and service that earns the trust of every home, shop, and event we supply.&rdquo;
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
