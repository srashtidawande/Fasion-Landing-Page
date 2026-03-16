import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Truck, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';
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
                        className="fixed inset-0 m-auto max-w-5xl max-h-[90vh] bg-white dark:bg-[#0a0a0a] z-[80] overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-colors duration-500"
                        style={{ width: 'calc(100% - 2rem)', height: 'min(700px, 90vh)' }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 group"
                        >
                            <X size={18} className="dark:text-white group-hover:scale-110 transition-transform" />
                        </button>

                        {/* Image Side */}
                        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#f4f4f4] dark:bg-[#1a1a1a] transition-colors relative group overflow-hidden">
                            <img
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
                                    <span className="text-[10px] uppercase tracking-[0.5em] font-black text-accent">{product.department} / {product.category}</span>
                                    <div className="flex items-center space-x-1 text-amber-500">
                                        <Star size={12} fill="currentColor" />
                                        <span className="text-[10px] font-black tracking-widest text-gray-400">4.8</span>
                                    </div>
                                </div>

                                <h2 className="text-4xl font-serif italic mb-4 dark:text-white transition-colors">{product.name}</h2>
                                <p className="text-2xl font-black tracking-tighter mb-10 dark:text-white transition-colors">₹{product.price.toLocaleString()}</p>

                                <div className="space-y-8 mb-12">
                                    <div>
                                        <div className="flex justify-between items-center mb-5">
                                            <span className="text-[10px] uppercase tracking-[0.4em] font-black dark:text-gray-400">Select Size</span>
                                            <button className="text-[9px] uppercase tracking-widest font-bold border-b border-black dark:border-white/20 dark:text-gray-500 pb-0.5">Size Guide</button>
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
                                                        ? 'bg-black text-white border-black dark:bg-accent dark:border-accent'
                                                        : 'border-gray-200 text-gray-400 hover:border-black dark:border-white/10 dark:hover:border-white'
                                                        }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 glass dark:glass-dark space-y-4">
                                        <div className="flex items-center text-[10px] uppercase tracking-widest font-bold text-gray-500">
                                            <Truck size={14} className="mr-4 text-accent" />
                                            <span>Complimentary express delivery</span>
                                        </div>
                                        <div className="flex items-center text-[10px] uppercase tracking-widest font-bold text-gray-500">
                                            <ShieldCheck size={14} className="mr-4 text-accent" />
                                            <span>Signature gift wrapping included</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100 dark:border-white/5">
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
                                    className="w-full py-6 text-[10px] font-black uppercase tracking-[0.5em] bg-black text-white dark:bg-white dark:text-black hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all duration-500 shadow-2xl"
                                    onClick={handleAddToCart}
                                >
                                    Add to Collection
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
