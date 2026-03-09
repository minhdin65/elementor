/**
 * Landing Page Data - Elementor Affiliate
 * Update content here instead of in components
 */

export const AFFILIATE_LINK = "https://yithemes.com?refer_id=1170528&utm_source=unknown&utm_medium=unknown";
export const SITE_URL = "https://elementorpro.vercel.app";

// Icon key mapping
export type FeatureIcon = "Layout" | "Zap" | "Users" | "Code" | "Globe" | "Shield";

export const landingData = {
  site: {
    name: "Elementor",
    proSuffix: "Pro",
    fullName: "Elementor Pro",
    footerLabel: "Elementor Affiliate",
    url: SITE_URL,
  },

  nav: {
    links: [
      { href: "#features", label: "Agency Solutions" },
      { href: "#workflow", label: "Workflow" },
      { href: "#testimonials", label: "Success Stories" },
    ],
    ctaText: "Upgrade to Pro",
    registerLabel: "Register",
  },

  hero: {
    badge: {
      text: "#1 Platform for Web Creators",
      icon: "Star",
    },
    title: {
      line1: "Scale Your Agency",
      line2: "without limits",
      highlight: "without limits",
    },
    subtitle: "Build premium WordPress websites at scale. Optimize workflows, manage dozens of clients, and boost profit margins with the most comprehensive web design tool.",
    ctas: [
      { href: AFFILIATE_LINK, text: "Get Started with Elementor Pro", primary: true, icon: "ExternalLink" },
      { href: "#workflow", text: "Explore the Workflow", primary: false, icon: "PlayCircle" },
    ],
    trustNote: "30-day money-back guarantee. No risk.",
    image: {
      src: "/elementor-interface.png",
      alt: "Elementor Professional Web Design Interface",
    },
  },

  logos: {
    title: "Trusted by 10,000+ Web Agencies & Experts worldwide",
    items: [
      { name: "TechWeb", icon: "Zap" },
      { name: "GlobalDigital", icon: "Globe" },
      { name: "StudioCreative", icon: "Layout" },
      { name: "DevAgency", icon: "Code" },
    ],
  },

  features: {
    title: "The Secret Weapon of Top Agencies",
    description: "Cut development time, reduce staffing costs, and deliver pixel-perfect websites to clients at record speed.",
    items: [
      {
        icon: "Layout" as FeatureIcon,
        title: "Pixel-Perfect Design",
        desc: "Full control over every design detail. Create complex layouts, scroll effects, and custom animations without writing code.",
      },
      {
        icon: "Zap" as FeatureIcon,
        title: "Peak Performance",
        desc: "Optimized code and lightning-fast page loads improve Core Web Vitals, boost SEO rankings, and enhance user experience.",
      },
      {
        icon: "Users" as FeatureIcon,
        title: "Professional Handoff",
        desc: "Customize the WordPress dashboard (Role Manager) to limit client access and prevent them from breaking your designs.",
      },
      {
        icon: "Code" as FeatureIcon,
        title: "Custom CSS & Code",
        desc: "For developers: Add custom CSS, HTML, or JavaScript directly to any element for unlimited extensibility.",
      },
      {
        icon: "Globe" as FeatureIcon,
        title: "Global Design System",
        desc: "Set colors, fonts, and widgets globally. Change once, update across the entire site instantly.",
      },
      {
        icon: "Shield" as FeatureIcon,
        title: "Security & Compatibility",
        desc: "Works seamlessly with WooCommerce, Yoast, ACF and top plugins. Continuously updated for bulletproof security.",
      },
    ],
  },

  workflow: {
    title: "Speed up your workflow by 300%",
    description: "Stop repeating tedious tasks. Elementor provides tools that help your team work smarter, deliver projects faster, and take on more work.",
    items: [
      "Theme Builder: Visualize and customize your entire site including Header, Footer, WooCommerce product pages, and archive pages.",
      "Template Kit Library: Start projects instantly with 300+ complete website templates across industries.",
      "Built-in Popup Builder: Create high-converting campaigns without installing third-party plugins.",
      "Marketing Integration: Connect Forms directly to Mailchimp, HubSpot, Zapier to automate customer flows.",
    ],
    ctaText: "Explore all Pro features",
    image: {
      src: "/elementor-interface.png",
      alt: "Elementor Editor Interface - Professional Web Design Tool",
    },
  },

  testimonials: {
    title: "Trusted by Top Agencies",
    items: [
      {
        quote: "Since switching to Elementor Pro, we've cut development time per project by 50%. The Theme Builder flexibility helps us meet even the most demanding enterprise client requirements.",
        author: "John Smith",
        role: "CEO, TechWeb Agency",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
        rating: 5,
      },
      {
        quote: "Elementor's global Design System is a game-changer. It keeps our design and dev teams in sync with absolute brand consistency.",
        author: "Sarah Johnson",
        role: "Creative Director, StudioCreative",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
        rating: 5,
      },
    ],
  },

  cta: {
    title: "Ready to Level Up Your Agency?",
    description: "Join thousands of agencies using Elementor to create beautiful websites, optimize workflows, and grow revenue significantly.",
    buttonText: "Get Elementor Pro Now",
    trustBadges: ["Secure Payment", "24/7 Support", "30-Day Refund"],
  },

  affiliateDisclaimer: {
    title: "Affiliate Disclaimer",
    linkPhrase: "Elementor Pro signup",
    text: "This is an independent review and referral site (https://elementorpro.vercel.app). Some links on this page, including the Elementor Pro signup buttons, are affiliate links. If you click and make a purchase, we may receive a small commission at no extra cost to you. This helps us keep the site running and deliver quality content. Thank you for your support!",
  },

  footer: {
    brandLabel: "Elementor",
    brandSub: "Affiliate",
    links: [
      { key: "terms", label: "Terms of Service" },
      { key: "privacy", label: "Privacy Policy" },
      { key: "contact", label: "Contact" },
    ],
    disclaimer: "This site (https://elementorpro.vercel.app) is operated by an independent affiliate partner and is NOT the official Elementor Ltd. website. Elementor name, logo and trademarks are property of Elementor Ltd. We may receive a commission when you click links on this site and make a purchase (at no extra cost to you).",
    copyright: "Copyright belongs to the independent affiliate partner. All rights reserved.",
  },

  modals: {
    terms: {
      title: "Terms of Service",
      content: [
        { heading: "1. Acceptance of Terms:", text: "By accessing and using https://elementorpro.vercel.app, you agree to comply with the terms and conditions below." },
        { heading: "2. Nature of Service:", text: "This website (https://elementorpro.vercel.app) provides information, reviews and referrals for Elementor software. We do not directly sell, provide technical support, or process payments for this product." },
        { heading: "3. Disclaimer:", text: "All information on this website is provided \"as is\". We do not guarantee absolute accuracy and are not liable for any damages arising from use of this information. Please verify details on the official Elementor website before purchasing." },
        { heading: "4. Intellectual Property:", text: "Elementor trademarks and logos are the property of Elementor Ltd. Review content is our copyright." },
      ],
    },
    privacy: {
      title: "Privacy Policy",
      content: [
        { heading: "1. Information Collection:", text: "https://elementorpro.vercel.app does not directly collect personal information (name, email, phone) unless you voluntarily submit it via a contact form." },
        { heading: "2. Cookie Usage:", text: "This site uses cookies for affiliate link tracking. When you click an Elementor link, a cookie is stored in your browser to record the referral source." },
        { heading: "3. Third-Party Data:", text: "We may use analytics tools (e.g. Google Analytics) to collect anonymous traffic data to improve user experience on https://elementorpro.vercel.app." },
        { heading: "4. Data Protection:", text: "We do not sell, trade, or share user information with third parties for commercial purposes." },
      ],
    },
    contact: {
      title: "Contact Information",
      intro: "If you have questions about the content, privacy policy, or terms of use at https://elementorpro.vercel.app, please contact us at:",
      items: [
        { label: "Website", value: "https://elementorpro.vercel.app" },
        { label: "Note", value: "For Elementor technical support, please contact Elementor Ltd. support directly." },
      ],
    },
  },
} as const;
