import React from 'react';
import { APPROACH_PRINCIPLES } from '../data';

export const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-[#E8E2D9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E05B88] mb-3 block">
            06 — Studio Principles
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#1C1B1F] tracking-tight">
            I care about the little things.
          </h2>
        </div>

        {/* 4 Typography-Driven Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {APPROACH_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="bg-white p-8 rounded-2xl border border-[#E8E2D9] shadow-2xs hover:border-[#E05B88]/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                <span className="font-serif-editorial text-3xl font-light text-[#E05B88] mb-6 block">
                  {principle.number}
                </span>

                <h3 className="font-serif-editorial text-2xl font-normal text-[#1C1B1F] mb-3 group-hover:text-[#E05B88] transition-colors">
                  {principle.title}
                </h3>

                <p className="text-sm text-[#1C1B1F]/70 leading-relaxed">
                  {principle.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                <div className="w-2 h-2 rounded-full bg-[#1C1B1F] group-hover:bg-[#E05B88] transition-colors" />
                <span className="text-[10px] font-mono text-[#1C1B1F]/40 uppercase tracking-widest">
                  PRINCIPLE
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
