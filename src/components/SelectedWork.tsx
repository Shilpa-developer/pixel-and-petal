import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ArrowUpRight, ExternalLink, Sparkles, Code2, Globe } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'E-commerce', 'Personal Brand', 'Business', 'Web Application'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.subcategory === filter);

  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-[#E8E2D9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E05B88] mb-3 block">
              05 — Studio Archive
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#1C1B1F] tracking-tight">
              Things I’ve built.
            </h2>
            <p className="text-sm sm:text-base text-[#1C1B1F]/70 mt-2 max-w-lg">
              Selected work — Projects, experiments &amp; real-world builds handcrafted with technical care.
            </p>
          </div>

          {/* Subcategory Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-[#1C1B1F] text-white shadow-xs'
                    : 'bg-white border border-[#E8E2D9] text-[#1C1B1F]/70 hover:text-[#1C1B1F] hover:border-[#1C1B1F]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Studio Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => {
            // Asymmetric Layout Logic: First & Third item take full or 8-col width
            const isFeatured = index === 0 || index === 3;
            const colSpanClass = isFeatured ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4';

            return (
              <div
                key={project.id}
                className={`${colSpanClass} bg-white rounded-2xl border border-[#E8E2D9] overflow-hidden flex flex-col justify-between group hover:border-[#E05B88]/60 transition-all duration-500 hover:shadow-lg`}
              >
                {/* Visual Preview Header */}
                <div className={`relative h-64 ${isFeatured ? 'sm:h-80' : 'sm:h-60'} bg-gradient-to-br ${project.imageBg} p-8 flex flex-col justify-between overflow-hidden`}>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[#1C1B1F] text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      {project.category}
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1C1B1F] group-hover:bg-[#1C1B1F] group-hover:text-white transition-all duration-300 shadow-xs"
                      title="Open Live Website"
                    >
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Stylized Visual Mockup Card */}
                  <div className="relative my-auto z-10 transition-transform duration-500 group-hover:scale-102">
                    <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 border border-white/60 shadow-md">
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="text-[10px] font-mono text-[#1C1B1F]/40 ml-2 truncate">
                          {project.url.replace('https://', '')}
                        </span>
                      </div>
                      <h4 className="font-serif-editorial text-2xl font-normal text-[#1C1B1F] truncate">
                        {project.title}
                      </h4>
                    </div>
                  </div>

                  {/* Floating Pixel Detail Accent */}
                  <div className="absolute -bottom-4 -right-4 opacity-30 group-hover:opacity-70 transition-opacity">
                    <div className="w-8 h-8 rounded-xs" style={{ backgroundColor: project.accentColor }} />
                  </div>
                </div>

                {/* Project Description & Metadata */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
                  <div>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-[#1C1B1F] mb-2 group-hover:text-[#E05B88] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#1C1B1F]/70 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-[#FAF0F4] text-[#1C1B1F]/80 text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1C1B1F] hover:text-[#E05B88] transition-colors group/link"
                    >
                      <span>View project live</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#E05B88] group-hover/link:translate-x-0.5 transition-transform" />
                    </a>

                    <span className="text-[11px] font-mono text-[#1C1B1F]/40">
                      SHILPA BUILD
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
