import { useRef } from 'react';
import { useTheme } from '../../context/hooks';
import { motion, useScroll, useTransform } from 'framer-motion';

export function BrandStory({ noTitle }) {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

    return (
        <section 
            id="brand-story" 
            ref={sectionRef}
            className="relative min-h-[95vh] flex items-center overflow-hidden py-40 bg-[var(--bg-primary)]"
        >
            {/* Background Parallax Image */}
            <motion.div 
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className={`absolute inset-0 z-10 transition-colors duration-700 ${
                    isDark ? "bg-black/60" : "bg-white/85"
                }`} />
                <img 
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=2000"
                    alt="Brand Heritage"
                    className="w-full h-full object-cover grayscale"
                />
            </motion.div>

            {/* Multidimensional Overlays */}
            <div className={`absolute inset-0 z-10 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/60 to-transparent transition-colors duration-700`} />
            <div className={`absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg-primary)_100%)] opacity-80 transition-colors duration-700`} />

            <div className="container-custom relative z-20">
                <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-center gap-20">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        {!noTitle && (
                            <motion.span 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="overline-text"
                            >
                                Since 2012 — Our Legacy
                            </motion.span>
                        )}
                        <h2 className={`heading-luxury mb-16 !leading-[0.95] transition-colors duration-500 ${
                            isDark ? "text-white" : "text-[#111827]"
                        }`}>
                            <motion.span 
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                                className="block"
                            >
                                Crafting Timeless
                            </motion.span>
                            <motion.span 
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                                className="block italic font-light opacity-80 mt-2"
                            >
                                Sophistication
                            </motion.span>
                        </h2>
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className={`space-y-12 leading-relaxed font-light text-2xl max-w-2xl transition-colors duration-500 ${
                                isDark ? "text-white/60" : "text-[#1f2937]/80"
                            }`}
                        >
                            <p className={`border-l-2 transition-colors duration-500 pl-12 italic ${
                                isDark ? "border-accent/40 text-white/80" : "border-accent text-[#111827]/90"
                            }`}>
                                Founded on the principles of minimalism and meticulous craftsmanship, LUXE has been redefining the boundaries of modern fashion since its inception.
                            </p>
                            <p className={`pl-12 text-sm tracking-[0.3em] uppercase font-bold transition-colors duration-500 ${
                                isDark ? "text-white/50" : "text-[#1f2937]/60"
                            }`}>
                                We believe true luxury lies in simplicity and the quality of every single stitch. Our collections are designed for those seeking pieces that transition seamlessly through life.
                            </p>
                        </motion.div>

                        <div className="mt-24 flex flex-wrap items-center gap-x-24 gap-y-12">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="group/stat cursor-default"
                            >
                                <span className={`block text-6xl md:text-7xl font-serif mb-3 group-hover/stat:text-accent transition-colors duration-700 ${
                                    isDark ? "text-white" : "text-[#111827]"
                                }`}>12+</span>
                                <span className={`text-[10px] uppercase tracking-[0.5em] font-black group-hover/stat:text-accent/60 transition-colors duration-700 ${
                                    isDark ? "text-white/40" : "text-[#1f2937]/50"
                                }`}>Years Excellence</span>
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className={`hidden md:block w-[1px] h-20 origin-top ${
                                    isDark ? "bg-white/10" : "bg-black/10"
                                }`}
                            />

                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 1 }}
                                className="group/stat cursor-default"
                            >
                                <span className={`block text-6xl md:text-7xl font-serif mb-3 group-hover/stat:text-accent transition-colors duration-700 ${
                                    isDark ? "text-white" : "text-[#111827]"
                                }`}>Pure</span>
                                <span className={`text-[10px] uppercase tracking-[0.5em] font-black group-hover/stat:text-accent/60 transition-colors duration-700 ${
                                    isDark ? "text-white/40" : "text-[#1f2937]/50"
                                }`}>Ethical Soul</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
