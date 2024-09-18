import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="w-full z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className='space-x-2 flex items-center'>
                    {/* <Image src={logo} alt='' width={40} /> */}
                    <a href="#" className="text-3xl font-medium tracking-tighter">
                        Shahkar Security Services
                    </a>
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#about" className="text-black font-medium tracking-tight hover:text-accent">
                        About Us
                    </a>
                    <a href="#services" className="text-black font-medium tracking-tight hover:text-accent">
                        Services
                    </a>
                    <a href="#why-us" className="text-black font-medium tracking-tight hover:text-accent">
                        Why Choose Us
                    </a>
                    <a href="#contact" className="text-black font-medium tracking-tight hover:text-accent">
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