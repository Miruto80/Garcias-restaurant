import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import '../assets/css/Orderbutton.css';

export default function OrderButton() {
  return (
    <a 
      href="https://fromtherestaurant.com/garcias-restaurant-and-market/locations" 
      target="_blank" 
      rel="noopener noreferrer"
      className="floating-order-btn"
    >
      <FaShoppingCart className="order-icon" />  
    </a>
  );
}