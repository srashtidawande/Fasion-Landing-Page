import { Hero } from '../components/features/Hero';
import { OffersGrid } from '../components/features/OffersGrid';
import { FeaturedProducts } from '../components/features/FeaturedProducts';
import { CategorySection } from '../components/features/CategorySection';
import { BrandStory } from '../components/features/BrandStory';
import { Testimonials } from '../components/features/Testimonials';
import { Newsletter } from '../components/features/Newsletter';

export function Home({ onOpenModal }) {
    return (
        <div className="flex flex-col">
            <Hero />
            <OffersGrid />
            <FeaturedProducts onOpenModal={onOpenModal} />
            <CategorySection />
            <BrandStory />
            <Testimonials />
            <Newsletter />
        </div>
    );
}
