import { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Search, Menu, X, Heart, Sun, Moon, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useTheme } from '../../context/ThemeContext';

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

    return (
        <nav
            className={`sticky top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'glass dark:glass-dark py-4 shadow-2xl border-b border-black/5 dark:border-white/5' : 'bg-white dark:bg-[#0a0a0a] py-8'}`}
            onMouseLeave={handleMouseLeave}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="text-2xl font-serif font-black tracking-[0.3em] transition-all duration-500 group-hover:tracking-[0.4em] dark:text-white">
                        LUXE<span className="text-accent">•</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-16">
                    <Link to="/" className="text-[12px] uppercase tracking-[0.4em] font-bold hover:text-accent transition-colors dark:text-white">Home</Link>

                    {departments.map((dept) => (
                        <div
                            key={dept.name}
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(dept.name)}
                        >
                            <Link
                                to={dept.path}
                                className={`text-[12px] uppercase tracking-[0.4em] font-bold transition-all duration-500 flex items-center gap-2 group py-4 ${activeDropdown === dept.name ? 'text-accent' : 'dark:text-white hover:text-accent'}`}
                            >
                                {dept.name}
                                <ChevronRight
                                    size={12}
                                    className={`transition-transform duration-500 ${activeDropdown === dept.name ? 'rotate-90 text-accent' : ''}`}
                                />
                                {activeDropdown === dept.name && (
                                    <motion.div
                                        layoutId="navHighlight"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        </div>
                    ))}

                    <Link to="/about" className="text-[12px] uppercase tracking-[0.4em] font-bold hover:text-accent transition-colors dark:text-white">About</Link>
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
                    >
                        <Search size={22} strokeWidth={1.2} />
                    </button>
                    <button
                        className="hover:text-accent dark:text-white transition-all transform hover:scale-110 relative"
                        onClick={onOpenWishlist}
                        aria-label="View wishlist"
                    >
                        <Heart size={22} strokeWidth={1.2} />
                    </button>
                    <button
                        className="relative group hover:text-accent dark:text-white transition-all transform hover:scale-110"
                        onClick={() => setIsCartOpen(true)}
                        aria-label={`View shopping bag (${cartCount} items)`}
                    >
                        <ShoppingBag size={22} strokeWidth={1.2} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-accent text-white text-[9px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg ring-2 ring-white dark:ring-black">
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
                        {isMobileMenuOpen ? <X size={28} className="dark:text-white" /> : <Menu size={28} className="dark:text-white" />}
                    </button>
                </div>
            </div>

            {/* Mega Menu Dropdown */}
            <AnimatePresence mode="wait">
                {activeDropdown && (
                    <motion.div
                        key={activeDropdown}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-0 w-full glass dark:glass-dark border-b border-black/5 dark:border-white/5 shadow-2xl overflow-hidden z-40"
                        onMouseEnter={() => handleMouseEnter(activeDropdown)}
                    >
                        {/* Dropdown Highlight Border */}
                        <div className="h-0.5 w-full bg-accent" />
                        <div className="container mx-auto px-12 py-16">
                            <div className="grid grid-cols-12 gap-16">
                                {/* Categories */}
                                <div className="col-span-3">
                                    <h4 className="text-[12px] uppercase tracking-[0.5em] font-black text-accent mb-10">Collections</h4>
                                    <ul className="space-y-6">
                                        {departments.find(d => d.name === activeDropdown)?.categories.map((cat) => (
                                            <li key={cat}>
                                                <Link
                                                    to={`/shop?department=${activeDropdown}&category=${cat}`}
                                                    className="group flex items-center justify-between text-sm font-serif italic text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all py-1"
                                                >
                                                    {cat}
                                                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Shop Info */}
                                <div className="col-span-3 border-l border-black/10 dark:border-white/10 pl-16">
                                    <h4 className="text-[12px] uppercase tracking-[0.5em] font-black text-accent mb-10">Shop Services</h4>
                                    <ul className="space-y-6">
                                        <li>
                                            <button
                                                onClick={() => navigate(`/shop?department=${activeDropdown}`)}
                                                className="text-[13px] uppercase tracking-widest font-bold text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                                            >
                                                Personal Styling
                                            </button>
                                        </li>
                                        <li>
                                            <button className="text-[13px] uppercase tracking-widest font-bold text-gray-500 hover:text-black dark:hover:text-white transition-colors">Digital Lookbook</button>
                                        </li>
                                        <li>
                                            <button className="text-[13px] uppercase tracking-widest font-bold text-gray-500 hover:text-black dark:hover:text-white transition-colors">Exclusive Access</button>
                                        </li>
                                    </ul>
                                </div>

                                {/* Featured Image */}
                                <div className="col-span-6">
                                    <div className="relative group cursor-pointer overflow-hidden h-[350px]">
                                        <img
                                            src={departments.find(d => d.name === activeDropdown)?.featured.image}
                                            alt="Featured"
                                            className="w-full h-full object-cover transition-transform duration-[2s] scale-100 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                            <span className="text-[12px] uppercase tracking-[0.5em] mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">Editorial</span>
                                            <h3 className="text-4xl font-serif italic font-light tracking-tight group-hover:scale-110 transition-transform duration-1000">
                                                {departments.find(d => d.name === activeDropdown)?.featured.title}
                                            </h3>
                                            <Link
                                                to={departments.find(d => d.name === activeDropdown)?.path}
                                                className="mt-10 px-8 py-3 glass text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all"
                                            >
                                                Explore
                                            </Link>
                                        </div>
                                    </div>
                                </div>
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
                        className="fixed inset-0 lg:hidden bg-white/98 dark:bg-black/98 backdrop-blur-xl z-[60] pt-24 overflow-y-auto"
                    >
                        <div className="flex flex-col p-12 space-y-12">
                            {departments.map((dept) => (
                                <div key={dept.name}>
                                    <Link
                                        to={dept.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-4xl font-serif italic border-b border-black/5 dark:border-white/5 pb-4 block dark:text-white"
                                    >
                                        {dept.name}
                                    </Link>
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        {dept.categories.slice(0, 4).map(cat => (
                                            <Link
                                                key={cat}
                                                to={`/shop?department=${dept.name}&category=${cat}`}
                                                className="text-[13px] uppercase tracking-widest text-gray-400 font-bold"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {cat}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <div className="pt-12 border-t border-black/5 dark:border-white/5 flex flex-col space-y-8">
                                <Link to="/about" className="text-sm uppercase tracking-widest font-bold dark:text-white">Our Story</Link>
                                <button
                                    onClick={() => { setIsCartOpen(true); setIsMobileMenuOpen(false); }}
                                    className="flex items-center gap-4 text-sm uppercase tracking-widest font-bold dark:text-white"
                                >
                                    <ShoppingBag size={20} /> Cart ({cartCount})
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
