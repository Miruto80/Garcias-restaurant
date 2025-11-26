import React from 'react';
import '../assets/css/Menu.css';
import MenuCategory from '../components/MenuCategory.jsx';
import {
  frituras,
  almuerzos,
  parrillas,
  sopas,
  contornos,
  arepas,
  combos,
  modernas,
  hamburguesas,
  patacones,
  cachapas,
} from '../assets/data/Menu.js';

export default function Menu() {
  return (
    <section className="menu">
      <h1 className="menu-title">Nuestro Menú</h1>
      <h2 className="menu-subtitle">Cocina de estilo latinoamericana</h2>

      <MenuCategory
        title="Frituras"
        items={frituras}
        backgroundImage="/img/Fondos/Hambuerguesa.png"
      />
      <MenuCategory
        title="Almuerzos"
        items={almuerzos}
        backgroundImage="/img/Fondos/arroz.png"
      />
      <MenuCategory
        title="Parrillas"
        items={parrillas}
        backgroundImage="/img/Fondos/carne_recortada.png"
      />
      <MenuCategory
        title="Sopas"
        items={sopas}
        backgroundImage="/img/Fondos/sopa.png"
      />
      <MenuCategory
        title="Contornos"
        items={contornos}
        backgroundImage="/img/Fondos/contornos.png"
      />
      <MenuCategory
        title="Arepas"
        items={arepas}
        backgroundImage="/img/Fondos/arepas.png"
      />
      <MenuCategory
        title="Combos"
        items={combos}
        backgroundImage="/img/Fondos/combos.png"
      />
      <MenuCategory
        title="Modernas"
        items={modernas}
        backgroundImage="/img/Fondos/modernas.png"
      />
      <MenuCategory
        title="Hamburguesas"
        items={hamburguesas}
        backgroundImage="/img/Fondos/hamburguesas.png"
      />
      <MenuCategory
        title="Patacones"
        items={patacones}
        backgroundImage="/img/Fondos/patacones.png"
      />
      <MenuCategory
        title="Cachapas"
        items={cachapas}
        backgroundImage="/img/Fondos/cachapas.png"
      />
    </section>
  );
}