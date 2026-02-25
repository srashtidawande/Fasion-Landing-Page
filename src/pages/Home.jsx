import { Hero } from '../components/features/Hero';
import { CategorySection } from '../components/features/CategorySection';
import { BrandStory } from '../components/features/BrandStory';
import { Collections } from '../components/features/Collections';
import { Lookbook } from '../components/features/Lookbook';
import { SocialGallery } from '../components/features/SocialGallery';

export function Home({ onOpenModal }) {
    return (
        <>
            <Hero />
            <CategorySection />
            <BrandStory />
            <Collections />
            <Lookbook />
            <SocialGallery />
        </>
    );
}
