import React from 'react';
import { PixelPetalLogo } from './brand/PixelPetalLogo';
import { PixelParticles } from './brand/PixelParticles';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 bg-[#FAF8F5] overflow-hidden border-b border-[#E8E2D9]">
      <PixelParticles />

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto w-full text-center my-auto relative z-10 flex flex-col items-center">
        {/* Subtle Brand Tagline Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0F4] border border-[#F3C2D2] text-[#1C1B1F] text-xs font-medium tracking-wide mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#E05B88]" />
          <span>Independent Web Design &amp; Development Studio</span>
        </div>

        {/* Hero Brand Logo Display */}
        <div className="mb-8 hover:scale-[1.01] transition-transform duration-700">
          <PixelPetalLogo size="lg" showSubline={true} />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#1C1B1F] tracking-tight leading-[1.08] max-w-4xl mb-6">
          Websites with a little <br className="hidden sm:inline" />
          <span className="italic font-light text-[#E05B88] relative inline-block">
            more personality.
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#F3C2D2] -z-10"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9C50 3 150 2 297 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#1C1B1F]/70 font-normal max-w-2xl leading-relaxed mb-10">
          Thoughtfully designed websites for people and brands that deserve to be remembered. Built with love by Shilpa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1C1B1F] text-[#FAF8F5] font-semibold text-sm tracking-wide hover:bg-[#2E2C33] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <span>Explore the work</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFA6C9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FAF0F4] border border-[#F3C2D2] text-[#1C1B1F] font-semibold text-sm tracking-wide hover:bg-[#F7E2EB] hover:border-[#E05B88] transition-all duration-300 group"
          >
            <span>Start a project</span>
            <span className="w-2 h-2 rounded-full bg-[#E05B88] group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </div>

      {/* Hero Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#1C1B1F]/60 gap-4 border-t border-[#E8E2D9]/60 relative z-10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for select client projects &amp; collaborations</span>
        </div>

        <a
          href="#concept"
          className="inline-flex items-center gap-2 text-[#1C1B1F]/70 hover:text-[#1C1B1F] transition-colors group"
        >
          <span>Scroll to discover</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-[#E05B88]" />
        </a>
      </div>
    </section>
  );
};
