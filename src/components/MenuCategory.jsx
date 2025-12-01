import React, { useEffect, useRef, useState } from 'react';
import MenuCard from './MenuCard.jsx';
import '../assets/css/MenuCategory.css';

export default function MenuCategory({id, title, items, backgroundImage }) {
  const [loadedBg, setLoadedBg] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (!backgroundImage) return;
    const el = ref.current;
    // fallback: carga inmediata si no hay observer
    const load = () => {
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => setLoadedBg(backgroundImage);
    };

    if (!el || !('IntersectionObserver' in window)) {
      load();
      return;
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            load();
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '200px' } // precarga antes de que entre completamente
    );

    io.observe(el);
    return () => io.disconnect();
  }, [backgroundImage]);

  return (
    <div
      id={id}
      ref={ref}
      className="menu-category"
      style={{
        backgroundImage: loadedBg ? `url(${loadedBg})` : 'none',
      }}
    >
      <div className="menu-overlay">
        <h2 className="menu-category-title">{title}</h2>
        <div className="menu-items">
          {items.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}