import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../assets/css/FoodSlider.css';

export default function FoodSlider() {
  return (
    <section className="food-slider">

      <Splide
        options={{
          type: 'loop',
          autoplay: true,
          interval: 3000,
          perPage: 4,        // 👈 4 imágenes por vista
          gap: '1rem',       // espacio entre imágenes
          arrows: true,
          pagination: true,
          breakpoints: {
            1024: { perPage: 3 }, // en tablets/medianas
            768: { perPage: 2 },  // en móviles medianos
            480: { perPage: 1 },  // en móviles pequeños
          },
        }}
      >
        <SplideSlide>
          <img src="/img/Sliders/carne.webp" alt="Plato destacado 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="/img/Sliders/pollo.webp" alt="Plato destacado 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="/img/Sliders/pabellon.webp" alt="Plato destacado 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="/img/Sliders/hambuerguesa.webp" alt="Plato destacado 4" />
        </SplideSlide>
        <SplideSlide>
          <img src="/img/Sliders/pastelitos.webp" alt="Plato destacado 5" />
        </SplideSlide>
        <SplideSlide>
          <img src="/img/Sliders/sopa.webp" alt="Plato destacado 6" />
        </SplideSlide>
        <SplideSlide>
          <img src="/img/Sliders/arroz.webp" alt="Plato destacado 7" />
        </SplideSlide>
        <SplideSlide>
          <img src="/img/Sliders/tajadas.webp" alt="Plato destacado 8" />
        </SplideSlide>
      </Splide>
    </section>
  );
}