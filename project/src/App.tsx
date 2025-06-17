import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import CopyTrading from './components/CopyTrading';
import Testimonials from './components/Testimonials';
import HowToTrade from './components/HowToTrade';
import Requirements from './components/Requirements';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-apple-gray-950 text-white dark">
      <Header />
      <Hero />
      <Stats />
      <About />
      <CopyTrading />
      <Testimonials />
      <HowToTrade />
      <Requirements />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;