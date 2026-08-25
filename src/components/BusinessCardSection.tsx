import React, { useState } from 'react';
import { RotateCw } from 'lucide-react';

import cardFront from './images/business-card-front.png';
import cardBack from './images/business-card-back.png';

export const BusinessCardSection: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-[#E8E2D9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E05B88] mb-3 block">
            03 — Physical Brand Asset
          </span>

          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#1C1B1F] tracking-tight mb-4">
            A little card, for a big idea.
          </h2>

          <p className="text-sm sm:text-base text-[#1C1B1F]/70 leading-relaxed">
            A glimpse of the brand beyond the screen.
          </p>
        </div>

        {/* Business Card */}
        <div className="flex flex-col items-center justify-center">

          <div
            className="perspective-1000 w-full max-w-md h-64 sm:h-72 cursor-pointer my-4"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div
              className={`relative w-full h-full duration-700 transform-style-3d transition-transform ease-out ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >

              {/* FRONT */}
              <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden shadow-2xl">
                <img
                  src={cardFront}
                  alt="Pixel & Petal business card front"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BACK */}
              <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden rotate-y-180 shadow-2xl">
                <img
                  src={cardBack}
                  alt="Pixel & Petal business card back"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* Flip Button */}
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E8E2D9] text-xs font-semibold uppercase tracking-wider text-[#1C1B1F] hover:bg-[#FAF0F4] hover:border-[#E05B88] transition-colors shadow-sm"
          >
            <RotateCw className="w-3.5 h-3.5 text-[#E05B88]" />

            <span>
              {isFlipped ? 'Show Card Front' : 'Show Card Back'}
            </span>
          </button>

        </div>
      </div>
    </section>
  );
};