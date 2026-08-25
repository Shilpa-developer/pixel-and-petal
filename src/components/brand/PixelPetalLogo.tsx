import React from 'react';

interface PixelPetalLogoProps {
  variant?: 'dark' | 'light' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubline?: boolean;
}

export const PixelPetalLogo: React.FC<PixelPetalLogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
  showSubline = true,
}) => {
  // Height and scale adjustments based on size
  const scaleMap = {
    sm: 'h-8',
    md: 'h-12 md:h-16',
    lg: 'h-20 md:h-28',
    xl: 'h-32 md:h-40',
  };

  const isLightText = variant === 'light';
  const mainTextColor = isLightText ? '#FFFFFF' : '#1C1B1F';
  const subtextColor = isLightText ? 'rgba(255, 255, 255, 0.7)' : 'rgba(28, 27, 31, 0.7)';
  const lineStrokeColor = isLightText ? 'rgba(243, 194, 210, 0.5)' : '#F3C2D2';

  return (
    <div className={`inline-flex flex-col items-center justify-center ${scaleMap[size]} ${className}`}>
      <svg
        viewBox="0 0 500 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-full drop-shadow-sm"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Left Petal Gradient */}
          <linearGradient id="petalLeft" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9E325A" />
            <stop offset="50%" stopColor="#D85C8A" />
            <stop offset="100%" stopColor="#EE82AA" />
          </linearGradient>

          {/* Center Petal Gradient */}
          <linearGradient id="petalCenter" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#EE82AA" />
            <stop offset="60%" stopColor="#FFC2D8" />
            <stop offset="100%" stopColor="#FFE5EE" />
          </linearGradient>

          {/* Right Petal Gradient */}
          <linearGradient id="petalRight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6C3A89" />
            <stop offset="50%" stopColor="#9B59B6" />
            <stop offset="100%" stopColor="#C38BDC" />
          </linearGradient>

          {/* Floating Pixel Gradient */}
          <linearGradient id="pixelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EE82AA" />
            <stop offset="100%" stopColor="#9B59B6" />
          </linearGradient>
        </defs>

        {/* --- PETALS --- */}
        <g className="animate-petal-breathe origin-bottom" style={{ transformOrigin: '250px 115px' }}>
          {/* Left Petal */}
          <path
            d="M 250 115 C 210 110, 160 90, 155 60 C 185 30, 230 70, 250 115 Z"
            fill="url(#petalLeft)"
          />
          {/* Left Petal Inner Highlight */}
          <path
            d="M 250 115 C 220 100, 185 75, 180 58 C 198 42, 225 72, 250 115 Z"
            fill="#FFFFFF"
            fillOpacity="0.15"
          />

          {/* Center Petal */}
          <path
            d="M 250 115 C 220 70, 210 20, 250 10 C 290 20, 280 70, 250 115 Z"
            fill="url(#petalCenter)"
          />
          {/* Center Petal Rib */}
          <path
            d="M 250 115 Q 250 50 250 10"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />

          {/* Right Petal */}
          <path
            d="M 250 115 C 270 70, 315 30, 345 60 C 340 90, 290 110, 250 115 Z"
            fill="url(#petalRight)"
          />
          {/* Right Petal Highlight */}
          <path
            d="M 250 115 C 275 80, 310 48, 325 58 C 322 75, 288 100, 250 115 Z"
            fill="#FFFFFF"
            fillOpacity="0.12"
          />
        </g>

        {/* --- FLOATING PIXELS (Top Right of Flower) --- */}
        <g className="animate-pixel-1">
          <rect x="330" y="32" width="14" height="14" rx="2" fill="url(#pixelGrad)" />
          <rect x="350" y="16" width="10" height="10" rx="1.5" fill="#EE82AA" opacity="0.9" />
          <rect x="318" y="12" width="8" height="8" rx="1" fill="#FFC2D8" opacity="0.85" />
        </g>
        <g className="animate-pixel-2">
          <rect x="348" y="44" width="18" height="18" rx="3" fill="#9B59B6" opacity="0.85" />
          <rect x="320" y="48" width="9" height="9" rx="1.5" fill="#D85C8A" opacity="0.9" />
        </g>

        {/* --- BRAND NAME: PIXEL & PETAL --- */}
        <g transform="translate(250, 168)" textAnchor="middle">
          {/* PIXEL */}
          <text
            x="-72"
            y="0"
            fill={mainTextColor}
            fontSize="28"
            fontWeight="400"
            letterSpacing="6"
            fontFamily="'Plus Jakarta Sans', sans-serif"
          >
            PIXEL
          </text>

          {/* & */}
          <text
            x="0"
            y="2"
            fill="#EE82AA"
            fontSize="32"
            fontStyle="italic"
            fontWeight="300"
            fontFamily="'Cormorant Garamond', Georgia, serif"
          >
            &amp;
          </text>

          {/* PETAL */}
          <text
            x="76"
            y="0"
            fill={mainTextColor}
            fontSize="28"
            fontWeight="400"
            letterSpacing="6"
            fontFamily="'Plus Jakarta Sans', sans-serif"
          >
            PETAL
          </text>
        </g>

        {/* --- SUBLINE: WEB DESIGN & DEVELOPMENT --- */}
        {showSubline && (
          <g transform="translate(0, 198)">
            {/* Left side line */}
            <line x1="50" y1="0" x2="145" y2="0" stroke={lineStrokeColor} strokeWidth="1" />

            {/* Subline Text */}
            <text
              x="250"
              y="4"
              textAnchor="middle"
              fill={subtextColor}
              fontSize="10.5"
              fontWeight="500"
              letterSpacing="5"
              fontFamily="'Plus Jakarta Sans', sans-serif"
            >
              WEB DESIGN &amp; DEVELOPMENT
            </text>

            {/* Right side line */}
            <line x1="355" y1="0" x2="450" y2="0" stroke={lineStrokeColor} strokeWidth="1" />
          </g>
        )}
      </svg>
    </div>
  );
};
