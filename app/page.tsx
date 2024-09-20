import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyUs';
import Qualities from './components/Qualities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Customers from './components/Customers';
import ContactDock from './components/MagicUI/ContactDock';

const HomePage: React.FC = () => {
  return (
    <div className='relative h-screen'>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Qualities />
      <Customers />
      <Contact />
      <Footer />
      <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50'>
        <ContactDock />
      </div>
    </div>
  );
};

export default HomePage;