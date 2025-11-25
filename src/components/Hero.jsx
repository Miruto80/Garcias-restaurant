import React from 'react';
import '../assets/css/Hero.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>GARCIA’S RESTAURANT & MARKET</h1>
          <Link to="/gallery" className="hero-button">VER GALERÍA</Link>
        </div>
      </div>
    </section>
  );
}