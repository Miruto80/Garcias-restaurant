import React from 'react';
import MenuCard from './MenuCard.jsx';
import '../assets/css/MenuCategory.css';

export default function MenuCategory({id, title, items, backgroundImage }) {
  return (
    <div
      id={id}
      className="menu-category"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="menu-overlay">
        <h2 className="menu-category-title">{title}</h2>
        <div className="menu-items">
          {items.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}