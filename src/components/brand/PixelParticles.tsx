import React from 'react';

export const PixelParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Top Left Floating Pixel Cluster */}
      <div className="absolute top-[12%] left-[5%] animate-pixel-1 opacity-40">
        <div className="w-3 h-3 bg-[#EE82AA] rounded-xs" />
        <div className="w-2 h-2 bg-[#9B59B6] rounded-xs translate-x-3 translate-y-2 opacity-70" />
      </div>

      {/* Top Right Ambient Glow & Pixel */}
      <div className="absolute top-[18%] right-[8%] animate-pixel-2 opacity-35">
        <div className="w-4 h-4 bg-[#F3C2D2] rounded-xs" />
        <div className="w-2.5 h-2.5 bg-[#C38BDC] rounded-xs -translate-x-2 translate-y-3" />
      </div>

      {/* Center Left Subtle Petal Silhouette */}
      <div className="absolute top-[48%] left-[3%] animate-organic-float opacity-20">
        <div className="w-8 h-12 bg-gradient-to-tr from-[#EE82AA] to-[#C38BDC] rounded-full blur-[1px] rotate-45" />
      </div>

      {/* Bottom Right Floating Pixel */}
      <div className="absolute bottom-[20%] right-[6%] animate-pixel-1 opacity-30">
        <div className="w-3.5 h-3.5 bg-[#9B59B6] rounded-xs" />
        <div className="w-2 h-2 bg-[#EE82AA] rounded-xs translate-x-4 -translate-y-2" />
      </div>
    </div>
  );
};
