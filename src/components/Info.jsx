import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Info.css';

export default function Info() {
  return (
  <section className="bg-dark text-white py-5" id="el-restaurante">
  <div className="container text-center mb-5">
    <h1 className="display-4 fw-bold text-uppercase">El Restaurante</h1>
    <p className="lead">Una experiencia que nace del sentir y pensar local, transformada en sabor y emoción.</p>
  </div>

  <div className="container">
    <div className="row g-4">
      <div className="col-md-4">
        <div className="p-4 rounded-4 bg-black bg-opacity-75 h-100">
          <h4 className="fw-bold">Tradicional asado, con un toque moderno</h4>
          <p>Pensado, hecho de aquí para aquí: un propio sentir y pensar. Así que tomamos este sentir y pensar y lo transformamos en una experiencia que se siente como ninguna.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-4 rounded-4 bg-black bg-opacity-75 h-100">
          <h4 className="fw-bold">Los mejores cortes de carne</h4>
          <p>Pensado, hecho de aquí para aquí: un propio sentir y pensar. Así que tomamos este sentir y pensar y lo transformamos en una experiencia que se siente como ninguna.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-4 rounded-4 bg-black bg-opacity-75 h-100">
          <h4 className="fw-bold">Situado en el corazón de la ciudad</h4>
          <p>Pensado, hecho de aquí para aquí: un propio sentir y pensar. Así que tomamos este sentir y pensar y lo transformamos en una experiencia que se siente como ninguna.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
