import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const offers = [
    {
        id: 1,
        title: "The Resort Issue",
        subtitle: "From ₹2,499*",
        description: "Sale starts 13th March, 12 PM",
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800",
        bg: "bg-[#f8f8f8]",
        textColor: "text-black",
        badge: "NEW ARRIVALS",
        bankOffer: "Instant ₹400 Off on Credit Card Transactions",
        path: "/shop?department=Women"
    },
    {
        id: 2,
        title: "Modern Essentials",
        subtitle: "From ₹1,299*",
        description: "Ask our Stylists anything",
        image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800",
        bg: "bg-[#e0f7fa]",
        textColor: "text-blue-900",
        badge: "CURATED",
        bankOffer: "10% Instant Discount with LUXE Card",
        path: "/shop"
    },
    {
        id: 3,
        title: "Flash Sale",
        subtitle: "Min. 60% Off",
        description: "Outerwear, Accessories & more",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
        bg: "bg-[#e53935]",
        textColor: "text-white",
        badge: "BIG SAVINGS",
        bankOffer: "Additional 5% Cashback",
        path: "/shop?search=Sale"
    },
    {
        id: 4,
        title: "Atelier Bridal",
        subtitle: "Exclusively Custom",
        description: "Private appointments available",
        image: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=800",
        bg: "bg-[#fffafa]",
        textColor: "text-black",
        badge: "ATELIER",
        bankOffer: "No Cost EMI up to 12 Months",
        path: "/about"
    },
    {
        id: 5,
        title: "Global Street",
        subtitle: "Urban Terrain",
        description: "Limited Edition Drop",
        image: "https://images.unsplash.com/photo-1523381235312-3a1647fa9921?auto=format&fit=crop&q=80&w=800",
        bg: "bg-[#f3e5f5]",
        textColor: "text-purple-900",
        badge: "STREETWEAR",
        bankOffer: "Flat ₹500 Off with UPI",
        path: "/shop?department=Men"
    }
];

export function OffersGrid() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsPerPage(1);
            else if (window.innerWidth < 1024) setItemsPerPage(2);
            else setItemsPerPage(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, offers.length - itemsPerPage);
    
    const next = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
    const prev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

    return (
        <section className="pt-10 pb-20 px-6 md:px-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto relative">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-sm font-black uppercase tracking-[0.4em] text-accent mb-2">Exclusive Offers</h2>
                        <p className="text-3xl font-serif italic dark:text-white">Big Saving Days</p>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button 
                            onClick={prev}
                            disabled={currentIndex === 0}
                            className={`p-4 rounded-full border border-black/5 dark:border-white/5 transition-all ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-accent hover:text-white dark:text-white'}`}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button 
                            onClick={next}
                            disabled={currentIndex === maxIndex}
                            className={`p-4 rounded-full border border-black/5 dark:border-white/5 transition-all ${currentIndex === maxIndex ? 'opacity-20 cursor-not-allowed' : 'hover:bg-accent hover:text-white dark:text-white'}`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <motion.div 
                        className="flex gap-6 cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ right: 0, left: -((offers.length - itemsPerPage) * (window.innerWidth / itemsPerPage + 24)) }}
                        animate={{ x: `calc(-${currentIndex * (100 / itemsPerPage)}% - ${currentIndex * (24 / itemsPerPage)}px)` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onDragEnd={(e, { offset }) => {
                            const swipe = offset.x > 50 ? -1 : offset.x < -50 ? 1 : 0;
                            if (swipe !== 0) {
                                const nextIndex = Math.max(0, Math.min(currentIndex + swipe, maxIndex));
                                setCurrentIndex(nextIndex);
                            }
                        }}
                    >
                        {offers.map((offer) => (
                            <div 
                                key={offer.id}
                                className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] shrink-0"
                                onClick={() => navigate(offer.path)}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: (offer.id % itemsPerPage) * 0.1 }}
                                    className={`${offer.bg} rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group min-h-[420px] flex flex-col justify-between border border-black/5 dark:border-white/5 shadow-sm hover:shadow-2xl hover:border-accent/20 transition-all duration-500 cursor-pointer active:scale-[0.98]`}
                                >
                                    {/* Content */}
                                    <div className="relative z-10 max-w-[70%]">
                                        <div className="flex items-center gap-2 mb-6">
                                            <span className={`text-[10px] font-black tracking-[0.3em] uppercase px-3 py-1 rounded-full border ${offer.textColor === 'text-white' ? 'border-white/20' : 'border-black/10'}`}>
                                                {offer.badge}
                                            </span>
                                        </div>
                                        <h3 className={`text-4xl md:text-5xl font-serif italic mb-4 leading-tight ${offer.textColor}`}>
                                            {offer.title}
                                        </h3>
                                        <div className="space-y-1">
                                            <p className={`text-2xl md:text-3xl font-black tracking-tight ${offer.textColor}`}>
                                                {offer.subtitle}
                                            </p>
                                            <p className={`text-xs uppercase tracking-widest opacity-60 ${offer.textColor}`}>
                                                {offer.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bank Offer Bar */}
                                    <div className="relative z-10 mt-auto">
                                        <div className={`flex items-center justify-between p-3 rounded-2xl ${offer.textColor === 'text-white' ? 'bg-white/10' : 'bg-black/5'} backdrop-blur-sm border ${offer.textColor === 'text-white' ? 'border-white/10' : 'border-black/5'}`}>
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white shrink-0">
                                                    <Sparkles size={14} />
                                                </div>
                                                <p className={`text-[10px] md:text-[11px] font-bold uppercase tracking-wider leading-tight ${offer.textColor}`}>
                                                    {offer.bankOffer}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="absolute top-0 right-0 p-2 opacity-20 pointer-events-none">
                                            <span className={`text-[8px] font-black uppercase tracking-widest ${offer.textColor}`}>AD</span>
                                        </div>
                                    </div>

                                    {/* Image Background Element */}
                                    <div className="absolute right-0 bottom-0 w-[45%] h-[75%] pointer-events-none group-hover:scale-110 transition-transform duration-1000 origin-bottom-right">
                                        <img
                                            src={offer.image}
                                            alt=""
                                            className="w-full h-full object-contain object-right-bottom drop-shadow-2xl"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                </div>
                
                {/* Functional Dots Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-10 bg-accent' : 'w-2 bg-black/10 dark:bg-white/10'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
