import React from 'react';
import { Sparkles, Code2, Heart } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="concept" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-[#E8E2D9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E05B88] mb-3 block">
              01 — Brand Philosophy
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#1C1B1F] tracking-tight">
              Where pixels meet petals.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#1C1B1F]/70 max-w-md leading-relaxed">
            Pixel &amp; Petal exists at the quiet intersection of technical rigor and expressive creative design.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Pixel Card */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-2xl border border-[#E8E2D9] shadow-xs relative group hover:border-[#E05B88]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#FAF0F4] flex items-center justify-center text-[#1C1B1F] mb-6">
              <Code2 className="w-6 h-6 text-[#E05B88]" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C1B1F] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Pixel</span>
            </div>

            <h3 className="font-serif-editorial text-2xl font-normal text-[#1C1B1F] mb-3">
              Precision &amp; Technical Structure
            </h3>

            <p className="text-sm text-[#1C1B1F]/70 leading-relaxed mb-6">
              Pixel represents technology, digital architecture, responsive code, performance optimization, and mathematical precision in modern web development.
            </p>

            <ul className="space-y-2 text-xs font-medium text-[#1C1B1F]/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-xs bg-[#1C1B1F]" />
                <span>Clean TypeScript &amp; React Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-xs bg-[#1C1B1F]" />
                <span>Fluid Responsive Layouts &amp; Speed</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-xs bg-[#1C1B1F]" />
                <span>Semantic &amp; Accessible Structure</span>
              </li>
            </ul>

            {/* Decorative Floating Pixels in Card */}
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <div className="w-3 h-3 bg-[#1C1B1F] rounded-xs mb-1" />
              <div className="w-2 h-2 bg-[#E05B88] rounded-xs translate-x-2" />
            </div>
          </div>

          {/* Middle Column: Intersection Emblem */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#FAF0F4] border border-[#F3C2D2] flex items-center justify-center relative my-4 shadow-xs">
              <Sparkles className="w-7 h-7 text-[#E05B88] animate-pulse" />
            </div>
            <span className="font-serif-editorial text-lg italic text-[#1C1B1F]/60">
              the craft
            </span>
          </div>

          {/* Right Column: Petal Card */}
          <div className="lg:col-span-5 bg-[#FAF0F4] p-8 sm:p-10 rounded-2xl border border-[#F3C2D2] shadow-xs relative group hover:border-[#E05B88] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#E05B88] mb-6">
              <Heart className="w-6 h-6 text-[#E05B88]" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E05B88] text-white text-xs font-semibold uppercase tracking-wider mb-4">
              <span>Petal</span>
            </div>

            <h3 className="font-serif-editorial text-2xl font-normal text-[#1C1B1F] mb-3">
              Beauty &amp; Human Character
            </h3>

            <p className="text-sm text-[#1C1B1F]/70 leading-relaxed mb-6">
              Petal represents human creativity, visual personality, organic warmth, storytelling typography, and human-centered design that leaves a lasting impression.
            </p>

            <ul className="space-y-2 text-xs font-medium text-[#1C1B1F]/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E05B88]" />
                <span>Editorial Typography &amp; Harmony</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E05B88]" />
                <span>Warm Color Stories &amp; Negative Space</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E05B88]" />
                <span>Distinctive Identity &amp; Emotion</span>
              </li>
            </ul>

            {/* Decorative Petal Contour in Card */}
            <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-60 transition-opacity">
              <div className="w-6 h-9 rounded-full bg-gradient-to-tr from-[#EE82AA] to-[#C38BDC] rotate-45" />
            </div>
          </div>
        </div>

        {/* Bottom Statement Banner */}
        <div className="mt-16 bg-white border border-[#E8E2D9] rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xs">
          <p className="font-serif-editorial text-2xl sm:text-3xl font-light text-[#1C1B1F] leading-snug">
            “Most websites are built either with pure technical code or pure aesthetic art. <br className="hidden md:inline" />
            <span className="italic font-normal text-[#E05B88]">Pixel &amp; Petal brings both together.”</span>
          </p>
        </div>
      </div>
    </section>
  );
};
