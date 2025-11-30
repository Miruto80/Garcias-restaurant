import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero.jsx'
import FoodSlider from '../components/FoodSlider.jsx';
import ReservationSection from '../components/Reservation.jsx';
import Info from '../components/Info.jsx';

export default function Home() {
   const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 150); // pequeño delay para que cargue el DOM
      }
    }
  }, [hash]);
  return (
    <>
      <Hero />
        <div id="el-lugar">
        <Info />
      </div>
      <FoodSlider />
      <div id="reservas">
        <ReservationSection />
      </div>
    </>
  );
}
