import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function BrandStory({ noTitle }) {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

    return (
        <section 
            id="brand-story" 
            ref={sectionRef}
            className="relative min-h-[90vh] flex items-center overflow-hidden py-32 bg-[#0a1128]"
        >
            {/* Background Parallax Image */}
            <motion.div 
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <img 
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920"
                    alt="Brand Heritage"
                    className="w-full h-full object-cover grayscale opacity-50"
                />
            </motion.div>

            {/* Overlays */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-[#0a1128]/40 to-[#0a1128]" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent" />

            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <div className="flex flex-col lg:flex-row justify-end">
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="max-w-2xl lg:pl-12"
                    >
                        {!noTitle && (
                            <span className="uppercase tracking-[0.5em] text-[10px] font-black text-accent mb-8 block">Our Legacy</span>
                        )}
                        <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-[1.05] text-white tracking-tighter">
                            Crafting Timeless <br />
                            <span className="italic font-light opacity-80 decoration-accent/30 decoration-1">Sophistication</span>
                        </h2>
                        
                        <div className="space-y-10 text-white/70 leading-relaxed font-light text-xl">
                            <p className="border-l-2 border-accent/30 pl-10 italic">
                                Founded on the principles of minimalism and meticulous craftsmanship, LUXE has been redefining the boundaries of modern fashion since its inception. We believe that true luxury lies in simplicity and the quality of every single stitch.
                            </p>
                            <p className="border-l-2 border-transparent pl-10">
                                Our collections are designed for those who navigate the world with effortless grace, seeking pieces that transition seamlessly through the chapters of a life well-lived.
                            </p>
                        </div>

                        <div className="mt-20 flex items-center space-x-16">
                            <div className="group/stat cursor-default">
                                <span className="block text-5xl font-serif text-white mb-2 group-hover/stat:text-accent transition-colors duration-500">10+</span>
                                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black group-hover/stat:text-white/50 transition-colors duration-500">Years of Design</span>
                            </div>
                            <div className="w-[1px] h-16 bg-white/10"></div>
                            <div className="group/stat cursor-default">
                                <span className="block text-5xl font-serif text-white mb-2 group-hover/stat:text-accent transition-colors duration-500">Ethical</span>
                                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-black group-hover/stat:text-white/50 transition-colors duration-500">Sourcing</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
