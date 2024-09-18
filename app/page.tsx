import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyUs';
import Qualities from './components/Qualities';
import Contact from './components/Contact';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Qualities />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;