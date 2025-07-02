import Banner from '@/components/view/Banner'
import CoffeeGallery from '@/components/view/CoffeeGallery';
import React from 'react'
import BookTableForm from '../../components/view/BookTable';
import PopularMenu from '@/components/view/PopularMenu';

export default function HomePage() {
  return (
    <div className="flex flex-col starfield-sparkle">
      <Banner />
      <PopularMenu />
      <CoffeeGallery />
      <BookTableForm />
    </div>
  );
}
