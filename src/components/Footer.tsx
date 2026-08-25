import React from 'react';
import { PixelPetalLogo } from './brand/PixelPetalLogo';
import { ArrowUpRight, Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const currentYear = new Date().getFullYear();

  const footerNav = [
    { name: 'Work', href: '#work' },
    { name: 'About Shilpa', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <footer className="bg-[#1C1B1F] text-[#FAF8F5] pt-20 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Branding & Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Full Logo */}
          <div className="lg:col-span-6 space-y-6">
            <PixelPetalLogo size="md" variant="light" showSubline={true} />
            <p className="text-sm text-white/60 max-w-sm leading-relaxed pt-2">
              Thoughtfully designed websites for people and brands that deserve to be remembered.
            </p>
          </div>

          {/* Right: Quick Links & Contact */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-2 gap-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FFA6C9] block mb-4">
                Navigation
              </span>
              <ul className="space-y-3 text-sm text-white/70">
                {footerNav.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FFA6C9] block mb-4">
                Connect
              </span>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <a
                    href="https://github.com/shilpa12hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-[#FFA6C9]" />
                    <span>GitHub @shilpa12hub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://shilpa12hub.github.io/Portfolio-Website/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4 text-[#FFA6C9]" />
                    <span>GitHub Portfolio</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:shilpacr780@gmail.com"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#FFA6C9]" />
                    <span>shilpacr780@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {currentYear} Pixel &amp; Petal. All rights reserved.</p>

          <p className="flex items-center gap-1.5 font-medium text-white/80">
            <span>Made with love by Shilpa.</span>
            <Heart className="w-3.5 h-3.5 fill-[#FFA6C9] text-[#FFA6C9]" />
          </p>
        </div>
      </div>
    </footer>
  );
};
