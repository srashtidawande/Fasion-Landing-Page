import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';

const categories = [
    {
        title: "Men",
        image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format,compress&fit=crop&q=70&w=600&h=800",
        objectPosition: "center top",
        link: "/shop?department=Men",
        desc: "The pinnacle of modern masculinity"
    },
    {
        title: "Women",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format,compress&fit=crop&q=70&w=600&h=800",
        objectPosition: "center top",
        link: "/shop?department=Women",
        desc: "Ethereal elegance, redefined"
    },
    {
        title: "Accessories",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format,compress&fit=crop&q=70&w=600&h=800",
        objectPosition: "center center",
        link: "/shop?category=Accessories",
        desc: "The art of curated finishing touches"
    },
    {
        title: "New Arrivals",
        image: "https://images.unsplash.com/photo-1549046460-90c2fb1c49b8?auto=format,compress&fit=crop&q=70&w=600&h=800",
        objectPosition: "center center",
        link: "/shop?isNew=true",
        desc: "Pre-order the future of style"
    }
];

const cardVariants = {
    hidden:  { opacity: 0, y: 48, scale: 0.98 },
    visible: (i) => ({
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
    })
};

export function CategorySection() {
    return (
        <section id="categories" className="relative section-padding overflow-hidden">
            {/* Section Background */}
            <div className="absolute inset-0 z-0">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1441998895906-a551820610dd?auto=format,compress&fit=crop&q=50&w=1280"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover opacity-30 grayscale saturate-50"
                />
                <div className="absolute inset-0 bg-[#07090f]" style={{ opacity: 0.92 }} />
                <div className="absolute inset-0 bg-gradient-to-b from-[#07090f] via-transparent to-[#07090f] opacity-80" />
            </div>

            <div className="relative z-10 container-custom">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 md:mb-32 gap-12 relative">
                    <div className="max-w-4xl relative">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-6 mb-8"
                        >
                            <span className="w-16 h-px bg-accent/60" />
                            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-accent/80">Curated Collection</span>
                        </motion.div>
                        
                        <motion.h2
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[clamp(3.5rem,10vw,10rem)] font-serif tracking-tighter leading-[0.8] text-white"
                        >
                            <span className="block font-semibold">Browse by</span>
                            <span className="block font-light italic ml-16 sm:ml-28 lg:ml-40 text-accent/90 drop-shadow-2xl opacity-90">
                                Department
                            </span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="hidden md:block flex-shrink-0 self-end mb-4"
                    >
                        <Link
                            to="/shop"
                            className="group/view-all inline-flex items-center gap-6 text-[11px] uppercase tracking-[0.5em] font-black text-white/80 hover:text-white transition-all duration-500"
                        >
                            <span className="relative">
                                View Entire Atelier
                                <span className="absolute -bottom-4 left-0 w-0 h-px bg-accent group-hover/view-all:w-full transition-all duration-500" />
                            </span>
                            <span className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover/view-all:border-accent group-hover/view-all:bg-accent group-hover/view-all:text-white transition-all duration-700 shadow-2xl group-hover/view-all:shadow-accent/40 rotate-45 group-hover/view-all:rotate-0">
                                <ArrowUpRight size={20} />
                            </span>
                        </Link>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            custom={idx}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            className="group relative"
                        >
                            <Link to={cat.link} className="block relative h-[520px] md:h-[640px] overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-700 ease-[var(--ease-premium)] group-hover:-translate-y-4">
                                {/* Image Overlay for depth */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-[2]" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-[1]" />

                                {/* Image */}
                                <ImageWithFallback
                                    src={cat.image}
                                    alt={cat.title}
                                    loading="lazy"
                                    style={{ objectPosition: cat.objectPosition }}
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[var(--ease-premium)] scale-105 group-hover:scale-115 grayscale-[0.3] group-hover:grayscale-0 contrast-[1.05]"
                                />

                                {/* Interactive glass border (inner) */}
                                <div className="absolute inset-4 rounded-[1.8rem] border border-white/0 group-hover:border-white/10 transition-all duration-700 z-[3]" />

                                {/* Index tag */}
                                <div className="absolute top-10 right-10 z-[3]">
                                    <span className="text-white/5 text-6xl font-serif italic select-none group-hover:text-accent/20 transition-all duration-700 group-hover:scale-110 block">
                                        0{idx + 1}
                                    </span>
                                </div>

                                {/* Text Content */}
                                <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                                    {/* Category label pill */}
                                    <div className="mb-6 overflow-hidden">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[var(--ease-premium)]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-white">Season 2026</span>
                                        </div>
                                    </div>

                                    <div className="relative group-hover:translate-x-2 transition-transform duration-500">
                                        <h3 className="text-4xl md:text-5xl font-serif text-white mb-3 tracking-tight leading-tight group-hover:text-accent transition-colors duration-500">
                                            {cat.title}
                                        </h3>
                                        <p className="max-w-[200px] text-white/50 text-[10px] tracking-[0.2em] uppercase font-bold leading-relaxed group-hover:text-white/80 transition-all duration-500">
                                            {cat.desc}
                                        </p>
                                    </div>

                                    {/* Action bar */}
                                    <div className="mt-8 pt-8 border-t border-white/5 group-hover:border-accent/10 transition-all duration-700 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="px-6 py-3 bg-white text-black rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 font-black text-[9px] uppercase tracking-[0.3em] shadow-2xl">
                                                Shop {cat.title}
                                            </div>
                                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 group-hover:translate-x-4 opacity-100 group-hover:opacity-0 transition-all duration-500 absolute">
                                                Discover Collection
                                            </span>
                                        </div>
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/0 group-hover:text-white group-hover:border-accent group-hover:bg-accent transition-all duration-500 -rotate-45 group-hover:rotate-0 shadow-lg group-hover:shadow-accent/40">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile "View All" link */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 flex justify-center md:hidden"
                >
                    <Link
                        to="/shop"
                        className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60 border-b border-white/20 pb-2 hover:text-accent hover:border-accent transition-all duration-300"
                    >
                        View All Categories
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
