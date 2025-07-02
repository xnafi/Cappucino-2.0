import Banner from '@/components/view/Banner'
import CoffeeGallery from '@/components/view/CoffeeGallery';
import React from 'react'
import BookTableForm from '../../components/view/BookTable';
import PopularMenu from '@/components/view/PopularMenu';
import OurBlog from '@/components/view/OurBlog';
import Newsletter from '@/components/view/NewsLetter';
import { ContactUs } from '@/components/view/ContactUs';

export default function HomePage() {
  return (
    <div className="flex flex-col starfield-sparkle">
      <Banner />
      <PopularMenu />
      <CoffeeGallery />
      <BookTableForm />
      <OurBlog />
      <Newsletter />
      <ContactUs/>
    </div>
  );
}
