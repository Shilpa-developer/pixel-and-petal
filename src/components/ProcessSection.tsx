import React from 'react';
import { PROCESS_STAGES } from '../data';
import { Compass, Layout, Code2, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const icons = [Compass, Layout, Code2, Sparkles];

  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-white border-b border-[#E8E2D9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E05B88] mb-3 block">
              07 — Workflow
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#1C1B1F] tracking-tight">
              From idea to interface.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#1C1B1F]/70 max-w-md leading-relaxed">
            A clear, collaborative process designed to bring your website to life efficiently without stress.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[1.5px] bg-[#E8E2D9] -z-0" />

          {PROCESS_STAGES.map((stage, idx) => {
            const IconComponent = icons[idx] || Sparkles;

            return (
              <div
                key={stage.step}
                className="bg-[#FAF8F5] p-8 rounded-2xl border border-[#E8E2D9] relative z-10 flex flex-col justify-between group hover:border-[#E05B88] transition-all hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E2D9] flex items-center justify-center text-[#1C1B1F] group-hover:bg-[#FAF0F4] group-hover:text-[#E05B88] transition-colors shadow-2xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-serif-editorial text-3xl font-light text-[#E05B88]">
                      {stage.step}
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-2xl font-normal text-[#1C1B1F] mb-2 group-hover:text-[#E05B88] transition-colors">
                    {stage.title}
                  </h3>

                  <p className="text-sm font-medium text-[#1C1B1F] mb-3">
                    {stage.description}
                  </p>

                  <p className="text-xs text-[#1C1B1F]/70 leading-relaxed">
                    {stage.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E2D9] text-[10px] uppercase font-semibold tracking-wider text-[#1C1B1F]/50 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E05B88]" />
                  <span>STAGE {stage.step}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
