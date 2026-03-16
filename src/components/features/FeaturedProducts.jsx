import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { products } from '../../data/products';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeaturedProducts({ onOpenModal }) {
    const [filter, setFilter] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    const filters = [
        { id: 'All',          label: 'All' },
        { id: 'Women',        label: 'Women' },
        { id: 'Men',          label: 'Men' },
        { id: 'Accessories',  label: 'Accessories' },
        { id: 'New Arrivals', label: 'New Arrivals' },
    ];

    const filteredProducts = useMemo(() => {
        if (filter === 'All')          return products;
        if (filter === 'New Arrivals') return products.filter(p => p.isNew);
        return products.filter(p => p.department === filter || p.category === filter);
    }, [filter]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsPerPage(1);
            else if (window.innerWidth < 1024) setItemsPerPage(2);
            else setItemsPerPage(4);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleFilterChange = (cat) => {
        setFilter(cat);
        setCurrentIndex(0);
    };

    const maxIndex = Math.max(0, filteredProducts.length - itemsPerPage);
    const next = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    const prev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

    // Gap values matching Tailwind gap-8 (32px) and lg:gap-12 (48px)
    const gapPx = itemsPerPage === 4 ? 48 : 32;

    // Width of each card: fill the container with n cards and (n-1) gaps
    const cardWidthStyle = {
        width: `calc(${100 / itemsPerPage}% - ${(gapPx * (itemsPerPage - 1)) / itemsPerPage}px)`,
        flexShrink: 0,
    };

    // How far to translate the track: (cardWidth + gap) * index
    // Expressed as: (100/n)% * index + gap * index - gap/n * index
    // = index * ((100/n)% + gap*(1 - 1/n)px)
    const slideX = `calc(${currentIndex * (100 / itemsPerPage)}% + ${currentIndex * gapPx * (1 - 1 / itemsPerPage)}px)`;

    return (
        <section id="featured-pieces" className="section-padding bg-white dark:bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
                    <div className="max-w-xl">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-4 block">Our Curation</span>
                        <h2 className="text-4xl md:text-6xl font-serif italic dark:text-white leading-[1.1]">
                            The Featured <br />
                            <span className="font-light not-italic">Collection</span>
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-1 md:gap-2 justify-center md:justify-start">
                            {filters.map((f) => (
                                <button
                                    key={f.id}
                                    onClick={() => handleFilterChange(f.id)}
                                    className={`relative px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.35em] font-bold transition-all duration-400 ${
                                        filter === f.id
                                            ? 'bg-accent text-white shadow-md shadow-accent/25'
                                            : 'text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                                    }`}
                                >
                                    {f.label}
                                    {f.id === 'New Arrivals' && filter !== 'New Arrivals' && (
                                        <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-accent align-middle" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex gap-4">
                            <button
                                onClick={prev}
                                disabled={currentIndex === 0}
                                aria-label="Previous products"
                                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 border-black/10 dark:border-white/10 ${
                                    currentIndex === 0
                                        ? 'opacity-20 cursor-not-allowed'
                                        : 'hover:border-accent hover:bg-accent hover:text-white dark:text-white'
                                }`}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={next}
                                disabled={currentIndex === maxIndex}
                                aria-label="Next products"
                                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 border-black/10 dark:border-white/10 ${
                                    currentIndex === maxIndex
                                        ? 'opacity-20 cursor-not-allowed'
                                        : 'hover:border-accent hover:bg-accent hover:text-white dark:text-white'
                                }`}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <div className="overflow-hidden">
                    <motion.div
                        className="flex gap-8 lg:gap-12"
                        animate={{ x: `-${slideX}` }}
                        transition={{ type: 'spring', stiffness: 300, damping: 35 }}
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    style={cardWidthStyle}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <ProductCard
                                        product={product}
                                        onOpenModal={() => onOpenModal(product)}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-16">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                                i === currentIndex ? 'w-12 bg-accent' : 'w-2 bg-black/10 dark:bg-white/10'
                            }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Explore Link */}
                <div className="mt-20 flex justify-center">
                    <Link
                        to="/shop"
                        className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] hover:text-accent transition-colors dark:text-white"
                    >
                        Explore Full Collection
                        <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
