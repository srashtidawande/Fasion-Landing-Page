import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../ui/ImageWithFallback';

const collections = [
    {
        title: "Outerwear",
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format,compress&fit=crop&q=100&w=1200",
        link: "/shop?category=Outerwear",
        size: "large"
    },
    {
        title: "Dresses",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format,compress&fit=crop&q=100&w=800",
        link: "/shop?category=Dresses",
        size: "small"
    },
    {
        title: "Accessories",
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format,compress&fit=crop&q=100&w=800",
        link: "/shop?category=Accessories",
        size: "small"
    },
    {
        title: "Tops",
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format,compress&fit=crop&q=100&w=800",
        link: "/shop?category=Tops",
        size: "small"
    },
    {
        title: "Bottoms",
        image: "https://images.unsplash.com/photo-1584310266947-920557285bf8?auto=format,compress&fit=crop&q=100&w=800",
        link: "/shop?category=Bottoms",
        size: "small"
    },
    {
        title: "Boys",
        image: "https://images.unsplash.com/photo-1519457431-758c4a6ae7d1?auto=format,compress&fit=crop&q=100&w=800",
        link: "/shop?department=Kids&category=Boys",
        size: "small"
    },
    {
        title: "Girls",
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format,compress&fit=crop&q=100&w=800",
        link: "/shop?department=Kids&category=Girls",
        size: "small"
    },
    {
        title: "Baby",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format,compress&fit=crop&q=100&w=800",
        link: "/shop?department=Kids&category=Baby",
        size: "small"
    },
    {
        title: "Toys",
        image: "https://images.unsplash.com/photo-1532330393533-443990a51d10?auto=format,compress&fit=crop&q=100&w=800",
        link: "/shop?department=Kids&category=Toys",
        size: "small"
    },
    {
        title: "Skincare",
        image: "https://images.unsplash.com/photo-1556228720-197a67f8044d?auto=format,compress&fit=crop&q=100&w=800",
        link: "/shop?department=Beauty&category=Skincare",
        size: "small"
    },
    {
        title: "Makeup",
        image: "https://images.unsplash.com/photo-1522335715783-0805ae33bf17?auto=format,compress&fit=crop&q=100&w=800",
        link: "/shop?department=Beauty&category=Makeup",
        size: "small"
    },
    {
        title: "Wellness",
        image: "https://images.unsplash.com/photo-1544161515-4af6b1d46bd5?auto=format,compress&fit=crop&q=100&w=800",
        link: "/shop?department=Beauty&category=Wellness",
        size: "small"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export function Collections() {
    return (
        <section id="collections" className="section-padding bg-[var(--bg-primary)] transition-colors duration-500 overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col items-center mb-24 text-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overline-text"
                    >
                        Curated Selections
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="heading-luxury"
                    >
                        Our <span className="not-italic font-bold">Collections</span>
                    </motion.h2>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 h-auto"
                >
                    {collections.map((item) => (
                        <motion.div 
                            key={item.title} 
                            variants={itemVariants}
                            className={`${item.size === 'large' ? 'sm:col-span-2 sm:row-span-2' : ''}`}
                        >
                            <Link
                                to={item.link}
                                className={`relative block group overflow-hidden rounded-[2.5rem] shadow-xl transition-all duration-700 hover:-translate-y-3 ${
                                    item.size === 'large' 
                                    ? 'h-[450px] sm:h-full min-h-[500px]' 
                                    : 'h-[400px] sm:h-[450px]'
                                }`}
                            >
                                <ImageWithFallback
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 saturate-[0.85] group-hover:saturate-100"
                                />
                                <div className={`absolute inset-0 transition-all duration-700 ${
                                    item.size === 'large' 
                                    ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40' 
                                    : 'bg-black/30 group-hover:bg-accent/40 mix-blend-multiply'
                                }`} />
                                
                                <div className={`absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center`}>
                                    <motion.div className="mb-4 overflow-hidden">
                                         <h3 className={`${
                                            item.size === 'large' ? 'text-4xl lg:text-5xl' : 'text-xl md:text-2xl'
                                         } font-serif tracking-widest uppercase group-hover:scale-110 transition-transform duration-700`}>
                                            {item.title}
                                         </h3>
                                    </motion.div>
                                    <div className={`h-px bg-accent transition-all duration-700 ${
                                        item.size === 'large' ? 'w-0 group-hover:w-24' : 'w-0 group-hover:w-16'
                                    }`} />
                                    
                                    {item.size === 'large' && (
                                        <span className="mt-8 text-[10px] tracking-[0.4em] font-black uppercase border border-white/20 px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-500">Explore Collection</span>
                                    )}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
