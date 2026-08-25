import React, { useState, useEffect } from 'react';
import { PixelPetalLogo } from './brand/PixelPetalLogo';
import { PixelPetalMark } from './brand/PixelPetalMark';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About Shilpa', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'py-3 bg-[#FAF8F5]/85 backdrop-blur-md border-b border-[#E8E2D9] shadow-xs'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Brand Logo / Brand Mark */}
          <a
            href="#"
            className="flex items-center gap-3 group text-left focus:outline-hidden"
            aria-label="Pixel & Petal Home"
          >
            {scrolled ? (
              <div className="flex items-center gap-3">
                <PixelPetalMark size={36} />
                <span className="font-serif-editorial text-xl font-medium tracking-wide text-[#1C1B1F]">
                  PIXEL &amp; PETAL
                </span>
              </div>
            ) : (
              <PixelPetalLogo size="sm" showSubline={false} />
            )}
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#1C1B1F]/70 hover:text-[#1C1B1F] transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E05B88] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full bg-[#1C1B1F] text-[#FAF8F5] hover:bg-[#2E2C33] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xs group"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FFA6C9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-[#FAF0F4] text-[#1C1B1F] transition-colors focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1C1B1F] text-[#FAF8F5] flex flex-col justify-between p-8 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="pt-20 space-y-6">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
              <PixelPetalMark size={40} showBg={true} />
              <div>
                <span className="font-serif-editorial text-2xl font-normal tracking-wide text-white block">
                  PIXEL &amp; PETAL
                </span>
                <span className="text-[10px] tracking-widest text-[#FFA6C9] uppercase">
                  Made with love by Shilpa
                </span>
              </div>
            </div>

            <p className="text-xs tracking-widest uppercase text-white/40 mb-4 font-semibold">
              Navigation
            </p>

            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif-editorial text-3xl font-light text-white/80 hover:text-[#FFA6C9] transition-colors flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#FFA6C9] opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#E05B88] text-white font-medium text-sm hover:bg-[#D44B7A] transition-colors shadow-sm"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="text-center text-xs text-white/50">
              shilpacr780@gmail.com • +91 7397508153
            </div>
          </div>
        </div>
      )}
    </>
  );
};
