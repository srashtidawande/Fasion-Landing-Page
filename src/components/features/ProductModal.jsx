import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Truck, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { useCart } from '../../context/hooks';

export function ProductModal({ product, isOpen, onClose }) {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState("");
    const [error, setError] = useState("");

    if (!product) return null;

    const handleAddToCart = () => {
        if (!selectedSize) {
            setError("Please select a size to continue");
            return;
        }
        addToCart({ ...product, selectedSize });
        onClose();
        setSelectedSize("");
        setError("");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 z-[70] backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 m-auto max-w-5xl max-h-[90vh] bg-[var(--bg-primary)] z-[80] overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-colors duration-500"
                        style={{ width: 'calc(100% - 2rem)', height: 'min(700px, 90vh)' }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 p-3 bg-[var(--bg-secondary)] backdrop-blur-xl border border-[var(--border-color)] rounded-full hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300 group"
                        >
                            <X size={18} className="text-[var(--text-primary)] group-hover:text-[var(--bg-primary)] group-hover:scale-110 transition-transform" />
                        </button>

                        {/* Image Side */}
                        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[var(--bg-secondary)] transition-colors relative group overflow-hidden">
                            <ImageWithFallback
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 h-1/2 md:h-full p-10 md:p-16 overflow-y-auto flex flex-col">
                            <div className="mb-auto">
                                <div className="flex items-center justify-between mb-8">
                                    <span className="overline-text mb-0">{product.department} / {product.category}</span>
                                    <div className="flex items-center space-x-1 text-amber-500">
                                        <Star size={12} fill="currentColor" />
                                        <span className="text-[10px] font-black tracking-widest text-[var(--text-secondary)]">4.8</span>
                                    </div>
                                </div>

                                <h2 className="heading-luxury-sm !text-4xl mb-4 text-[var(--text-primary)] transition-colors italic">{product.name}</h2>
                                <p className="text-body-luxury !text-2xl !text-[var(--text-primary)] !font-black !tracking-tighter mb-10 transition-colors">₹{product.price.toLocaleString()}</p>

                                <div className="space-y-8 mb-12">
                                    <div>
                                        <div className="flex justify-between items-center mb-5">
                                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[var(--text-secondary)]">Select Size</span>
                                            <button className="text-[9px] uppercase tracking-widest font-bold border-b border-[var(--border-color)] text-[var(--text-secondary)] pb-0.5">Size Guide</button>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {product.sizes?.map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => {
                                                        setSelectedSize(size);
                                                        setError("");
                                                    }}
                                                    className={`min-w-[50px] h-[50px] flex items-center justify-center border transition-all duration-500 text-[10px] font-black uppercase tracking-widest ${selectedSize === size
                                                        ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]'
                                                        : 'border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'
                                                        }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 glass dark:glass-dark space-y-4">
                                        <div className="flex items-center text-[10px] uppercase tracking-widest font-bold text-[var(--text-secondary)]">
                                            <Truck size={14} className="mr-4 text-accent" />
                                            <span>Complimentary express delivery</span>
                                        </div>
                                        <div className="flex items-center text-[10px] uppercase tracking-widest font-bold text-[var(--text-secondary)]">
                                            <ShieldCheck size={14} className="mr-4 text-accent" />
                                            <span>Signature gift wrapping included</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-[var(--border-color)]">
                                <AnimatePresence>
                                    {error && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center mb-4"
                                        >
                                            {error}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                                <Button
                                    variant="primary"
                                    className="w-full py-6 text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl"
                                    onClick={handleAddToCart}
                                >
                                    Add to Bag
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
