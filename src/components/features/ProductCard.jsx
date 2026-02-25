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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="group relative"
        >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[3/4] bg-[#f8f8f8] dark:bg-[#1a1a1a] transition-colors duration-500">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22, 1, 0.36, 1)] group-hover:scale-110"
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
                <div className="absolute inset-x-0 bottom-0 p-8 glass-dark opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.22, 1, 0.36, 1)] hidden md:flex flex-col gap-4">
                    <div className="flex justify-between items-end">
                        <div className="space-y-1">
                            <span className="text-[8px] uppercase tracking-[0.4em] text-white/50 block">Details</span>
                            <span className="text-[10px] uppercase tracking-widest text-white font-bold block">{product.category}</span>
                        </div>
                        <button
                            onClick={(e) => { e.stopPropagation(); onOpenModal(product); }}
                            className="bg-white p-3 rounded-full hover:bg-accent hover:text-white transition-all transform hover:rotate-90"
                        >
                            <Eye size={16} />
                        </button>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
                        }}
                        className="w-full py-4 bg-white text-black text-[9px] font-black uppercase tracking-[0.4em] hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl"
                    >
                        Quick Add to Bag
                    </button>
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
