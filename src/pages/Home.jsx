import React from 'react'
import Hero from '../components/Hero.jsx'
import FoodSlider from '../components/FoodSlider.jsx';
import ReservationSection from '../components/Reservation.jsx';
import Info from '../components/Info.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Info />
      <FoodSlider />
      <ReservationSection />
    </>
  );
}
