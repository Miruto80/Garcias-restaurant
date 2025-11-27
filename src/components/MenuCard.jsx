import React from 'react';
import '../assets/css/MenuCard.css';

export default function MenuCard({ title, description, price }) {
  return (
    <div className="menu-card">
      <h4>{title}</h4>
      {description && <p>{description}</p>}
      <span>${price}</span>
    </div>
  );
}