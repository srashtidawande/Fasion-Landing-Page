import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, ArrowUpRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[var(--bg-primary)] text-[var(--text-primary)] pt-24 pb-12 px-6 md:px-12 border-t border-[var(--border-color)] relative overflow-hidden transition-colors duration-500">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link to="/" className="text-3xl font-serif font-black tracking-[0.2em] text-[var(--text-primary)]">LUXE</Link>
                        <p className="text-[var(--text-secondary)] font-light leading-relaxed max-w-sm">
                            Redefining the boundaries of modern luxury. We celebrate individuality through architectural precision and sustainable craftsmanship.
                        </p>
                        <div className="flex gap-6">
                            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Collections</h3>
                            <ul className="space-y-4 text-sm font-light text-gray-400">
                                {['New Arrivals', 'Women', 'Men', 'Accessories', 'Limited Edition'].map((item) => (
                                    <li key={item}>
                                        <Link to="/shop" className="hover:text-accent transition-colors flex items-center group">
                                            {item}
                                            <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Company</h3>
                            <ul className="space-y-4 text-sm font-light text-gray-400">
                                {['Our Story', 'Careers', 'Sustainability', 'Atelier', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to="/about" className="hover:text-accent transition-colors flex items-center group">
                                            {item}
                                            <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Connect</h3>
                            <ul className="space-y-4 text-sm font-light text-gray-400">
                                <li>
                                    <span className="block text-white/40 text-[9px] mb-1">Email</span>
                                    <a href="mailto:atelier@luxe.com" className="hover:text-white transition-colors">atelier@luxe.com</a>
                                </li>
                                <li>
                                    <span className="block text-white/40 text-[9px] mb-1">Visit</span>
                                    <p className="leading-relaxed">12 Savile Row,<br />London, W1S 3PQ</p>
                                </li>
                                <li>
                                    <span className="block text-white/40 text-[9px] mb-1">Call</span>
                                    <a href="tel:+442079460000" className="hover:text-white transition-colors">+44 207 946 0000</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Support</h3>
                            <ul className="space-y-4 text-sm font-light text-gray-400">
                                {['Shipping Policy', 'Returns', 'FAQ', 'Privacy Policy'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-white transition-colors flex items-center group">
                                            {item}
                                            <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-[var(--border-color)] flex flex-col md:row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    <p>&copy; 2026 LUXE Fashion Group. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
