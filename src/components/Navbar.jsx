import React from 'react';
import { Link } from 'react-router-dom';
import Collapse from 'bootstrap/js/dist/collapse';
import '../assets/css/Navbar.css';

export default function Navbar() {
  const handleNavLinkClick = () => {
    // Solo cerrar en pantallas pequeñas (lg = 992px)
    if (window.innerWidth >= 992) return;

    const navbarEl = document.getElementById('navbarNav');
    if (!navbarEl) return;

    // Obtener instancia existente o crear una nueva y ocultarla
    const bsCollapse = Collapse.getInstance(navbarEl) || new Collapse(navbarEl);
    bsCollapse.hide();
    // Actualizar aria-expanded del toggler (fallback)
    const toggler = document.querySelector('[data-toggle-for="navbarNav"]') || document.querySelector('.navbar-toggler');
    if (toggler) toggler.setAttribute('aria-expanded', 'false');
  };

  const handleToggleClick = () => {
    const navbarEl = document.getElementById('navbarNav');
    if (!navbarEl) return;

    try {
      const bsCollapse = Collapse.getInstance(navbarEl);
      if (bsCollapse && typeof bsCollapse.toggle === 'function') {
        bsCollapse.toggle();
      } else {
        const newInst = new Collapse(navbarEl);
        if (newInst && typeof newInst.toggle === 'function') newInst.toggle();
      }
    } catch {
      // fallthrough to manual class toggle
      if (navbarEl.classList.contains('show')) {
        navbarEl.classList.remove('show');
      } else {
        navbarEl.classList.add('show');
      }
    }

    // Update toggler aria after a short delay to let classes settle
    const toggler = document.querySelector('[data-toggle-for="navbarNav"]') || document.querySelector('.navbar-toggler');
    setTimeout(() => {
      if (toggler) toggler.setAttribute('aria-expanded', navbarEl.classList.contains('show') ? 'true' : 'false');
    }, 50);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid flex-lg-column">

          {/* Logo + hamburguesa */}
          <div className="d-flex w-100 justify-content-between align-items-center">
            <Link className="navbar-brand mx-lg-auto" to="/">
              <img
                src="/img/Logos/garcias-101.webp"
                alt="Garcia's Logo"
                height="70"
                className="d-inline-block align-text-top"
              />
            </Link>

            {/* Hamburguesa (solo visible en móvil) */}
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle-for="navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleToggleClick}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Enlaces */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item"><Link className="nav-link" to="/" onClick={handleNavLinkClick}>INICIO</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Menu" onClick={handleNavLinkClick}>MENÚ</Link></li>
             <li className="nav-item">
  <Link className="nav-link" to="/#el-lugar" onClick={handleNavLinkClick}>
    NOSOTROS
  </Link>
</li>

<li className="nav-item">
  <Link className="nav-link" to="/#reservas" onClick={handleNavLinkClick}>
    RESERVAS
  </Link>
</li>

<li className="nav-item">
  <Link className="nav-link" to="/#contacto" onClick={handleNavLinkClick}>
    CONTACTO
  </Link>
</li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}