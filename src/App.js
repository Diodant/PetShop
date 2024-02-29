import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ShopByPet from './ShopByPet';
import ServicesSection from './ServicesSection';
import LocationHours from './LocationHours';
import Footer from './Footer';
import "./index.css"

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ShopByPet />
      <ServicesSection />
      <LocationHours />
      <Footer />
    </div>
  );
}

export default App;
