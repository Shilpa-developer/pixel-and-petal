import React, { useState } from 'react';
import { SERVICES } from '../data';
import { ArrowUpRight, Check, Plus, Minus } from 'lucide-react';

interface WhatICreateProps {
  onOpenContact: () => void;
}

export const WhatICreate: React.FC<WhatICreateProps> = ({ onOpenContact }) => {
  const [activeItem, setActiveItem] = useState<string>('01');

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white border-b border-[#E8E2D9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E05B88] mb-3 block">
              04 — Offerings &amp; Specialties
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#1C1B1F] tracking-tight">
              Things I build.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#1C1B1F]/70 max-w-md leading-relaxed">
            Every project is custom-crafted to reflect your voice, function seamlessly on every device, and perform with speed.
          </p>
        </div>

        {/* Large Editorial Numbered Expandable List */}
        <div className="space-y-4">
          {SERVICES.map((service) => {
            const isOpen = activeItem === service.number;

            return (
              <div
                key={service.number}
                className={`border-b border-[#E8E2D9] pb-6 pt-6 transition-all duration-300 ${
                  isOpen ? 'bg-[#FAF0F4]/40 px-6 sm:px-8 rounded-2xl border-transparent' : 'hover:bg-[#FAF8F5]/60 px-4 rounded-xl'
                }`}
              >
                <button
                  onClick={() => setActiveItem(isOpen ? '' : service.number)}
                  className="w-full text-left flex items-start sm:items-center justify-between gap-6 focus:outline-hidden group"
                >
                  <div className="flex items-start sm:items-center gap-6 md:gap-12">
                    <span className="font-serif-editorial text-2xl sm:text-3xl text-[#E05B88] font-light">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl font-normal text-[#1C1B1F] group-hover:text-[#E05B88] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#1C1B1F]/60 mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-[#E8E2D9] group-hover:border-[#E05B88] flex items-center justify-center shrink-0 text-[#1C1B1F] group-hover:text-[#E05B88] transition-colors">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="mt-8 pt-6 border-t border-[#F3C2D2]/60 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-sm sm:text-base text-[#1C1B1F]/80 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1B1F]/50 block mb-3">
                          Key Deliverables:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#1C1B1F]">
                              <div className="w-4 h-4 rounded-full bg-[#E05B88] text-white flex items-center justify-center text-[10px]">
                                <Check className="w-3 h-3" />
                              </div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-between items-start lg:items-end bg-white p-6 rounded-xl border border-[#E8E2D9]">
                      <div className="text-xs text-[#1C1B1F]/60 mb-4">
                        Ready to start your {service.title.toLowerCase()}?
                      </div>

                      <button
                        onClick={onOpenContact}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1B1F] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2E2C33] transition-colors group"
                      >
                        <span>Discuss this project</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#FFA6C9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
