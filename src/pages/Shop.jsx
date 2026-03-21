import { ProductGrid } from '../components/features/ProductGrid';
import { motion } from 'framer-motion';

export function Shop({ onOpenModal }) {
    return (
        <section id="collections" className="section-padding bg-[var(--bg-primary)] transition-colors duration-500">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24 text-center"
                >
                    <span className="overline-text text-accent mb-6">The Collection</span>
                    <h1 className="heading-luxury">Curated <span className="not-italic font-bold">Excellence</span></h1>
                </motion.div>

                <ProductGrid onOpenModal={onOpenModal} />
            </div>
        </section>
    );
}
