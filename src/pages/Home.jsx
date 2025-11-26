import React from 'react'
import Hero from '../components/Hero.jsx'
import FoodSlider from '../components/FoodSlider.jsx';
import ReservationSection from '../components/Reservation.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <FoodSlider />
      <ReservationSection />
    </>
  );
}
