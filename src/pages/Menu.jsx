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
            <MenuCategory id="frituras" title="Frituras" items={frituras} backgroundImage="/img/Fondos/Hambuerguesa.png" />
            <MenuCategory id="almuerzos" title="Almuerzos" items={almuerzos} backgroundImage="/img/Fondos/arroz.png" />
            <MenuCategory id="parrillas" title="Parrillas" items={parrillas} backgroundImage="/img/Fondos/carne_recortada.png" />
            <MenuCategory id="sopas" title="Sopas" items={sopas} backgroundImage="/img/Fondos/sopa.png" />
            <MenuCategory id="contornos" title="Contornos" items={contornos} backgroundImage="/img/Fondos/contornos.png" />
            <MenuCategory id="arepas" title="Arepas" items={arepas} backgroundImage="/img/Fondos/arepas.png" />
            <MenuCategory id="combos" title="Combos" items={combos} backgroundImage="/img/Fondos/combos.png" />
            <MenuCategory id="modernas" title="Modernas" items={modernas} backgroundImage="/img/Fondos/modernas.png" />
            <MenuCategory id="hamburguesas" title="Hamburguesas" items={hamburguesas} backgroundImage="/img/Fondos/hamburguesas.png" />
            <MenuCategory id="patacones" title="Patacones" items={patacones} backgroundImage="/img/Fondos/patacones.png" />
            <MenuCategory id="cachapas" title="Cachapas" items={cachapas} backgroundImage="/img/Fondos/cachapas.png" />
          </section>
        </div>
      </div>
    </div>
  );
}