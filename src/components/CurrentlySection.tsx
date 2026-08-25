import React from 'react';
import { BookOpen, Terminal, Sparkles, Code } from 'lucide-react';

export const CurrentlySection: React.FC = () => {
  const techPills = [
    'Web Development',
    'UI / UX Design',
    'JavaScript (ES6+)',
    'React 19 & TypeScript',
    'Java & Data Structures',
    'Python',
    'Tailwind CSS',
    'Modern AI-Assisted Development',
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-[#E8E2D9] relative overflow-hidden">
      <div className="max-w-5xl mx-auto bg-white p-8 sm:p-12 md:p-16 rounded-3xl border border-[#E8E2D9] shadow-xs relative">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left Icon Badge */}
          <div className="w-16 h-16 rounded-2xl bg-[#FAF0F4] border border-[#F3C2D2] flex items-center justify-center shrink-0">
            <Terminal className="w-8 h-8 text-[#E05B88]" />
          </div>

          {/* Right Details */}
          <div className="space-y-6 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0F4] text-[#E05B88] text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Current Focus &amp; Pursuit</span>
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#1C1B1F] leading-snug">
              Currently building.
            </h2>

            <p className="text-base sm:text-lg text-[#1C1B1F]/80 leading-relaxed font-light">
              I’m currently pursuing my <strong className="font-semibold text-[#1C1B1F]">B.Tech in Information Technology</strong> while designing &amp; building websites, experimenting with modern front-end frameworks, and growing <strong className="font-semibold text-[#E05B88]">Pixel &amp; Petal</strong>.
            </p>

            {/* Technical Tool Matrix */}
            <div className="pt-4 border-t border-[#E8E2D9]">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1C1B1F]/50 block mb-4">
                Core Technologies &amp; Skillsets:
              </span>

              <div className="flex flex-wrap gap-2">
                {techPills.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] text-xs font-medium text-[#1C1B1F] hover:border-[#E05B88] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
