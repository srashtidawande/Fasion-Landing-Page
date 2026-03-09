import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { products } from '../../data/products';
import { Button } from '../ui/Button';

// Sync with Navbar data structure
const departmentsData = [
    {
        name: 'Women',
        categories: ['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Footwear', 'Accessories']
    },
    {
        name: 'Men',
        categories: ['Tops', 'Bottoms', 'Outerwear', 'Footwear', 'Accessories', 'Formal Wear']
    },
    {
        name: 'Kids',
        categories: ['Boys (4-12)', 'Girls (4-12)', 'Baby (0-3)', 'Toys', 'Accessories']
    },
    {
        name: 'Beauty',
        categories: ['Skincare', 'Makeup', 'Fragrance', 'Wellness', 'Tools']
    }
];

const departmentNames = ["All", ...departmentsData.map(d => d.name)];

export function ProductGrid({ onOpenModal }) {
    const location = useLocation();
    const [activeDepartment, setActiveDepartment] = useState("All");
    const [activeCategory, setActiveCategory] = useState("All");
    const [sortBy, setSortBy] = useState("default");
    const [searchTerm, setSearchTerm] = useState("");

    // Dynamic categories based on selection
    const availableCategories = useMemo(() => {
        if (activeDepartment === "All") {
            // Flatten all categories for 'All' department
            const allCats = departmentsData.flatMap(d => d.categories);
            return ["All", ...new Set(allCats)];
        }
        const dept = departmentsData.find(d => d.name === activeDepartment);
        return ["All", ...(dept?.categories || [])];
    }, [activeDepartment]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const deptParam = params.get('department');
        const catParam = params.get('category');
        const searchParam = params.get('search');

        if (deptParam && departmentNames.includes(deptParam)) {
            setActiveDepartment(deptParam);
        } else {
            setActiveDepartment("All");
        }

        // Delay category setting to ensure availableCategories is updated or handles it
        if (catParam) {
            setActiveCategory(catParam);
        } else {
            setActiveCategory("All");
        }

        if (searchParam) {
            setSearchTerm(searchParam);
        } else {
            setSearchTerm("");
        }
    }, [location.search]);

    const filteredProducts = useMemo(() => {
        let result = products;

        if (activeDepartment !== "All") {
            result = result.filter(p => p.department === activeDepartment);
        }

        if (activeCategory !== "All") {
            result = result.filter(p => p.category === activeCategory);
        }

        if (searchTerm) {
            const query = searchTerm.toLowerCase();
            result = result.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query) ||
                p.department.toLowerCase().includes(query)
            );
        }

        if (sortBy === "price-asc") {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-desc") {
            result = [...result].sort((a, b) => b.price - a.price);
        }

        return result;
    }, [activeDepartment, activeCategory, sortBy, searchTerm]);

    return (
        <section id="collections" className="py-20 px-6 md:px-12 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
            <div className="container mx-auto">
                <div className="flex flex-col mb-16 space-y-8">
                    {/* Department Filter */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                            {departmentNames.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setActiveDepartment(dept)}
                                    className="relative py-2 group cursor-pointer"
                                >
                                    <span className={`text-sm uppercase tracking-[0.3em] transition-all duration-300 ${activeDepartment === dept
                                        ? 'text-black dark:text-white font-bold'
                                        : 'text-gray-400 hover:text-black dark:hover:text-white font-medium'
                                        }`}>
                                        {dept}
                                    </span>
                                    {activeDepartment === dept && (
                                        <motion.div
                                            layoutId="activeDept"
                                            className="absolute -bottom-1 left-0 right-0 h-1 bg-accent"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 relative group">
                            <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black">Sort By</span>
                            <div className="relative min-w-[160px]">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="appearance-none w-full bg-transparent border-b border-black/5 dark:border-white/5 py-2 pl-0 pr-8 text-[11px] font-black uppercase tracking-widest outline-none cursor-pointer focus:border-accent dark:focus:border-accent transition-all dark:text-white"
                                >
                                    <option value="default" className="dark:bg-[#0f0f0f]">Featured</option>
                                    <option value="price-asc" className="dark:bg-[#0f0f0f]">Price: Low to High</option>
                                    <option value="price-desc" className="dark:bg-[#0f0f0f]">Price: High to Low</option>
                                </select>
                                <ChevronRight size={10} className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 group-hover:text-accent transition-colors" />
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
                            </div>
                        </div>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start border-t border-gray-100 dark:border-white/5 pt-8">
                        {availableCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="relative py-1 group cursor-pointer"
                            >
                                <span className={`text-[10px] uppercase tracking-[0.25em] transition-all duration-300 ${activeCategory === cat
                                    ? 'text-accent font-bold'
                                    : 'text-gray-400 hover:text-black dark:hover:text-white font-medium'
                                    }`}>
                                    {cat}
                                </span>
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeCategory"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent/30"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} onOpenModal={onOpenModal} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-muted dark:text-gray-400 transition-colors">
                        <p>No products found in this category.</p>
                        <Button
                            variant="outline"
                            className="mt-4"
                            onClick={() => {
                                setActiveCategory("All");
                                setActiveDepartment("All");
                                setSearchTerm("");
                                // Clear URL params
                                window.history.pushState({}, '', window.location.pathname);
                            }}
                        >
                            Clear All Filters
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
