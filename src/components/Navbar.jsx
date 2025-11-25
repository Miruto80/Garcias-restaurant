import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid flex-lg-column">
          
          {/* Logo + hamburguesa */}
          <div className="d-flex w-100 justify-content-between align-items-center">
            <Link className="navbar-brand mx-lg-auto" to="/">
              <img
                src="/img/garcias-101.png"
                alt="Garcia's Logo"
                height="70"
                className="d-inline-block align-text-top"
              />
            </Link>

            {/* Hamburguesa (solo visible en móvil) */}
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Enlaces */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item"><Link className="nav-link" to="/">INICIO</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/el-lugar">EL LUGAR</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/menu">MENÚ</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/reservas">RESERVAS</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contacto">CONTACTO Y UBICACIÓN</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}