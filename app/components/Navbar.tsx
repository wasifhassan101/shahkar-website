import Image from 'next/image';
import React from 'react';
import logo from "@/public/logo.jpeg";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-primary fixed w-full z-50 shadow">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className='space-x-2 flex items-center'>
                    <Image src={logo} alt='' width={40} />
                    <a href="#" className="text-accent text-3xl font-bold">
                        Shahkar Security Services
                    </a>
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#about" className="text-white hover:text-accent">
                        About Us
                    </a>
                    <a href="#services" className="text-white hover:text-accent">
                        Services
                    </a>
                    <a href="#why-us" className="text-white hover:text-accent">
                        Why Choose Us
                    </a>
                    <a href="#contact" className="text-white hover:text-accent">
                        Contact
                    </a>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    {/* Implement mobile menu toggle if needed */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;