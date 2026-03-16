import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
    {
        title: "Men",
        image: "https://images.unsplash.com/photo-1594932224031-92f0797a36af?auto=format&fit=crop&q=80&w=800",
        link: "/shop?department=Men",
        desc: "Refined style for him"
    },
    {
        title: "Women",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
        link: "/shop?department=Women",
        desc: "Sophisticated elegance for her"
    },
    {
        title: "Accessories",
        image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&auto=format&fit=crop&q=80",
        link: "/shop?category=Accessories",
        desc: "The perfect finishing touch"
    },
    {
        title: "New Arrivals",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
        link: "/shop?isNew=true",
        desc: "Stay ahead of the curve"
    }
];

export function CategorySection() {
    return (
        <section id="categories" className="section-padding bg-secondary dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block"
                        >
                            Curated Selection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-serif font-light dark:text-white"
                        >
                            Browse by <span className="italic">Department</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <Link to="/shop" className="text-xs uppercase tracking-[0.3em] font-medium border-b border-primary dark:border-white pb-2 hover:text-accent hover:border-accent transition-all dark:text-white">
                            View All Categories
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative h-[400px] md:h-[500px] overflow-hidden cursor-pointer rounded-2xl md:rounded-none"
                        >
                            <Link to={cat.link}>
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                                </div>

                                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                                    <div className="overflow-hidden">
                                        <motion.h3
                                            className="text-2xl font-serif text-white mb-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
                                        >
                                            {cat.title}
                                        </motion.h3>
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-white/60 text-xs tracking-wider translate-y-12 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                            {cat.desc}
                                        </p>
                                    </div>
                                    <div className="mt-6 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                                        <div className="h-[1px] w-8 bg-white" />
                                        <span className="text-[10px] uppercase tracking-[0.3em] text-white">Explore</span>
                                    </div>
                                </div>

                                <div className="absolute top-8 right-8 z-10">
                                    <span className="text-white/20 text-4xl font-serif italic group-hover:text-accent/40 transition-colors duration-500">
                                        0{idx + 1}
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
