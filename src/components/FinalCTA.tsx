import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { PixelPetalLogo } from './brand/PixelPetalLogo';
import { PixelParticles } from './brand/PixelParticles';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section id="contact" className="py-28 px-6 md:px-12 bg-[#FAF0F4] border-b border-[#F3C2D2] relative overflow-hidden text-center">
      <PixelParticles />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        {/* Emblem */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F3C2D2] text-[#E05B88] text-xs font-semibold uppercase tracking-wider shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Let's collaborate</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl font-normal text-[#1C1B1F] tracking-tight leading-[1.05]">
          Have an idea? <br />
          <span className="italic font-light text-[#E05B88]">Let’s grow it.</span>
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-[#1C1B1F]/80 max-w-xl mx-auto leading-relaxed">
          Tell me what you’re thinking. I’ll help turn it into something people can experience.
        </p>

        {/* Big Action Button */}
        <div className="pt-4">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#1C1B1F] text-[#FAF8F5] font-semibold text-base tracking-wide hover:bg-[#2E2C33] transition-all duration-300 hover:scale-105 shadow-xl group"
          >
            <span>Start a project</span>
            <ArrowUpRight className="w-5 h-5 text-[#FFA6C9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Direct Contact Details Grid */}
        <div className="pt-12 mt-12 border-t border-[#F3C2D2]/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#1C1B1F]/80 max-w-2xl mx-auto">
          <a
            href="mailto:shilpacr780@gmail.com"
            className="flex flex-col items-center gap-1.5 p-4 rounded-xl bg-white/60 hover:bg-white transition-colors border border-white/80"
          >
            <Mail className="w-4 h-4 text-[#E05B88]" />
            <span className="font-semibold text-[#1C1B1F]">Email</span>
            <span className="truncate max-w-[180px]">shilpacr780@gmail.com</span>
          </a>

          <a
            href="tel:+917397508153"
            className="flex flex-col items-center gap-1.5 p-4 rounded-xl bg-white/60 hover:bg-white transition-colors border border-white/80"
          >
            <Phone className="w-4 h-4 text-[#E05B88]" />
            <span className="font-semibold text-[#1C1B1F]">Phone</span>
            <span>+91 7397508153</span>
          </a>

          <div className="flex flex-col items-center gap-1.5 p-4 rounded-xl bg-white/60 border border-white/80">
            <MapPin className="w-4 h-4 text-[#E05B88]" />
            <span className="font-semibold text-[#1C1B1F]">Location</span>
            <span>Ambattur, Chennai, IN</span>
          </div>
        </div>
      </div>
    </section>
  );
};
