import { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Search, Menu, X, Heart, Sun, Moon, ChevronRight, ArrowRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCart, useTheme } from '../../context/hooks';

const departments = [
    {
        name: 'Women',
        path: '/shop?department=Women',
        categories: ['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Footwear', 'Accessories'],
        featured: {
            title: 'The Resort Issue',
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800'
        }
    },
    {
        name: 'Men',
        path: '/shop?department=Men',
        categories: ['Tops', 'Bottoms', 'Outerwear', 'Footwear', 'Accessories', 'Formal Wear'],
        featured: {
            title: 'Modern Tailoring',
            image: 'https://images.unsplash.com/photo-1507679799987-c7377ec48696?auto=format&fit=crop&q=80&w=800'
        }
    },
    {
        name: 'Kids',
        path: '/shop?department=Kids',
        categories: ['Boys (4-12)', 'Girls (4-12)', 'Baby (0-3)', 'Toys', 'Accessories'],
        featured: {
            title: 'Playful Days',
            image: 'https://images.unsplash.com/photo-1519457431-758c4a6ae7d1?auto=format&fit=crop&q=80&w=800'
        }
    },
    {
        name: 'Beauty',
        path: '/shop?department=Beauty',
        categories: ['Skincare', 'Makeup', 'Fragrance', 'Wellness', 'Tools'],
        featured: {
            title: 'Radiant Glow',
            image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&q=80&w=800'
        }
    }
];

