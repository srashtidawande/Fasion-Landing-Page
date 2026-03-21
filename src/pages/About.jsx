import { motion } from 'framer-motion';
import { BrandStory } from '../components/features/BrandStory';

export function About() {
    return (
        <div className="pt-40 pb-24 bg-[var(--bg-primary)] transition-colors duration-500">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-32 text-center"
                >
                    <span className="overline-text">Our Heritage</span>
                    <h1 className="heading-luxury">A Legacy of <span className="not-italic font-bold">Craftsmanship</span></h1>
                </motion.div>

                <BrandStory noTitle />

                <section className="py-32 grid grid-cols-1 md:grid-cols-2 gap-24 items-center border-b border-[var(--border-color)]">
                    <div className="space-y-10">
                        <span className="overline-text">Philosophy</span>
                        <h2 className="heading-luxury-sm">Sustainability <span className="not-italic font-bold">at Core</span></h2>
                        <div className="space-y-6">
                            <p className="text-[var(--text-secondary)] leading-[1.8] font-light text-xl border-l border-accent/30 pl-8">
                                We believe that true luxury is sustainable. Every piece in our collection is crafted with the environment in mind, using ethically sourced materials and working with artisans who share our commitment to long-term preservation.
                            </p>
                            <p className="text-[var(--text-secondary)] leading-[1.8] font-light text-lg pl-8">
                                By choosing timeless designs over fleeting trends, we encourage a more conscious approach to fashion—one that values quality, longevity, and the stories behind the garments.
                            </p>
                        </div>
                    </div>
                    <div className="aspect-[4/5] bg-[var(--bg-secondary)] overflow-hidden rounded-[2.5rem] border border-[var(--border-color)] group">
                        <img
                            src="https://images.unsplash.com/photo-1544441893-675973e31985?q=60&w=800&auto=format&fit=crop"
                            alt="Sustainable Craftsmanship"
                            loading="lazy"
                            className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105"
                        />
                    </div>
                </section>

                <section className="py-32">
                    <div className="max-w-4xl mx-auto text-center space-y-16">
                        <span className="overline-text">The Vision</span>
                        <blockquote className="text-3xl md:text-5xl font-serif italic leading-relaxed text-[var(--text-primary)]">
                            "Luxury is not just about what you wear, but how it makes you feel. Our mission is to provide pieces that empower and inspire, blending modern innovation with traditional elegance."
                        </blockquote>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-[1px] bg-accent" />
                            <p className="text-accent uppercase tracking-[0.5em] font-black text-[10px]">— Maria V., Creative Director</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
