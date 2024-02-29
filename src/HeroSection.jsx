import React from 'react';

const HeroSection = () => (
  <section className="hero">
    <h1>Універсальний магазин для кожної тварини!</h1>
    <div className="btn-group">
      <button className="btn-filled-dark">
        <span className="material-symbols-outlined">shopping_cart</span>Shop All Products
      </button>
      <button className="btn-outline-dark btn-hover-color">
        <span className="material-symbols-outlined">calendar_month</span> Book a Service
      </button>
    </div>
  </section>
);

export default HeroSection;