export function Navbar({ onOpenWishlist }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const timeoutRef = useRef(null);
    const navigate = useNavigate();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const { cartCount, setIsCartOpen } = useCart();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = (name) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 300);
    };

    const scrollToSection = (e, targetId) => {
        if (location.pathname !== '/') return;
        
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 80; // Navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`sticky top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'glass py-2 shadow-2xl border-b border-[var(--border-color)]' : 'bg-[var(--bg-primary)] py-4'}`}
            onMouseLeave={handleMouseLeave}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" onClick={(e) => { if (location.pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} className="flex items-center gap-2 group">
                    <span className="text-2xl font-serif font-black tracking-[0.3em] transition-all duration-500 group-hover:tracking-[0.4em] text-[var(--text-primary)]">
                        LUXE<span className="text-accent">•</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-16">
                    <Link to="/" onClick={(e) => { if (location.pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} className="text-[12px] uppercase tracking-[0.4em] font-bold hover:text-accent transition-colors text-[var(--text-primary)]">Home</Link>
                    <Link to="/shop" className="text-[12px] uppercase tracking-[0.4em] font-bold hover:text-accent transition-colors text-[var(--text-primary)]">Shop</Link>
                    
                    <div 
                        className="relative"
                        onMouseEnter={() => handleMouseEnter('Collections')}
                    >
                        <a 
                            href="#featured-pieces"
                            onClick={(e) => scrollToSection(e, 'featured-pieces')}
                            className={`text-[12px] uppercase tracking-[0.4em] font-bold transition-all duration-500 flex items-center gap-2 group py-4 ${activeDropdown === 'Collections' ? 'text-accent' : 'text-[var(--text-primary)] hover:text-accent'}`}
                        >
                            Collections
                            <ChevronRight 
                                size={12} 
                                className={`transition-transform duration-500 ${activeDropdown === 'Collections' ? 'rotate-90 text-accent' : ''}`}
                            />
                            {activeDropdown === 'Collections' && (
                                <motion.div 
                                    layoutId="navHighlight"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </a>
                    </div>

                    <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-[12px] uppercase tracking-[0.4em] font-bold hover:text-accent transition-colors text-[var(--text-primary)]">About</a>
                    <a href="#newsletter" onClick={(e) => scrollToSection(e, 'newsletter')} className="text-[12px] uppercase tracking-[0.4em] font-bold hover:text-accent transition-colors text-[var(--text-primary)]">Contact</a>
                </div>

                {/* Icons */}
                <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                    <button
                        onClick={toggleTheme}
                        className="p-3 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all text-gray-700 dark:text-gray-300"
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? <Moon size={20} strokeWidth={1.2} /> : <Sun size={20} strokeWidth={1.2} />}
                    </button>
                    <button
                        className="hover:text-accent dark:text-white transition-all transform hover:scale-110"
                        aria-label="Search products"
                        onClick={() => setIsSearchOpen(true)}
                    >
                        <Search size={22} strokeWidth={1.2} />
                    </button>
                    <button
                        className="hover:text-accent text-[var(--text-primary)] transition-all transform hover:scale-110"
                        aria-label="User account"
                        onClick={() => alert('Login functionality coming soon!')}
                    >
                        <User size={22} strokeWidth={1.2} />
                    </button>
                    <button
                        className="hover:text-accent text-[var(--text-primary)] transition-all transform hover:scale-110 relative"
                        onClick={onOpenWishlist}
                        aria-label="View wishlist"
                    >
                        <Heart size={22} strokeWidth={1.2} />
                    </button>
                    <button
                        className="relative group hover:text-accent text-[var(--text-primary)] transition-all transform hover:scale-110"
                        onClick={() => setIsCartOpen(true)}
                        aria-label={`View shopping bag (${cartCount} items)`}
                    >
                        <ShoppingBag size={22} strokeWidth={1.2} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-accent text-white text-[9px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg ring-2 ring-[var(--bg-primary)]">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center space-x-4 lg:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                        {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={28} className="text-[var(--text-primary)]" /> : <Menu size={28} className="text-[var(--text-primary)]" />}
                    </button>
                </div>
            </div>

            {/* Mega Menu Dropdown */}
            <AnimatePresence mode="wait">
                {activeDropdown === 'Collections' && (
                    <motion.div
                        key="collections-dropdown"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-0 w-full glass dark:glass-dark border-b border-black/5 dark:border-white/5 shadow-2xl overflow-hidden z-40"
                        onMouseEnter={() => handleMouseEnter('Collections')}
                    >
                        {/* Dropdown Highlight Border */}
                        <div className="h-0.5 w-full bg-accent" />
                        <div className="container mx-auto px-12 py-16">
                            <div className="grid grid-cols-12 gap-16">
                                {/* Departments */}
                                <div className="col-span-3">
                                    <h4 className="text-[12px] uppercase tracking-[0.5em] font-black text-accent mb-10">Shop by Department</h4>
                                    <ul className="space-y-6">
                                        {departments.map((dept) => (
                                            <li key={dept.name}>
                                                <Link
                                                    to={dept.path}
                                                    onClick={() => setActiveDropdown(null)}
                                                    className="group flex items-center justify-between text-sm font-serif italic text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all py-1"
                                                >
                                                    {dept.name}
                                                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Lifestyle */}
                                <div className="col-span-3 border-l border-black/10 dark:border-white/10 pl-16">
                                    <h4 className="text-[12px] uppercase tracking-[0.5em] font-black text-accent mb-10">Lifestyle</h4>
                                    <ul className="space-y-6">
                                        <li>
                                            <button className="text-[13px] uppercase tracking-widest font-bold text-gray-500 hover:text-black dark:hover:text-white transition-colors">Sustainable Edit</button>
                                        </li>
                                        <li>
                                            <button className="text-[13px] uppercase tracking-widest font-bold text-gray-500 hover:text-black dark:hover:text-white transition-colors">Digital Lookbook</button>
                                        </li>
                                        <li>
                                            <button className="text-[13px] uppercase tracking-widest font-bold text-gray-500 hover:text-black dark:hover:text-white transition-colors">Exclusive Atelier</button>
                                        </li>
                                    </ul>
                                </div>

                                {/* Featured Image */}
                                <div className="col-span-6">
                                    <div className="relative group cursor-pointer overflow-hidden h-[350px] rounded-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
                                            alt="Featured"
                                            className="w-full h-full object-cover transition-transform duration-[2s] scale-100 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                                            <span className="text-[12px] uppercase tracking-[0.5em] mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 text-center">Spring Summer 2026</span>
                                            <h3 className="text-4xl font-serif italic text-center font-light tracking-tight group-hover:scale-110 transition-transform duration-1000">
                                                The Ethereal Collection
                                            </h3>
                                            <Link
                                                to="/shop"
                                                onClick={() => setActiveDropdown(null)}
                                                className="mt-10 px-8 py-3 glass text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all"
                                            >
                                                Explore Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Overlay */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-white dark:bg-black"
                    >
                        <div className="container mx-auto px-6 h-full flex flex-col">
                            <div className="flex justify-end py-8">
                                <button
                                    onClick={() => setIsSearchOpen(false)}
                                    className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
                                >
                                    <X size={32} className="dark:text-white" />
                                </button>
                            </div>
                            <div className="flex-1 flex flex-col items-center justify-center -mt-20">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="w-full max-w-4xl"
                                >
                                    <div className="relative group">
                                        <input
                                            autoFocus
                                            type="text"
                                            placeholder="What are you looking for?"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
                                                    setIsSearchOpen(false);
                                                }
                                            }}
                                            className="w-full bg-transparent border-b-2 border-black/10 dark:border-white/10 py-8 text-4xl md:text-6xl font-serif italic focus:outline-none focus:border-accent transition-all dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-800"
                                        />
                                        <Search size={40} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 dark:text-gray-800 group-focus-within:text-accent transition-colors" />
                                    </div>
                                    <div className="mt-12 flex flex-wrap gap-4 justify-center">
                                        <span className="text-xs uppercase tracking-[0.3em] text-gray-400 w-full text-center mb-4">Suggested Searches</span>
                                        {['Dresses', 'Tops', 'Outerwear', 'Accessories'].map((tag) => (
                                            <button
                                                key={tag}
                                                onClick={() => {
                                                    navigate(`/shop?category=${tag}`);
                                                    setIsSearchOpen(false);
                                                }}
                                                className="px-6 py-2 border border-black/10 dark:border-white/10 rounded-full text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all dark:text-white"
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-0 lg:hidden bg-white/98 dark:bg-black/98 backdrop-blur-xl z-[60] pt-24 overflow-y-auto overscroll-contain"
                    >
                        <div className="flex flex-col p-12 space-y-12">
                            <div className="space-y-8">
                                <Link to="/" onClick={(e) => { setIsMobileMenuOpen(false); if (location.pathname === '/') { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} className="text-3xl font-serif italic border-b border-black/5 dark:border-white/5 pb-4 block dark:text-white">Home</Link>
                                <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif italic border-b border-black/5 dark:border-white/5 pb-4 block dark:text-white">Shop</Link>
                                
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 block">Collections</span>
                                    <div className="flex flex-wrap gap-4">
                                        <a href="#featured-pieces" onClick={(e) => scrollToSection(e, 'featured-pieces')} className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">Featured</a>
                                        <a href="#categories" onClick={(e) => scrollToSection(e, 'categories')} className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">Departments</a>
                                        <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="text-[11px] uppercase tracking-widest text-gray-400 font-bold">Reviews</a>
                                    </div>
                                </div>

                                <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-3xl font-serif italic border-b border-black/5 dark:border-white/5 pb-4 block dark:text-white">About</a>
                                <a href="#newsletter" onClick={(e) => scrollToSection(e, 'newsletter')} className="text-3xl font-serif italic border-b border-black/5 dark:border-white/5 pb-4 block dark:text-white">Contact</a>
                            </div>

                            <div className="pt-12 border-t border-black/5 dark:border-white/5 flex flex-col space-y-8">
                                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-widest font-bold dark:text-white">Our Story</Link>
                                <button
                                    onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }}
                                    className="flex items-center gap-4 text-sm uppercase tracking-widest font-bold dark:text-white"
                                >
                                    <ShoppingBag size={20} /> Cart ({cartCount})
                                </button>
                                <button
                                    onClick={() => { alert('Login functionality coming soon!'); setIsMobileMenuOpen(false); }}
                                    className="flex items-center gap-4 text-sm uppercase tracking-widest font-bold dark:text-white"
                                >
                                    <User size={20} /> Login / Register
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
