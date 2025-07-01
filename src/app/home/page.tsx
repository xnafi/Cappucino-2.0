import Banner from '@/components/view/Banner'
import CoffeeGallery from '@/components/view/CoffeeGallery';
import React from 'react'

export default function HomePage() {
  return (
    <div className="flex flex-col starfield-sparkle">
      <Banner />
      <CoffeeGallery/>
    </div>
  );
}
