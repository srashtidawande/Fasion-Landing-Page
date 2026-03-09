import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Button } from '../ui/Button';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

export function ProductCard({ product, onOpenModal }) {
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addToCart } = useCart();
    const isWishlisted = isInWishlist(product.id);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="group relative"
        >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[3/4] bg-[#f8f8f8] dark:bg-[#1a1a1a] transition-colors duration-500">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.22, 1, 0.36, 1)] group-hover:scale-105"
                />

                {/* Status Badges */}
                <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
                    {product.isNew && (
                        <div className="glass dark:glass-dark px-4 py-1.5 text-[8px] font-black uppercase tracking-[0.3em] dark:text-white shadow-xl">
                            New Arrival
                        </div>
                    )}
                </div>

                {/* Wishlist Icon - Floating Style */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product);
                    }}
                    className={`absolute top-5 right-5 p-3 rounded-full glass dark:glass-dark z-20 transition-all duration-500 transform ${isWishlisted
                            ? 'bg-accent text-white scale-110'
                            : 'text-primary dark:text-white hover:bg-white dark:hover:bg-white/20 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                        }`}
                >
                    <Heart size={14} strokeWidth={isWishlisted ? 0 : 2} fill={isWishlisted ? "currentColor" : "none"} />
                </button>

                {/* Editorial Overlay */}
                <div className="absolute inset-0 p-8 glass-dark opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22, 1, 0.36, 1)] hidden md:flex flex-col justify-end gap-6 overflow-hidden">
                    <div className="space-y-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                        <span className="text-[10px] uppercase tracking-[0.5em] text-accent font-black block">Discover</span>
                        <h4 className="text-2xl font-serif italic text-white leading-tight">{product.name}</h4>
                    </div>
                    
                    <div className="flex gap-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-200">
                        <button
                            onClick={(e) => { e.stopPropagation(); onOpenModal(product); }}
                            className="flex-1 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl"
                        >
                            View Details
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                            className="aspect-square w-14 flex items-center justify-center bg-accent text-white hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
                        >
                            <ShoppingBag size={18} />
                        </button>
                    </div>
                </div>

                {/* Mobile Cart Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                    }}
                    className="md:hidden absolute bottom-4 right-4 p-3 bg-white dark:bg-black rounded-full shadow-xl"
                >
                    <ShoppingBag size={18} />
                </button>
            </div>

            {/* Product Meta */}
            <div className="mt-6 flex flex-col items-center text-center">
                <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-2 font-bold">{product.department}</span>
                <h3
                    onClick={() => onOpenModal(product)}
                    className="text-sm font-serif italic text-gray-900 dark:text-white mb-2 cursor-pointer hover:text-accent transition-colors"
                >
                    {product.name}
                </h3>
                <div className="flex items-center gap-3">
                    <span className="text-xs font-black tracking-widest dark:text-white">₹{product.price.toLocaleString()}</span>
                    {/* Placeholder for old price if needed */}
                </div>
            </div>
        </motion.div>
    );
}
