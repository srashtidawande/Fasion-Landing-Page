import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        shop: [
            { name: 'All Collections', path: '/shop' },
            { name: 'New Arrivals', path: '/shop?filter=new' },
            { name: 'Featured Pieces', path: '/shop?filter=featured' },
            { name: 'Sustainability', path: '/about' },
        ],
        experience: [
            { name: 'Our Story', path: '/about' },
            { name: 'Contact Us', path: '/contact' },
            { name: 'Size Guide', path: '#' },
            { name: 'Shipping & Returns', path: '#' },
        ],
        legal: [
            { name: 'Privacy Policy', path: '#' },
            { name: 'Terms of Service', path: '#' },
            { name: 'Cookie Policy', path: '#' },
        ]
    };

    return (
        <footer className="bg-[var(--bg-primary)] pt-32 pb-16 transition-colors duration-500 border-t border-[var(--border-color)]">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-12 mb-24">
                    {/* Brand Identity */}
                    <div className="lg:col-span-4 space-y-12">
                        <Link to="/" className="inline-block group">
                            <span className="text-3xl font-serif font-black tracking-[0.3em] text-[var(--text-primary)] transition-all duration-500 group-hover:tracking-[0.4em]">
                                LUXE<span className="text-accent">•</span>
                            </span>
                        </Link>
                        <p className="text-sm text-[var(--text-secondary)] font-light leading-[1.8] max-w-sm tracking-wide">
                            Curating timeless elegance through architectural precision and ethical craftsmanship. Join our journey in redefining modern luxury.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a 
                                    key={i} 
                                    href="#" 
                                    className="icon-button-circle"
                                >
                                    <Icon size={18} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-12">
                        <div className="space-y-10">
                            <h3 className="overline-text">Shop</h3>
                            <ul className="space-y-5">
                                {footerLinks.shop.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-xs text-[var(--text-secondary)] hover:text-accent transition-colors duration-300 font-bold uppercase tracking-widest block">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-10">
                            <h3 className="overline-text">Experience</h3>
                            <ul className="space-y-5">
                                {footerLinks.experience.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="text-xs text-[var(--text-secondary)] hover:text-accent transition-colors duration-300 font-bold uppercase tracking-widest block">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:col-span-3 space-y-10">
                        <h3 className="overline-text">Atelier</h3>
                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group">
                                <div className="p-3 bg-[var(--bg-secondary)] rounded-xl transition-all group-hover:bg-accent group-hover:text-white border border-[var(--border-color)]">
                                    <MapPin size={16} strokeWidth={1.5} />
                                </div>
                                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-bold uppercase tracking-widest">
                                    742 Fashion Avenue<br />
                                    New York, NY 10018
                                </p>
                            </div>
                            <div className="flex items-start gap-5 group">
                                <div className="p-3 bg-[var(--bg-secondary)] rounded-xl transition-all group-hover:bg-accent group-hover:text-white border border-[var(--border-color)]">
                                    <Mail size={16} strokeWidth={1.5} />
                                </div>
                                <a href="mailto:atelier@luxe-fashion.com" className="text-xs text-[var(--text-secondary)] hover:text-accent transition-colors font-bold uppercase tracking-widest self-center">
                                    atelier@luxe-fashion.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final Bar */}
                <div className="pt-16 border-t border-[var(--border-color)] flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--text-secondary)] font-black">
                        &copy; {currentYear} LUXE COLLECTIVE. ALL RIGHTS RESERVED.
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
                        {footerLinks.legal.map((link) => (
                            <a key={link.name} href={link.path} className="text-[9px] uppercase tracking-[0.4em] text-[var(--text-secondary)] hover:text-accent font-black transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
