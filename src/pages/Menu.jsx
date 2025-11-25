import React from 'react';
import MenuCard from '../components/MenuCard.jsx';
import '../assets/css/Menu.css';
import { frituras, almuerzos, parrillas,sopas,contornos,arepas,combos,modernas,hamburguesas,patacones,cachapas } from '../assets/data/Menu.js';  

export default function Menu() {
  return (
    <section className="menu">
      <h1 className="menu-title">Nuestro Menú</h1>
      <h2 className="menu-subtitle">Cocina de estilo latinoamericana</h2>
       <div className="menu-category">
        <h2 className='text-center'>Frituras</h2>
        <div className="menu-items">
          {frituras.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
       <div className="menu-category">
        <h2 className='text-center'>Almuerzos</h2>
        <div className="menu-items">
          {almuerzos.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
       <div className="menu-category">
        <h2 className='text-center'>Parrillas</h2>
        <div className="menu-items">
          {parrillas.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
       <div className="menu-category">
        <h2 className='text-center'>Sopas</h2>
        <div className="menu-items">
          {sopas.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
       <div className="menu-category">
        <h2 className='text-center'>Contornos</h2>
        <div className="menu-items">
          {contornos.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
       <div className="menu-category">
        <h2 className='text-center'>Arepas</h2>
        <div className="menu-items">
          {arepas.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
       <div className="menu-category">
        <h2 className='text-center'>Combos</h2>
        <div className="menu-items">
          {combos.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
       <div className="menu-category">
        <h2 className='text-center'>Modernas</h2>
        <div className="menu-items">
          {modernas.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
       <div className="menu-category">
        <h2 className='text-center'>Hamburguesas</h2>
        <div className="menu-items">
          {hamburguesas.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
       <div className="menu-category">
        <h2 className='text-center'>Patacones</h2>
        <div className="menu-items">
          {patacones.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
       <div className="menu-category">
        <h2 className='text-center'>Cachapas</h2>
        <div className="menu-items">
          {cachapas.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>


      {/* Repite para otras categorías */}
    </section>
  );
}