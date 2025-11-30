import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/MenuFilter.css';
import Collapse from 'bootstrap/js/dist/collapse';

const categories = [
  { name: 'Frituras', id: 'frituras' },
  { name: 'Almuerzos', id: 'almuerzos' },
  { name: 'Parrillas', id: 'parrillas' },
  { name: 'Sopas', id: 'sopas' },
  { name: 'Contornos', id: 'contornos' },
  { name: 'Arepas', id: 'arepas' },
  { name: 'Combos', id: 'combos' },
  { name: 'Modernas', id: 'modernas' },
  { name: 'Hamburguesas', id: 'hamburguesas' },
  { name: 'Patacones', id: 'patacones' },
  { name: 'Cachapas', id: 'cachapas' },
];

export default function MenuFilter() {
     const handleLinkClick = () => {
    const collapseEl = document.getElementById('categoryFilterMobile');
    if (collapseEl) {
      const bsCollapse = Collapse.getInstance(collapseEl) || new Collapse(collapseEl);
      bsCollapse.hide();
    }
  };

  return (
    <>
      {/* Botón móvil: fijo abajo a la izquierda */}
      <button
        className="btn btn-naranja position-fixed bottom-0 start-0 m-3 d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#categoryFilterMobile"
        aria-expanded="false"
        aria-controls="categoryFilterMobile"
      >
        ☰ Categorías
      </button>

      {/* Panel móvil: colapsable y oculto por defecto en móvil; no se muestra en desktop */}
      <div className="collapse d-lg-none" id="categoryFilterMobile">
        <div className="card shadow-lg mobile-filter-panel">
          <div className="card-header d-flex justify-content-between align-items-center">
            <span>Categorías</span>
            <button
              className="btn btn-sm btn-outline-secondary z-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#categoryFilterMobile"
            >
              Cerrar
            </button>
          </div>
          <div className="card-body p-0">
            <ul className="list-group list-group-flush">
              {categories.map(cat => (
                <li key={cat.id} className="list-group-item">
                  <a href={`#${cat.id}`} className="text-decoration-none d-block py-1" onClick={handleLinkClick}>
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

   <div className="d-none d-lg-flex align-items-center justify-content-center position-sticky" style={{ top: '100px', height: 'calc(100vh - 100px)' }}>
  <aside className="w-100">
    <div className="card">
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {categories.map(cat => (
            <li key={cat.id} className="list-group-item">
              <a href={`#${cat.id}`} className="text-decoration-none">
                {cat.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </aside>
</div>
    </>
  );
}