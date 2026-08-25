import React, { useState } from 'react';
import { Sparkles, GraduationCap, Code, Compass, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import shilpaPhoto from './images/Shilpa-Portfolio Black.jpg';
export const FounderSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(true);

  // Focus points list
  const focusPoints = [
    'Web development with modern React & TypeScript',
    'Thoughtful UI/UX design & editorial layouts',
    'Building real-world client & personal projects',
    'Continuous learning of modern web standards',
    'Handcrafting websites for independent creators & small businesses',
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white border-b border-[#E8E2D9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E05B88] mb-3 block">
            02 — Founder &amp; Developer
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#1C1B1F] tracking-tight">
            Meet the person behind the pixels.
          </h2>
        </div>

        {/* Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Shilpa's Photograph Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Frame Accent */}
              <div className="absolute -inset-4 rounded-3xl bg-[#FAF0F4] border border-[#F3C2D2] -rotate-2 -z-10" />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#1C1B1F] border border-[#1C1B1F] shadow-xl group">
                <img
                  src={shilpaPhoto}
                  alt="Shilpa — Founder & Web Developer of Pixel & Petal"
                  className="w-full h-[480px] object-cover object-center filter grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  onError={() => setImageLoaded(false)}
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1C1B1F]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-editorial text-xl font-normal text-white">
                      Shilpa
                    </h3>
                    <p className="text-xs text-[#FFA6C9] font-medium tracking-wide">
                      Founder &amp; Web Developer
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#E05B88] flex items-center justify-center text-white text-xs font-bold">
                    19
                  </div>
                </div>
              </div>

              {/* Personal Badge Tag */}
              <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF0F4] border border-[#F3C2D2] text-xs font-medium text-[#1C1B1F] w-fit">
                <GraduationCap className="w-4 h-4 text-[#E05B88]" />
                <span>B.Tech IT Student @ Anna University Affiliated</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] text-xs font-medium text-[#1C1B1F]">
              <Sparkles className="w-3.5 h-3.5 text-[#E05B88]" />
              <span>Young • Creative • Capable • Approachable</span>
            </div>

            <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#1C1B1F] leading-snug">
              Hi, I’m Shilpa. <br />
              <span className="italic font-light text-[#1C1B1F]/70">
                Building digital experiences with purpose and curiosity.
              </span>
            </h3>

            <p className="text-base text-[#1C1B1F]/80 leading-relaxed">
              I am a 19-year-old B.Tech Information Technology student based in Ambattur, Chennai. Pixel &amp; Petal is my independent web design and development brand — built on the belief that websites shouldn’t feel like mass-produced templates.
            </p>

            <p className="text-sm text-[#1C1B1F]/70 leading-relaxed">
              Instead of operating as a large corporate agency, Pixel &amp; Petal is founder-led. You work directly with me from the first spark of an idea to final deployment. I combine technical problem-solving with artistic layout, paying close attention to visual hierarchy, performance, and responsive details.
            </p>

            {/* Current Focus List */}
            <div className="pt-4 border-t border-[#E8E2D9]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1C1B1F]/50 mb-4">
                What I focus on every day:
              </h4>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs font-medium text-[#1C1B1F]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#E05B88] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal Statement Quote Block */}
            <div className="p-6 rounded-xl bg-[#FAF0F4] border-l-4 border-[#E05B88] text-[#1C1B1F]">
              <p className="font-serif-editorial text-xl italic font-normal text-[#1C1B1F] mb-1">
                “Currently learning. Constantly building. Always curious.”
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E05B88]">
                — Shilpa’s Personal Motto
              </p>
            </div>

            {/* Links */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-semibold text-[#1C1B1F]">
              <a
                href="https://shilpa12hub.github.io/Portfolio-Website/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#E05B88] transition-colors"
              >
                <span>View Original Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E05B88]" />
              </a>

              <a
                href="https://github.com/shilpa12hub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#E05B88] transition-colors"
              >
                <span>GitHub @shilpa12hub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E05B88]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
