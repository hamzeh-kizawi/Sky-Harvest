import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhySection from './components/WhySection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="why">
        <WhySection />
      </div>
      <Footer />
    </div>
  );
}

export default App;