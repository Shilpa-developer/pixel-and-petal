import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectType: 'Business Website',
    budget: '$500 - $1,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch('https://formspree.io/f/xrpzwbeg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    setSubmitted(true);
  } else {
    alert('Something went wrong. Please try again.');
  }
};
  const projectTypes = [
    'Personal Website',
    'Business Website',
    'E-commerce Store',
    'Web Application',
    'Design Consultation',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1B1F]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] border border-[#E8E2D9] w-full max-w-xl rounded-3xl p-6 sm:p-10 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white border border-[#E8E2D9] text-[#1C1B1F] hover:bg-[#FAF0F4] hover:text-[#E05B88] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FAF0F4] border border-[#F3C2D2] text-[#E05B88] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif-editorial text-3xl font-normal text-[#1C1B1F]">
              Thank you, {formData.name || 'friend'}!
            </h3>

            <p className="text-sm text-[#1C1B1F]/70 max-w-sm mx-auto leading-relaxed">
              Your project inquiry has been received. Shilpa will review your details and get back to you shortly at <span className="font-semibold text-[#1C1B1F]">{formData.email}</span>.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-full bg-[#1C1B1F] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2E2C33]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0F4] text-[#E05B88] text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Project Inquiry</span>
            </div>

            <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#1C1B1F] mb-2">
              Start a project.
            </h3>

            <p className="text-xs sm:text-sm text-[#1C1B1F]/70 mb-6">
              Tell me what you're thinking. I'll help turn it into something people can experience.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1B1F]/70 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Maya Lin"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8E2D9] text-sm text-[#1C1B1F] focus:outline-hidden focus:border-[#E05B88]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1B1F]/70 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="maya@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8E2D9] text-sm text-[#1C1B1F] focus:outline-hidden focus:border-[#E05B88]"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1B1F]/70 mb-1">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8E2D9] text-sm text-[#1C1B1F] focus:outline-hidden focus:border-[#E05B88]"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C1B1F]/70 mb-1">
                  Tell me about your idea
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your goals, timeline, or links to inspiration..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E8E2D9] text-sm text-[#1C1B1F] focus:outline-hidden focus:border-[#E05B88] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#1C1B1F] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#2E2C33] transition-colors flex items-center justify-center gap-2 group shadow-sm mt-4"
              >
                <span>Send Message to Shilpa</span>
                <Send className="w-3.5 h-3.5 text-[#FFA6C9] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
