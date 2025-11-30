import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Info.css';

export default function Info() {
  return (
 <section className="info-section text-white py-5" id="el-restaurante">
  <div className="container text-center mb-5">
    <h1 className="display-4 fw-bold text-uppercase">El Restaurante</h1>
    <p className="lead">Una experiencia que nace del sentir y pensar local, transformada en sabor y emoción.</p>
  </div>

  <div className="container">
    <div className="row g-4">

      <div className="col-md-4">
        <div className="info-card p-4 rounded-4 h-100">
          <i className="bi bi-fire text-warning fs-1 mb-3"></i>
          <h4 className="fw-bold">Tradicional asado, con un toque moderno</h4>
          <p>Rescatamos el sabor del asado tradicional y lo elevamos con técnicas modernas para lograr una experiencia auténtica y memorable.
</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="info-card p-4 rounded-4 h-100">
          <i className="bi bi-egg-fried text-danger fs-1 mb-3"></i>
          <h4 className="fw-bold">Los mejores cortes de carne</h4>
          <p>Seleccionamos cortes frescos y de calidad local, preparados para resaltar su sabor natural en cada plato.
</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="info-card p-4 rounded-4 h-100">
          <i className="bi bi-geo-alt text-info fs-1 mb-3"></i>
          <h4 className="fw-bold">Situado en el corazón de la ciudad</h4>
          <p>Estamos en una ubicación privilegiada, con un ambiente cálido y cercano pensado para disfrutar y compartir.
</p>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}
