"use client";

import { BentoSection } from "@/components/custom/bento-section";
import ThemeToggle from "@/components/custom/dark";
import { FeaturesSectionDemo } from "@/components/custom/feature-section";
import { FlipWord } from "@/components/custom/flip-words";
import { FooterHoverText } from "@/components/custom/footer-text";
import { HeroBackground } from "@/components/custom/hero-background";
import { HeroScrollDemo } from "@/components/custom/hero-scroll";
import { FloatingNavDemo } from "@/components/custom/nav-bar";
import React from "react";

export default function page() {
  return (
    <div className="">
      <FloatingNavDemo />
      <ThemeToggle />
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
      <FlipWord />
      <FeaturesSectionDemo />
      <FooterHoverText />

      {/* <GithubGlobe /> */}
    </div>
  );
}
