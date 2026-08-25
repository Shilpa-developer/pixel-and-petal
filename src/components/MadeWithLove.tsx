import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { PixelPetalMark } from './brand/PixelPetalMark';

export const MadeWithLove: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white border-b border-[#E8E2D9] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Emblem */}
        <div className="mb-6 inline-block">
          <PixelPetalMark size={56} showBg={true} />
        </div>

        {/* Section Heading */}
        <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#1C1B1F] tracking-tight mb-6">
          Made with <span className="italic font-light text-[#E05B88]">love.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-[#1C1B1F]/80 font-serif-editorial italic font-light max-w-2xl mx-auto leading-relaxed mb-8">
          “Every project starts as an idea and becomes something real through a little curiosity, a lot of iteration and plenty of care.”
        </p>

        {/* Subtle Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF0F4] border border-[#F3C2D2] text-xs font-medium text-[#1C1B1F]">
          <Heart className="w-4 h-4 fill-[#E05B88] text-[#E05B88]" />
          <span>Handcrafted by Shilpa • Chennai, India</span>
        </div>
      </div>
    </section>
  );
};
