import { motion } from 'framer-motion';
import { BrandStory } from '../components/features/BrandStory';

export function About() {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24 text-center space-y-4"
                >
                    <h1 className="text-5xl md:text-6xl font-serif font-light tracking-tight italic dark:text-white transition-colors">Our Heritage</h1>
                    <p className="text-muted dark:text-gray-400 tracking-[0.3em] uppercase text-xs transition-colors">A Legacy of Design and Craftsmanship</p>
                </motion.div>

                <BrandStory noTitle />

                <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif italic dark:text-white transition-colors">Sustainability at Core</h2>
                        <p className="text-muted dark:text-gray-400 leading-relaxed font-light text-lg transition-colors">
                            We believe that true luxury is sustainable. Every piece in our collection is crafted with the environment in mind, using ethically sourced materials and working with artisans who share our commitment to long-term preservation.
                        </p>
                        <p className="text-muted dark:text-gray-400 leading-relaxed font-light text-lg transition-colors">
                            By choosing timeless designs over fleeting trends, we encourage a more conscious approach to fashion—one that values quality, longevity, and the stories behind the garments.
                        </p>
                    </div>
                    <div className="aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden transition-colors">
                        <img
                            src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop"
                            alt="Sustainable Craftsmanship"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </section>

                <section className="py-24 border-t border-primary/10 dark:border-white/10 transition-colors">
                    <div className="max-w-3xl mx-auto text-center space-y-12">
                        <h2 className="text-4xl font-serif dark:text-white transition-colors">The LUXE Vision</h2>
                        <blockquote className="text-2xl font-serif italic leading-relaxed dark:text-white transition-colors">
                            "Luxury is not just about what you wear, but how it makes you feel. Our mission is to provide pieces that empower and inspire, blending modern innovation with traditional elegance."
                        </blockquote>
                        <p className="text-accent uppercase tracking-[0.3em] font-bold text-xs">— Aaria V., Creative Director</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
