import { Hero } from '../components/features/Hero';
import { OffersGrid } from '../components/features/OffersGrid';
import { Collections } from '../components/features/Collections';
import { FeaturedProducts } from '../components/features/FeaturedProducts';
import { LookbookSection } from '../components/features/LookbookSection';
import { CategorySection } from '../components/features/CategorySection';
import { BrandStory } from '../components/features/BrandStory';
import { Testimonials } from '../components/features/Testimonials';
import { SocialGallery } from '../components/features/SocialGallery';
import { Newsletter } from '../components/features/Newsletter';

export function Home({ onOpenModal }) {
    return (
        <div className="flex flex-col">
            <Hero />
            <OffersGrid />
            <Collections />
            <FeaturedProducts onOpenModal={onOpenModal} />
            <LookbookSection />
            <CategorySection />
            <BrandStory />
            <Testimonials />
            <SocialGallery />
            <Newsletter />
        </div>
    );
}
