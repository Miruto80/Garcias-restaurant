import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero.jsx'
import FoodSlider from '../components/FoodSlider.jsx';
import ReservationSection from '../components/Reservation.jsx';
import Info from '../components/Info.jsx';
import SEO from '../components/SEO.jsx';
import promociones from '../assets/data/Promos.js';
import PromoSlider from '../components/PromoSlider.jsx';

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
      <SEO
        title="Inicio"
        description="Bienvenido a Garcia's Restaurant — arepas, parrillas y auténticos sabores venezolanos en Dallas. Reserva ahora."
        url="https://www.garciasrestaurantmarket.com/"
        image="/img/Logos/garcias-101.webp"
      />
      <Hero />
        <div id="el-lugar">
        <Info />
      </div>
      <PromoSlider promociones={promociones} />
      <FoodSlider />
      <div id="reservas">
        <ReservationSection />
      </div>
    </>
  );
}
