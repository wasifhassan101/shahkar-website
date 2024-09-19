"use client";
import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    //     useEffect(() => {
    // console.log("ttt")
    //     }, [dropdownOpen])

    return (
        <nav className="w-full z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="space-x-2 flex items-center">
                    <a href="#" className="text-3xl font-medium tracking-tighter text-blue">
                        Shahkar Security Services
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <div
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a
                            href="#about-us"
                            className="text-black font-medium tracking-tight relative inline-block transition duration-300 ease-in-out hover:text-gray-700 hover:scale-110 hover:-translate-y-1"
                        >
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
                            About Us
                        </a>
                        {/* Dropdown */}
                        {dropdownOpen && (
                            <div
                                className="absolute left-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a
                                    href="#company-profile"
                                    className="block px-4 py-2 text-black font-medium hover:bg-gray-100"
                                >
                                    Company Profile
                                </a>
                                <a
                                    href="#board-of-directors"
                                    className="block px-4 py-2 text-black font-medium hover:bg-gray-100"
                                >
                                    Board of Directors
                                </a>
                                <a
                                    href="#our-mission"
                                    className="block px-4 py-2 text-black font-medium hover:bg-gray-100"
                                >
                                    Our Mission
                                </a>
                                <a
                                    href="#our-mission"
                                    className="block px-4 py-2 text-black font-medium hover:bg-gray-100"
                                >
                                    License and Registrations
                                </a>
                            </div>
                        )}
                    </div>

                    {['Services', 'Why Us', 'Contact', 'Gallery'].map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}
                            className="text-black font-medium tracking-tight relative inline-block transition duration-300 ease-in-out hover:text-gray-700 hover:scale-110 hover:-translate-y-1"
                        >
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-700 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-black font-medium focus:outline-none"
                    >
                        {menuOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${menuOpen ? 'block' : 'hidden'
                    } md:hidden bg-gray-50 border-t border-gray-200`}
            >
                <ul className="space-y-4 py-4 px-6">
                    {['About Us', 'Services', 'Why Us', 'Contact', 'Gallery'].map((item, index) => (
                        <li key={index}>
                            <a
                                href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}
                                className="block text-black font-medium tracking-tight transition duration-300 ease-in-out hover:text-gray-700 hover:scale-105 hover:-translate-y-1"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
