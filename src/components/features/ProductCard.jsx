import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Button } from '../ui/Button';
import { useWishlist, useCart } from '../../context/hooks';

export function ProductCard({ product, onOpenModal }) {
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();
    const isWishlisted = isInWishlist(product.id);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ 
                y: -10,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="group relative bg-[var(--bg-primary)] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[var(--border-color)]"
        >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/5] bg-[var(--bg-secondary)]">
                <motion.img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                />

                {/* Status Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                    {product.isNew && (
                        <div className="glass px-4 py-2 text-[8px] font-black uppercase tracking-[0.3em] text-[var(--text-primary)] rounded-full shadow-lg">
                            New Arrival
                        </div>
                    )}
                </div>

                {/* Wishlist Icon */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product);
                    }}
                    className={`absolute top-6 right-6 p-3.5 rounded-full glass z-20 transition-all duration-500 transform ${isWishlisted
                            ? 'bg-accent text-white scale-110 shadow-glow'
                            : 'text-[var(--text-primary)] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'
                        }`}
                >
                    <Heart size={16} strokeWidth={isWishlisted ? 0 : 2} fill={isWishlisted ? "currentColor" : "none"} />
                </button>

                {/* Hover Overlay - Simplified & Elegant */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="absolute inset-x-6 bottom-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 hidden md:block">
                    <button
                        onClick={(e) => { e.stopPropagation(); onOpenModal(product); }}
                        className="w-full py-4 bg-[var(--bg-primary)] text-[var(--text-primary)] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all duration-500 rounded-xl shadow-2xl backdrop-blur-md border border-[var(--border-color)]"
                    >
                        Quick View
                    </button>
                </div>
            </div>

            {/* Product Meta */}
            <div className="p-8 pb-10 flex flex-col items-center text-center">
                <span className="text-[10px] uppercase tracking-[0.4em] text-accent mb-3 font-black">{product.department}</span>
                <h3
                    onClick={() => onOpenModal(product)}
                    className="text-lg font-serif italic text-[var(--text-primary)] mb-3 cursor-pointer hover:text-accent transition-colors line-clamp-1 leading-tight"
                >
                    {product.name}
                </h3>
                <div className="flex items-center gap-3 mb-8">
                    <span className="text-sm font-black tracking-[0.2em] text-[var(--text-primary)]">₹{product.price.toLocaleString()}</span>
                </div>
                
                <button
                    onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                    className="w-full py-4.5 bg-transparent border-2 border-[var(--text-primary)] text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-500 flex items-center justify-center gap-3 group/btn"
                >
                    <ShoppingBag size={14} className="group-hover/btn:scale-110 transition-transform" />
                    Add to Cart
                </button>
            </div>
        </motion.div>
    );
}
