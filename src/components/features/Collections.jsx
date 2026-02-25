import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const collections = [
    {
        title: "Outerwear",
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800",
        link: "/shop?category=Outerwear",
        size: "large"
    },
    {
        title: "Dresses",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800",
        link: "/shop?category=Dresses",
        size: "small"
    },
    {
        title: "Accessories",
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
        link: "/shop?category=Accessories",
        size: "small"
    },
    {
        title: "Tops",
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800",
        link: "/shop?category=Tops",
        size: "small"
    },
    {
        title: "Bottoms",
        image: "https://images.unsplash.com/photo-1584310266947-920557285bf8?auto=format&fit=crop&q=80&w=800",
        link: "/shop?category=Bottoms",
        size: "small"
    }
];

export function Collections() {
    return (
        <section className="py-24 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-4 dark:text-white">Our Collections</h2>
                    <p className="text-muted dark:text-gray-400 tracking-widest uppercase text-xs">Curated selections for every occasion</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[800px]">
                    {/* Main Featured Collection */}
                    <Link
                        to={collections[0].link}
                        className="md:col-span-2 md:row-span-2 relative group overflow-hidden"
                    >
                        <img
                            src={collections[0].image}
                            alt={collections[0].title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                            <h3 className="text-4xl font-serif tracking-widest uppercase mb-4">{collections[0].title}</h3>
                            <span className="text-xs tracking-[0.3em] font-semibold border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Explore Collection</span>
                        </div>
                    </Link>

                    {/* Secondary Collections */}
                    <div className="grid grid-cols-2 md:col-span-2 gap-6">
                        {collections.slice(1, 3).map((item) => (
                            <Link
                                key={item.title}
                                to={item.link}
                                className="relative group overflow-hidden h-full"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                                    <h3 className="text-xl md:text-2xl font-serif tracking-widest uppercase text-center">{item.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:col-span-2 gap-6">
                        {collections.slice(3, 5).map((item) => (
                            <Link
                                key={item.title}
                                to={item.link}
                                className="relative group overflow-hidden h-full"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                                    <h3 className="text-xl md:text-2xl font-serif tracking-widest uppercase text-center">{item.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
