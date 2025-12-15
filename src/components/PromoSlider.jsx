import React from "react";
import "../assets/css/PromoSlider.css";

const PromoSlider = ({ promociones }) => {
  return (
    <div>
     <div className="container text-center">
    <h2 className="display-6 m-2 fw-bold text-uppercase text-white">Promociones</h2>
  </div>
      <div className="promo-grid">
      {promociones.map((promo, index) => (
        <div className="promo-card" key={index}>
          
          {/* Imagen */}
          <div className="promo-img">
            <img src={promo.imagen} />
          </div>

          {/* Contenido */}
          <div className="promo-content">
            <h3 className="promo-title">{promo.titulo}</h3>
            <p className="promo-description">{promo.descripcion}</p>
          </div>

        </div>
      ))}
      </div>
    </div>
  );
};

export default PromoSlider;
