import React, { useState } from 'react'
import '../assets/css/Footer.css';
function Footer() {
  const [showLegal, setShowLegal] = useState(false);
  return (
    <footer className="footer-custom">
        <h4 className="footer-title mb-3">Siguenos en redes sociales</h4>
        <div className="redes-sociales mb-3" id="contact">
            <a target="_blank" href="https://www.instagram.com/garciasrestaurant_market" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <span className="footer-contact ms-3"><i className="fa-solid fa-phone me-1"></i><a href="tel:682-480-4614"> 682-480-4614 </a></span>
            <span className="footer-contact ms-3"><i className="fa-solid fa-envelope me-1"></i>Garciaslrestaurant@gmail.com</span>
        </div>
        <div className="legal mt-4">
            <button id="legal-button" className="btn btn-outline-light px-4 py-2 mb-2" onClick={() => setShowLegal(v => !v)}>
                Legal <i className={`fa-solid fa-chevron-${showLegal ? 'up' : 'down'} ms-2`}></i>
            </button>
            <div id="legal-content" className={showLegal ? '' : 'hidden'}>
                <p className="mb-1">&copy; Garcias Restaurant 2025</p>
                <p className="mb-1">Todos los derechos reservados. Las imágenes se utilizan con permiso.</p>
                <p className="mb-0">Garciasrestaurant.com opera Garciasrestaurant.com es un restaurante que prepara y sirve directamente todos sus platillos en nuestras cocinas de Texas y Florida. Nos especializamos en ofrecer experiencias gastronómicas auténticas y de calidad.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer