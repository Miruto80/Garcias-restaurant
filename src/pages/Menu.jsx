import React from 'react';
import '../assets/css/Menu.css';
import MenuCategory from '../components/MenuCategory.jsx';
import MenuFilter from '../components/MenuFilter.jsx';
import {
  frituras, almuerzos, parrillas, sopas, contornos,
  arepas, combos, modernas, hamburguesas, patacones, cachapas,
} from '../assets/data/Menu.js';

export default function Menu() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar (solo desktop, el componente maneja visibilidad) */}
        <div className="col-lg-3">
          <MenuFilter />
        </div>

        {/* Contenido */}
        <div className="col-lg-9">
          <section className="menu">
            <MenuCategory id="frituras" title="Frituras" items={frituras} backgroundImage="/img/Fondos/Hambuerguesa.webp" />
            <MenuCategory id="almuerzos" title="Almuerzos" items={almuerzos} backgroundImage="/img/Fondos/arroz.webp" />
            <MenuCategory id="parrillas" title="Parrillas" items={parrillas} backgroundImage="/img/Fondos/carne_recortada.webp" />
            <MenuCategory id="sopas" title="Sopas" items={sopas} backgroundImage="/img/Fondos/sopa.webp" />
            <MenuCategory id="contornos" title="Contornos" items={contornos} backgroundImage="/img/Fondos/contornos.webp" />
            <MenuCategory id="arepas" title="Arepas" items={arepas} backgroundImage="/img/Fondos/arepas.webp" />
            <MenuCategory id="combos" title="Combos" items={combos} backgroundImage="/img/Fondos/combos.webp" />
            <MenuCategory id="modernas" title="Modernas" items={modernas} backgroundImage="/img/Fondos/modernas.webp" />
            <MenuCategory id="hamburguesas" title="Hamburguesas" items={hamburguesas} backgroundImage="/img/Fondos/hamburguesas.webp" />
            <MenuCategory id="patacones" title="Patacones" items={patacones} backgroundImage="/img/Fondos/patacones.webp" />
            <MenuCategory id="cachapas" title="Cachapas" items={cachapas} backgroundImage="/img/Fondos/cachapas.webp" />
          </section>
        </div>
      </div>
    </div>
  );
}