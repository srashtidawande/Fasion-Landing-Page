import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
    {
        title: "Men",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800",
        link: "/shop?department=Men",
        desc: "Refined Modern tailoring"
    },
    {
        title: "Women",
        image: "https://images.unsplash.com/photo-1539109132381-3151b5aed2cd?auto=format&fit=crop&q=80&w=800",
        link: "/shop?department=Women",
        desc: "Sophisticated effortless grace"
    },
    {
        title: "Accessories",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        link: "/shop?category=Accessories",
        desc: "The essential curated details"
    },
    {
        title: "New Arrivals",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
        link: "/shop?isNew=true",
        desc: "Stay ahead of the season"
    }
];

export function CategorySection() {
    return (
        <section id="categories" className="relative section-padding overflow-hidden group/section">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1441998895906-a551820610dd?auto=format&fit=crop&q=80&w=1920" 
                    alt="Background" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover/section:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-[#0a1128]/95 mix-blend-multiply" /> {/* Deep navy overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1128]/50 to-[#0a1128]" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-accent uppercase tracking-[0.5em] text-[10px] font-black mb-6 block"
                        >
                            Curated Selection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-serif font-light text-white tracking-tight leading-tight"
                        >
                            Browse by <span className="italic font-light opacity-80">Department</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <Link to="/shop" className="text-[10px] uppercase tracking-[0.4em] font-bold text-white border-b border-white/30 pb-3 hover:border-accent hover:text-accent transition-all">
                            View All Categories
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.15 }}
                            className="group relative h-[450px] md:h-[550px] overflow-hidden cursor-pointer rounded-2xl border border-white/5 backdrop-blur-sm"
                        >
                            <Link to={cat.link}>
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                                </div>

                                <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                                    <div className="mb-6">
                                        <motion.h3
                                            className="text-3xl font-serif text-white mb-3 tracking-wide"
                                        >
                                            {cat.title}
                                        </motion.h3>
                                        <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-light leading-relaxed max-w-[200px]">
                                            {cat.desc}
                                        </p>
                                    </div>
                                    
                                    <div className="pt-6 border-t border-white/10 flex items-center gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="h-[1px] w-8 bg-accent" />
                                        <span className="text-[9px] uppercase tracking-[0.4em] font-black text-white">Discover</span>
                                    </div>
                                </div>

                                <div className="absolute top-10 right-10 z-10">
                                    <span className="text-white/10 text-6xl font-serif italic group-hover:text-accent/20 transition-colors duration-500">
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
