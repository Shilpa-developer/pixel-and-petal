import React from 'react';

interface PixelPetalMarkProps {
  className?: string;
  size?: number; // Size in px
  showBg?: boolean;
}

export const PixelPetalMark: React.FC<PixelPetalMarkProps> = ({
  className = '',
  size = 48,
  showBg = true,
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center transition-transform hover:scale-105 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        <defs>
          <linearGradient id="markPetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA6C9" />
            <stop offset="100%" stopColor="#E05B88" />
          </linearGradient>

          <linearGradient id="markPixel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E05B88" />
            <stop offset="100%" stopColor="#9B59B6" />
          </linearGradient>
        </defs>

        {/* Soft Blush Background Container */}
        {showBg && (
          <rect
            x="2"
            y="2"
            width="96"
            height="96"
            rx="24"
            fill="#FAF0F4"
            stroke="#F3C2D2"
            strokeWidth="1.5"
          />
        )}

        {/* Floating Pixels (Top Left of P) */}
        <g className="animate-pixel-1">
          <rect x="27" y="19" width="8" height="8" rx="1.5" fill="url(#markPixel)" />
          <rect x="18" y="24" width="6" height="6" rx="1" fill="#FFA6C9" />
          <rect x="14" y="30" width="5" height="5" rx="1" fill="#9B59B6" opacity="0.8" />
          <rect x="21" y="37" width="9" height="9" rx="2" fill="url(#markPixel)" opacity="0.9" />
        </g>

        {/* Stylized 'P' letter */}
        <path
          d="M 36 82 C 38 82, 43 82, 48 78 C 50 76, 51 72, 51 62 L 51 22 C 51 20, 42 20, 36 21 L 36 24 L 51 24 C 62 24, 82 24, 82 43 C 82 58, 65 60, 51 60 L 51 76 C 45 81, 38 82, 36 82 Z"
          fill="#1C1B1F"
        />

        {/* Emergent Pink Petals growing from stem */}
        <g className="animate-petal-breathe">
          {/* Main Leaf/Petal */}
          <path
            d="M 51 55 C 40 40, 30 25, 48 28 C 58 35, 53 50, 51 55 Z"
            fill="url(#markPetal)"
          />
          {/* Secondary Petal */}
          <path
            d="M 51 55 C 55 42, 65 32, 65 44 C 62 52, 55 55, 51 55 Z"
            fill="#FFA6C9"
            opacity="0.9"
          />
          {/* Stem outline */}
          <path
            d="M 51 65 C 48 55, 38 42, 35 32"
            stroke="#1C1B1F"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
