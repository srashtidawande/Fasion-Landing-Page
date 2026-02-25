import { ProductGrid } from '../components/features/ProductGrid';
import { motion } from 'framer-motion';

export function Shop({ onOpenModal }) {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-6xl font-serif font-light tracking-tight italic dark:text-white transition-colors">The Collection</h1>
                    <p className="text-muted dark:text-gray-400 tracking-[0.3em] uppercase text-xs transition-colors">Curated Excellence for Every Occasion</p>
                </motion.div>

                <ProductGrid onOpenModal={onOpenModal} />
            </div>
        </div>
    );
}
