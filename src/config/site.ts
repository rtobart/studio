import type { LucideIcon } from 'lucide-react';
import { Facebook, Instagram, Twitter, Youtube, ShoppingCart, Menu, Leaf, Spa, Home, Info, Mail, ShieldQuestion, Package, RotateCcw, Lock } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Policy {
  title: string;
  slug: string;
  content: string;
}

export type SiteConfig = {
  name: string;
  description: string;
  logo: string | { src: string; alt: string }; // text or image object
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaLink: string;
    image: string;
  };
  featuredProducts: {
    title: string;
    cta: string;
    ctaLink: string;
  };
  aboutPreview: {
    title: string;
    content: string;
    cta: string;
    ctaLink: string;
  };
  navigation: NavItem[];
  mobileNavigation: NavItem[];
  footerNavigation: {
    company: NavItem[];
    support: NavItem[];
    legal: NavItem[];
  };
  socialLinks: SocialLink[];
  cartIcon: LucideIcon;
  menuIcon: LucideIcon;
  fallbackProductImage: string;
  policies: Policy[];
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
  copyright: string;
};

export const siteConfig: SiteConfig = {
  name: "Herbazal",
  description: "Herbazal - Artisanal soaps and natural skincare products. Discover the beauty of nature.",
  logo: "Herbazal", // Placeholder text logo, can be replaced with { src: '/logo.png', alt: 'Herbazal Logo' }
  hero: {
    title: "Purely Natural, Beautifully You.",
    subtitle: "Discover our handcrafted soaps and skincare, made with the finest natural ingredients.",
    cta: "Shop Collection",
    ctaLink: "/products",
    image: "https://picsum.photos/seed/hero/1200/600",
  },
  featuredProducts: {
    title: "Featured Products",
    cta: "View All Products",
    ctaLink: "/products",
  },
  aboutPreview: {
    title: "Rooted in Nature",
    content: "At Herbazal, we believe in the power of nature to nourish and revitalize. Our products are crafted with care, using traditional methods and sustainably sourced ingredients.",
    cta: "Learn More About Us",
    ctaLink: "/about",
  },
  navigation: [
    { label: "Home", href: "/", icon: Home },
    { label: "Products", href: "/products", icon: Leaf },
    { label: "About Us", href: "/about", icon: Info },
    { label: "Contact", href: "/contact", icon: Mail },
  ],
  mobileNavigation: [ // Could be same as navigation or simplified
    { label: "Home", href: "/", icon: Home },
    { label: "Products", href: "/products", icon: Leaf },
    { label: "About Us", href: "/about", icon: Info },
    { label: "Contact", href: "/contact", icon: Mail },
    { label: "Cart", href: "/cart", icon: ShoppingCart },
    { label: "FAQ", href: "/faq", icon: ShieldQuestion },
  ],
  footerNavigation: {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faq" },
    ],
    support: [
      { label: "Shipping Policy", href: "/policies/shipping" },
      { label: "Returns Policy", href: "/policies/returns" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/policies/privacy" },
      { label: "Terms of Service", href: "/policies/terms" },
    ],
  },
  socialLinks: [
    { label: "Facebook", href: "https://facebook.com", icon: Facebook },
    { label: "Instagram", href: "https://instagram.com", icon: Instagram },
    { label: "Twitter", href: "https://twitter.com", icon: Twitter },
    { label: "Youtube", href: "https://youtube.com", icon: Youtube },
  ],
  cartIcon: ShoppingCart,
  menuIcon: Menu,
  fallbackProductImage: "https://picsum.photos/seed/placeholder/400/300",
  policies: [
    {
      title: "Shipping Policy",
      slug: "shipping",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Shipping Information</h2>
        <p class="mb-2">We aim to ship all orders within 1-2 business days. Standard shipping typically takes 3-5 business days within the country.</p>
        <p class="mb-2">Shipping costs are calculated at checkout based on your location and order weight.</p>
        <h3 class="text-xl font-semibold mt-4 mb-2">International Shipping</h3>
        <p>We currently do not offer international shipping directly through the website. Please contact us for international inquiries.</p>
      `,
    },
    {
      title: "Returns Policy",
      slug: "returns",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Returns & Exchanges</h2>
        <p class="mb-2">We want you to be completely satisfied with your Herbazal products. If for any reason you are not, we accept returns of unused and unopened products within 30 days of purchase.</p>
        <p class="mb-2">To initiate a return, please contact our customer service team with your order number.</p>
        <p>Please note that return shipping costs are the responsibility of the customer, unless the return is due to our error.</p>
      `,
    },
    {
      title: "Privacy Policy",
      slug: "privacy",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Our Commitment to Your Privacy</h2>
        <p class="mb-2">Herbazal is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.</p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Information We Collect</h3>
        <p class="mb-2">We collect information you provide when you place an order, create an account, or subscribe to our newsletter, such as your name, email address, shipping address, and payment details.</p>
        <h3 class="text-xl font-semibold mt-4 mb-2">How We Use Your Information</h3>
        <p>Your information is used to process transactions, deliver products, communicate with you about your order, and improve our services. We may also send you promotional emails if you opt-in.</p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Data Security</h3>
        <p>We implement a variety of security measures to maintain the safety of your personal information.</p>
      `,
    },
    {
      title: "Terms of Service",
      slug: "terms",
      content: `
        <h2 class="text-2xl font-semibold mb-4">Terms and Conditions</h2>
        <p class="mb-2">Welcome to Herbazal! These terms and conditions outline the rules and regulations for the use of Herbazal's Website.</p>
        <p class="mb-2">By accessing this website we assume you accept these terms and conditions. Do not continue to use Herbazal if you do not agree to take all of the terms and conditions stated on this page.</p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Intellectual Property</h3>
        <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights.</p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Limitation of Liability</h3>
        <p>In no event shall Herbazal, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.</p>
      `,
    },
  ],
  contact: {
    email: "support@herbazal.com",
    phone: "+1 (555) 123-4567",
    address: "123 Nature Lane, Green Valley, CA 90210",
  },
  copyright: `© ${new Date().getFullYear()} Herbazal. All rights reserved.`,
};

// Helper functions for configuration
export const getLogo = () => {
  if (typeof siteConfig.logo === 'string') {
    return siteConfig.logo; // Text logo
  }
  return siteConfig.logo; // Image object { src, alt }
};

export const getPolicyBySlug = (slug: string): Policy | undefined => {
  return siteConfig.policies.find(p => p.slug === slug);
};
