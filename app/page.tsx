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

const HomePage: React.FC = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Qualities />
      <Customers />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;