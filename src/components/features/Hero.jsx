import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const slides = [
    {
        id: 1,
        title: "Elegance Redefined",
        subtitle: "Haute Couture • Spring 2026",
        description: "Experience the intersection of architectural precision and organic luxury.",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920"
    },
    {
        id: 2,
        title: "Timeless Craft",
        subtitle: "Exclusive Atelier",
        description: "Meticulously crafted pieces designed to last across generations.",
        image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=1920"
    },
    {
        id: 3,
        title: "Organic Luxury",
        subtitle: "Season Collective",
        description: "Celebrating the beauty of natural fibers and sustainable silhouettes.",
        image: "https://images.unsplash.com/photo-1539109132332-629ee63989c4?auto=format&fit=crop&q=80&w=1920"
    }
];

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const scrollToCollections = () => {
        const element = document.getElementById('collections');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <motion.div
                        animate={{ 
                            x: mousePos.x,
                            y: mousePos.y,
                            scale: 1.05
                        }}
                        transition={{ type: "tween", ease: "linear", duration: 0 }}
                        className="absolute inset-x-[-5%] inset-y-[-5%] w-[110%] h-[110%]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-10" />
                        <img
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            className="w-full h-full object-cover transition-opacity duration-1000"
                        />
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-6 flex flex-col items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, letterSpacing: "0.2em" }}
                            animate={{ opacity: 1, letterSpacing: "0.5em" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-white uppercase text-[10px] md:text-xs font-black mb-8 block drop-shadow-lg"
                        >
                            {slides[currentSlide].subtitle}
                        </motion.div>

                        <h1 className="flex flex-wrap justify-center mb-10 overflow-hidden py-4">
                            {slides[currentSlide].title.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "100%", rotateX: 90, opacity: 0 }}
                                    animate={{ y: 0, rotateX: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1.2,
                                        delay: 0.05 * index + 0.5,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className={`text-6xl md:text-[11rem] font-serif font-light text-white tracking-tighter leading-[0.85] ${char === " " ? "mr-10" : ""}`}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            className="flex flex-col md:flex-row gap-8 justify-center items-center"
                        >
                            <p className="text-white/70 text-sm md:text-base max-w-sm font-light tracking-widest leading-relaxed italic md:text-left md:border-l border-white/20 md:pl-8">
                                {slides[currentSlide].description}
                            </p>
                            <div className="flex gap-4">
                                <Button 
                                    variant="primary" 
                                    onClick={scrollToCollections}
                                    className="glass text-white border-white/30 px-12 py-5 hover:bg-white hover:text-black transition-all font-bold tracking-[0.3em] text-[10px] group"
                                >
                                    Explore Collection
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-1 h-20 transition-all duration-500 overflow-hidden relative ${idx === currentSlide ? 'bg-white opacity-100' : 'bg-white/20 opacity-50'}`}
                    >
                        {idx === currentSlide && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "100%" }}
                                transition={{ duration: 8, ease: "linear" }}
                                className="absolute top-0 left-0 w-full bg-accent"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 bg-black/10 backdrop-blur-sm p-4 rounded-full"
            >
                <span className="text-white/60 text-[8px] uppercase tracking-[0.6em] rotate-90 mb-8 font-black">Scroll</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent shadow-glow" />
            </motion.div>

            {/* Side Floating Elements */}
            <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 z-20 space-y-20">
                <div className="flex flex-col items-center text-white/20 gap-4">
                    <span className="text-[8px] font-black uppercase tracking-widest -rotate-90">Paris</span>
                    <span className="w-4 h-[1px] bg-white/20" />
                    <span className="text-[8px] font-black uppercase tracking-widest -rotate-90">London</span>
                    <span className="w-4 h-[1px] bg-white/20" />
                    <span className="text-[8px] font-black uppercase tracking-widest -rotate-90">New York</span>
                </div>
            </div>
        </section>
    );
}
