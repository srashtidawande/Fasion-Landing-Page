import { useRef } from 'react';
import { useTheme } from '../../context/hooks';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';
import { ImageWithFallback } from '../ui/ImageWithFallback';

export function BrandStory({ noTitle }) {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

    return (
        <section 
            id="brand-story" 
            ref={sectionRef}
            className="relative min-h-[100vh] flex items-center overflow-hidden section-padding"
        >
            {/* Background Parallax Image */}
            <motion.div 
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Dynamic Theme Overlay */}
                <div className={`absolute inset-0 z-10 transition-all duration-1000 ${
                    isDark 
                    ? "bg-gradient-to-r from-black via-black/80 to-black/20" 
                    : "bg-gradient-to-r from-white via-white/80 to-white/20"
                }`} />
                
                {/* Extra deep contrast overlay for text area */}
                <div className={`absolute inset-0 z-[11] w-2/3 transition-opacity duration-1000 ${
                    isDark ? "bg-black/40" : "bg-white/20"
                }`} />

                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format,compress&fit=crop&q=60&w=1600"
                    alt="Brand Heritage"
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[0.5] contrast-[1.1] saturate-[0.8]"
                />
            </motion.div>

            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 z-12 pointer-events-none opacity-[0.03] mix-blend-overlay" 
                 style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

            <div className="container-custom relative z-20">
                <div className="flex flex-col lg:flex-row justify-start items-center gap-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="max-w-4xl"
                    >
                        {!noTitle && (
                            <motion.div 
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <span className="w-12 h-px bg-accent/60" />
                                <span className="overline-text !mb-0">Since 2012 — Our Legacy</span>
                            </motion.div>
                        )}
                        
                        <h2 className="heading-luxury mb-16 transition-colors duration-700">
                            <motion.span 
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                                className="block"
                            >
                                Crafting Timeless <br />
                                <span className="heading-luxury-italic opacity-60">Sophistication</span>
                            </motion.span>
                        </h2>
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="space-y-12 max-w-2xl"
                        >
                            <p className={`text-2xl md:text-4xl font-serif italic border-l-4 pl-12 transition-colors duration-500 ${
                                isDark 
                                ? "border-accent/40 text-white/90" 
                                : "border-accent text-black/90"
                            }`}>
                                "Minimalism is not the absence of something, it's the perfect amount of everything."
                            </p>
                            
                            <p className={`pl-12 text-body-luxury transition-colors duration-500 ${
                                isDark ? "text-white/40" : "text-black/50"
                            }`}>
                                Founded on the principles of meticulous craftsmanship and architectural silhouette, 
                                LUXE has been redefining the boundaries of modern luxury since its inception. 
                                We believe true elegance lies in the details that remain unseen yet felt.
                            </p>
                        </motion.div>

                        <div className="mt-24 pl-12 flex flex-wrap items-center gap-x-24 gap-y-12">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="group/stat relative"
                            >
                                <span className="absolute -top-6 -left-6 text-9xl font-serif text-accent/5 select-none transition-all duration-700 group-hover/stat:text-accent/10">12</span>
                                <span className="relative block text-7xl md:text-8xl font-serif mb-2 transition-colors duration-700 text-[var(--heading-primary)]">12<span className="text-accent">+</span></span>
                                <span className={`block text-[10px] uppercase tracking-[0.5em] font-black transition-colors duration-700 ${
                                    isDark ? "text-white/30" : "text-black/40"
                                }`}>Years Of Heritage</span>
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className={`hidden md:block w-px h-24 origin-top ${
                                    isDark ? "bg-white/10" : "bg-black/10"
                                }`}
                            />

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 1 }}
                                className="group/stat relative"
                            >
                                <span className="absolute -top-6 -left-6 text-9xl font-serif text-accent/5 select-none transition-all duration-700 group-hover/stat:text-accent/10">Soul</span>
                                <span className="relative block text-7xl md:text-8xl font-serif mb-2 transition-colors duration-700 text-[var(--heading-primary)]">Pure</span>
                                <span className={`block text-[10px] uppercase tracking-[0.5em] font-black transition-colors duration-700 ${
                                    isDark ? "text-white/30" : "text-black/40"
                                }`}>Ethical Philosophy</span>
                            </motion.div>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="mt-20 pl-12"
                        >
                            <Button 
                                variant={isDark ? "glass" : "outline"} 
                                size="lg" 
                                pill
                                className="font-bold tracking-[0.4em] px-16 group/btn"
                            >
                                <span className="relative z-10">Discover Our Heritage</span>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
