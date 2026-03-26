import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { Button } from '../ui/Button';
import { products } from '../../data/products';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeaturedProducts({ onOpenModal }) {
    const [filter, setFilter] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    const filters = [
    { id: 'All',          label: 'All Curation' },
    { id: 'Women',        label: 'Women' },
    { id: 'Men',          label: 'Men' },
    { id: 'Accessories',  label: 'Curated Accessories' },
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

    // Using handleFilterChange instead of inline logic
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
        <section id="featured-pieces" className="section-padding bg-[var(--bg-primary)] overflow-hidden">
            <div className="container-custom">
                {/* Visual Header Stage */}
                <div className="relative mb-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center"
                    >
                        <span className="overline-text text-accent mb-6">Exquisite Selection</span>
                        <h2 className="heading-luxury !text-6xl md:!text-9xl mb-12">
                            The <span className="heading-luxury-italic opacity-50">Featured</span> <br />
                            Statement <span className="text-accent underline decoration-accent/10 underline-offset-[20px]">Pieces</span>
                        </h2>
                    </motion.div>

                    {/* Navigation Cluster */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-20">
                        <div className="flex flex-wrap gap-4 justify-center">
                            {filters.map((f, idx) => (
                                <motion.button
                                    key={f.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => handleFilterChange(f.id)}
                                    className={`group relative px-8 py-4 text-meta-premium transition-all duration-700 ${
                                        filter === f.id
                                            ? 'text-white'
                                            : 'text-[var(--text-secondary)] hover:text-accent'
                                    }`}
                                >
                                    <span className="relative z-10">{f.label}</span>
                                    <AnimatePresence>
                                        {filter === f.id && (
                                            <motion.div
                                                layoutId="filter-pill"
                                                className="absolute inset-0 bg-accent rounded-full shadow-2xl shadow-accent/40"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                                            />
                                        )}
                                    </AnimatePresence>
                                    <div className="absolute inset-0 border border-[var(--border-color)] rounded-full group-hover:border-accent/30 transition-colors" />
                                </motion.button>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <span className="text-meta-premium !text-[var(--text-secondary)]/40">
                                0{currentIndex + 1} / 0{maxIndex + 1}
                            </span>
                            <div className="h-px w-12 bg-[var(--border-color)]" />
                            <div className="flex gap-4">
                                <button
                                    onClick={prev}
                                    disabled={currentIndex === 0}
                                    className="w-16 h-16 rounded-full border border-[var(--border-color)] flex items-center justify-center transition-all duration-700 hover:bg-accent hover:border-accent hover:text-white disabled:opacity-10 group/nav"
                                >
                                    <ChevronLeft size={24} className="group-hover/nav:-translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={next}
                                    disabled={currentIndex === maxIndex}
                                    className="w-16 h-16 rounded-full border border-[var(--border-color)] flex items-center justify-center transition-all duration-700 hover:bg-accent hover:border-accent hover:text-white disabled:opacity-10 group/nav"
                                >
                                    <ChevronRight size={24} className="group-hover/nav:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider Stage */}
                <div className="relative">
                    <div className="overflow-visible">
                        <motion.div
                            className="flex gap-8 lg:gap-12"
                            animate={{ x: `-${slideX}` }}
                            transition={{ type: 'spring', stiffness: 200, damping: 40 }}
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredProducts.map((product, idx) => (
                                    <motion.div
                                        key={product.id}
                                        style={cardWidthStyle}
                                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                        transition={{ duration: 0.6, delay: idx * 0.05 }}
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

                    {/* Backdrop decorative text */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none -z-10 select-none overflow-hidden">
                        <span className="text-[20rem] font-serif italic text-accent/5 whitespace-nowrap leading-none tracking-tighter">
                            Statement Statement Statement
                        </span>
                    </div>
                </div>

                {/* Footer Action */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 pt-20 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <p className="text-meta-premium">
                        Curating the future of luxury minimalism
                    </p>
                    <Link to="/shop">
                        <Button 
                            variant="primary" 
                            size="lg" 
                            pill
                            className="group flex items-center gap-6 px-12"
                        >
                            <span className="relative z-10">Explore Entire Collection</span>
                            <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center transition-all duration-700 group-hover:rotate-45 group-hover:scale-110">
                                <ArrowRight size={18} />
                            </div>
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
