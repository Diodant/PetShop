import React from 'react';

const ShopByPet = () => (
  <section>
    <h2>Shop by Pet</h2>
    <ul className="shop-pets">
      {/* Example for Dogs */}
      <li className="card-large card-light" id="sup-dog">
        <div className="card-image">
          {/* Image omitted for brevity */}
        </div>
        <ul>
          Dogs
          <li><a href="#">Food & Treats</a></li>
          {/* More items */}
          <button className="btn-outline-light">Shop All<span className="material-symbols-outlined">arrow_forward</span></button>
        </ul>
      </li>
      {/* Repeat for each pet category */}
    </ul>
  </section>
);

export default ShopByPet;
