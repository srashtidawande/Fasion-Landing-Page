import { motion } from 'framer-motion';

export function BrandStory() {
    return (
        <section id="brand-story" className="section-padding bg-secondary dark:bg-[#1a1a1a] transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000"
                                alt="Brand Story"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square hidden md:block">
                            <img
                                src="https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80&w=500"
                                alt="Brand Detail"
                                loading="lazy"
                                className="w-full h-full object-cover shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className="uppercase tracking-[0.4em] text-[10px] font-black text-accent mb-6 block">Our Legacy</span>
                        <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-[1.1] dark:text-white tracking-tight">Crafting Timeless <br /><span className="italic font-light">Sophistication</span></h2>
                        <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                            <p>
                                Founded on the principles of minimalism and meticulous craftsmanship, LUXE has been redefining the boundaries of modern fashion since its inception. We believe that true luxury lies in simplicity and the quality of every single stitch.
                            </p>
                            <p>
                                Our collections are designed for those who navigate the world with effortless grace, seeking pieces that transition seamlessly through the chapters of a life well-lived.
                            </p>
                            <p>
                                Every fabric is ethically sourced and every design is born from a desire to create something that lasts—beyond seasons, beyond trends.
                            </p>
                        </div>
                        <div className="mt-12 flex items-center space-x-8">
                            <div>
                                <span className="block text-3xl font-serif">10+</span>
                                <span className="text-[10px] uppercase tracking-widest text-muted">Years of Design</span>
                            </div>
                            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
                            <div>
                                <span className="block text-3xl font-serif">Ethical</span>
                                <span className="text-[10px] uppercase tracking-widest text-muted">Sourcing</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
