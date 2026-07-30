import HeroSection from '../components/HeroSection';
import ImpactCounter from '../components/ImpactCounter';
import AboutPreview from '../components/AboutPreview';
import WhatWeDo from '../components/WhatWeDo';
import GalleryPreview from '../components/GalleryPreview';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import ContactPreview from '../components/ContactPreview';

export default function Home() {
  return (
    <main style={{ padding: 0 }}>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Impact Counter Statistics */}
      <ImpactCounter />

      {/* 3. About Preview */}
      <AboutPreview />

      {/* 4. What We Do - Programs Section */}
      <WhatWeDo />

      {/* 5. Gallery Preview */}
      <GalleryPreview />

      {/* 6. Testimonials Slider */}
      <Testimonials />

      {/* 7. Infinite Logo Marquee */}
      <Partners />

      {/* 8. Pre-Footer Call to Action */}
      <ContactPreview />
    </main>
  );
}
