import { Project, ServiceCategory, ProcessStage, ApproachPrinciple } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ishaa-sarees',
    title: 'iShaa Sarees',
    category: 'E-COMMERCE / WEB DESIGN / DEVELOPMENT',
    subcategory: 'E-commerce',
    url: 'https://ishaa-sarees.ai.studio/',
    description: 'A bespoke e-commerce storefront for handcrafted Indian sarees, featuring fluid collection filtering, rich product galleries, and a high-end shopping experience.',
    tags: ['React', 'Tailwind CSS', 'E-commerce', 'Responsive UX'],
    featured: true,
    imageBg: 'from-[#FAF2F5] via-[#F8E8EE] to-[#F3D7E2]',
    accentColor: '#D9658B'
  },
  {
    id: 'sheeja-r-nair',
    title: 'Sheeja R Nair Portfolio',
    category: 'PERSONAL BRAND / PORTFOLIO',
    subcategory: 'Personal Brand',
    url: 'https://sheeja-r-nair-portfolio.netlify.app/',
    description: 'An editorial personal brand website built for author Sheeja R Nair, highlighting literary publications, media press coverage, and upcoming speaking events.',
    tags: ['Editorial Design', 'Personal Brand', 'Netlify', 'CSS3'],
    featured: false,
    imageBg: 'from-[#F7F5F0] via-[#EFECE6] to-[#E3DEC3]',
    accentColor: '#8C7B6B'
  },
  {
    id: 'shilpa-portfolio',
    title: 'Personal Developer Portfolio',
    category: 'PERSONAL PORTFOLIO / WEB DESIGN',
    subcategory: 'Personal Brand',
    url: 'https://shilpa12hub.github.io/Portfolio-Website/',
    description: 'Shilpa’s original developer showcase featuring technical projects, skill matrix, interactive theme controls, and custom web layout experiments.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    featured: true,
    imageBg: 'from-[#F0F4F8] via-[#E2E8F0] to-[#CBD5E1]',
    accentColor: '#4A5568'
  },
  {
    id: 'luxury-salon',
    title: 'Luxury Salon Website',
    category: 'BUSINESS WEBSITE',
    subcategory: 'Business',
    url:'https://luxurysalon-shilpa.netlify.app/',
    description: 'A sophisticated digital experience for a boutique salon, complete with curated treatment menus, aesthetic gallery, and online booking inquiry.',
    tags: ['UI/UX Design', 'Business Website', 'Luxury Branding'],
    featured: false,
    imageBg: 'from-[#FAF0F3] via-[#F3E5EC] to-[#E8D5E2]',
    accentColor: '#A855F7'
  },
  {
    id: 'dental-clinic',
    title: 'Dental Clinic Portal',
    category: 'BUSINESS WEBSITE',
    subcategory: 'Business',
    url: 'https://saraharjundentalclinic.netlify.app/',
    description: 'A clean, patient-centric healthcare platform designed for easy appointment scheduling, doctor qualifications, and treatment transparency.',
    tags: ['Healthcare UX', 'Responsive Layout', 'Business Portal'],
    featured: false,
    imageBg: 'from-[#F0FDF4] via-[#DCFCE7] to-[#BBF7D0]',
    accentColor: '#16A34A'
  },
  {
    id: 'edutrack',
    title: 'EduTrack',
    category: 'WEB APPLICATION / ACADEMIC PROJECT',
    subcategory: 'Web Application',
    url: '#',
    description: 'An intuitive academic progress tracking dashboard helping B.Tech students monitor course metrics, deadlines, and learning targets.',
    tags: ['Web Application', 'Dashboard UI', 'React', 'TypeScript'],
    featured: false,
    imageBg: 'from-[#F0F9FF] via-[#E0F2FE] to-[#BAE6FD]',
    accentColor: '#0284C7'
  }
];

export const SERVICES: ServiceCategory[] = [
  {
    number: '01',
    title: 'Personal Websites',
    subtitle: 'Portfolios, personal brands and professional websites.',
    description: 'Thoughtfully designed personal platforms that capture your unique identity, story, and work with warmth and distinction.',
    features: ['Portfolio Showcases', 'Personal Branding', 'Resume / CV Platforms', 'Custom Domain Integration']
  },
  {
    number: '02',
    title: 'Business Websites',
    subtitle: 'Modern websites that help businesses establish a strong online presence.',
    description: 'Clean, intentional business sites engineered to build instant credibility, explain your offerings clearly, and convert visitors into clients.',
    features: ['Service Showcases', 'Inquiry & Booking Systems', 'CMS / Content Setup', 'SEO Optimization']
  },
  {
    number: '03',
    title: 'E-commerce',
    subtitle: 'Product-focused online stores and digital storefronts.',
    description: 'Aesthetic product galleries and seamless shopping experiences crafted to spotlight handcrafted collections and artisanal goods.',
    features: ['Product Catalogues', 'Cart & Checkout Flows', 'Mobile-First Shopping', 'Collection Management']
  },
  {
    number: '04',
    title: 'Web Applications',
    subtitle: 'Functional web experiences and applications that go beyond static pages.',
    description: 'Dynamic, state-driven interactive web portals built with React and modern APIs for tools, academic dashboards, and web utilities.',
    features: ['Interactive Dashboards', 'API Integration', 'Dynamic Data Views', 'Custom State Logic']
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the idea, brand and goals.',
    details: 'We start with a conversation about what you need, your target audience, tone of voice, and visual direction.'
  },
  {
    step: '02',
    title: 'Design',
    description: 'Create the structure, visual direction and experience.',
    details: 'Drafting typography pairings, layout wireframes, color stories, and custom UI components tailored to your story.'
  },
  {
    step: '03',
    title: 'Build',
    description: 'Turn the design into a responsive, functional website.',
    details: 'Translating designs into clean, performant TypeScript and React code with fluid interactions and responsive layouts.'
  },
  {
    step: '04',
    title: 'Refine',
    description: 'Test, polish and improve every important detail.',
    details: 'Fine-tuning responsiveness across devices, optimizing load speeds, testing interactions, and launching smoothly.'
  }
];

export const APPROACH_PRINCIPLES: ApproachPrinciple[] = [
  {
    number: '01',
    title: 'Thoughtful design',
    description: 'Every visual decision should have a purpose. No fluff or random decoration — just clear intent and beauty.'
  },
  {
    number: '02',
    title: 'Real functionality',
    description: 'A beautiful website should also work beautifully. Fast load times, responsive layouts, and intuitive controls.'
  },
  {
    number: '03',
    title: 'Personality',
    description: 'Your website should feel like you, not like everyone else. Custom typography, subtle details, and unique charm.'
  },
  {
    number: '04',
    title: 'Continuous learning',
    description: 'I’m constantly experimenting, learning modern web standards, and bringing fresh technical ideas to every project.'
  }
];
