"use client";

import { BentoSection } from "@/components/custom/bento-section";
import { FeaturesSectionDemo } from "@/components/custom/feature-section";
import { HeroBackground } from "@/components/custom/hero-background";
import { HeroScrollDemo } from "@/components/custom/hero-scroll";
import React from "react";
import FAQ from "@/components/custom/faq";

export default function page() {
  return (
    <div className="">
      <HeroBackground />
      <HeroScrollDemo />
      <div className="py-6">
        <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white text-3xl md:text-5xl md:leading-tight">
          Got An Idea? Let's Build It Together
        </h2>
        <h2 className="text-sm md:text-base max-w-4xl my-4 mx-auto text-gray-800 font-normal dark:text-gray-100 text-center">
          From AI-driven analytics to IoT-powered smart devices and <br />{" "}
          cutting-edge web applications, we develop solutions that shape the
          future.
        </h2>
      </div>
      <BentoSection />
      {/* <FlipWord /> */}
      <FeaturesSectionDemo />
      <div id="faq">
        <FAQ />
      </div>
    </div>
  );
}
