import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        discover: [
            { name: 'Latest Arrivals', path: '/shop?filter=new' },
            { name: 'Man Collection', path: '/shop?department=Men' },
            { name: 'Woman Collection', path: '/shop?department=Women' },
            { name: 'Featured Archive', path: '/shop?filter=featured' },
        ],
        boutique: [
            { name: 'Our Heritage', path: '/about' },
            { name: 'Atelier Services', path: '/contact' },
            { name: 'Sustainability', path: '/about#sustainability' },
            { name: 'Private Events', path: '#' },
        ],
        assistance: [
            { name: 'Shipping & Delivery', path: '#' },
            { name: 'Returns & Exchanges', path: '#' },
            { name: 'Size Consultation', path: '#' },
            { name: 'Contact Specialist', path: '/contact' },
        ],
        legal: [
            { name: 'Privacy Policy', path: '#' },
            { name: 'Terms & Conditions', path: '#' },
            { name: 'Accessibility', path: '#' },
        ]
    };

    return (
        <footer className="relative bg-[var(--bg-primary)] pt-40 pb-20 overflow-hidden border-t border-[var(--border-color)]">
            {/* Background Decorative Text */}
            <div className="absolute top-0 right-0 pointer-events-none opacity-[0.02] select-none translate-x-1/4 -translate-y-1/4">
                <span className="text-[30rem] font-serif italic text-accent whitespace-nowrap leading-none">
                    LUXE
                </span>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-20 mb-48">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-12">
                        <Link to="/" className="inline-block group">
                            <h2 className="heading-luxury-sm !text-4xl transition-all duration-700 group-hover:text-accent italic">
                                LUXE<span className="text-accent underline decoration-accent/20 underline-offset-8 not-italic">•</span>
                            </h2>
                        </Link>
                        
                        <p className="text-body-luxury !text-base lg:!text-lg max-w-sm leading-relaxed text-[var(--text-secondary)] opacity-80">
                            Designing the intersection of architectural precision and timeless elegance. 
                            Our atelier crafts narratives through fabric, redefining modern luxury for the global individual.
                        </p>

                        <div className="pt-8 space-y-4">
                            <span className="text-meta-premium !text-accent block">Connect with our Atelier</span>
                            <div className="flex items-center gap-4">
                                {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                                    <motion.a 
                                        key={i} 
                                        href="#" 
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] hover:bg-accent hover:border-accent hover:text-white transition-all duration-500 shadow-xl hover:shadow-accent/30"
                                    >
                                        <Icon size={16} strokeWidth={1.5} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                        <div className="space-y-12">
                            <h3 className="heading-luxury-sm !text-xl tracking-[0.1em]">Navigation</h3>
                            <ul className="space-y-6">
                                {footerLinks.discover.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-meta-premium hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block !font-bold">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="space-y-12">
                            <h3 className="heading-luxury-sm !text-xl tracking-[0.1em]">The Boutique</h3>
                            <ul className="space-y-6">
                                {footerLinks.boutique.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-meta-premium hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block !font-bold">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-12">
                            <h3 className="heading-luxury-sm !text-xl tracking-[0.1em]">Assistance</h3>
                            <div className="space-y-12">
                                <ul className="space-y-6">
                                    {footerLinks.assistance.map((link) => (
                                        <li key={link.name}>
                                            <Link to={link.path} className="text-meta-premium hover:text-accent transition-all duration-300 hover:translate-x-2 inline-block !font-bold">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-10 border-t border-[var(--border-color)] space-y-6">
                                    <div className="flex items-start gap-4 text-meta-premium !text-[var(--text-primary)] !font-bold">
                                        <MapPin size={14} className="text-accent mt-0.5" />
                                        <span className="leading-relaxed">742 Fashion Avenue,<br />Manhattan, NY 10018</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-meta-premium !text-[var(--text-primary)] !font-bold">
                                        <Phone size={14} className="text-accent" />
                                        <span>+1 (212) LUXE-8800</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="pt-20 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="text-meta-premium !text-[9px] opacity-30 flex items-center gap-4">
                        <span>&copy; {currentYear} LUXE COLLECTIVE ATELIER</span>
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        <span>EST. 2012</span>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
                        {footerLinks.legal.map((link) => (
                            <a key={link.name} href={link.path} className="text-meta-premium !text-[9px] hover:text-accent transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                        <div className="w-10 h-6 border border-[var(--border-color)] rounded-md flex items-center justify-center font-black text-[7px] tracking-tighter bg-white/5">VISA</div>
                        <div className="w-10 h-6 border border-[var(--border-color)] rounded-md flex items-center justify-center font-black text-[7px] tracking-tighter bg-white/5">MC</div>
                        <div className="w-10 h-6 border border-[var(--border-color)] rounded-md flex items-center justify-center font-black text-[7px] tracking-tighter bg-white/5">AMEX</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
