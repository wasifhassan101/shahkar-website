import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-3 md:py-6">
            <div className="px-3 md:px-10 text-center tracking-tight flex justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Shahkar Security Services Pvt Ltd. All rights reserved.</p>
                <div className='flex space-x-3 items-center'>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                    <a
                        href="https://portfolio-chi-drab-65.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-b from-blue to-red bg-clip-text text-transparent transition duration-300 ease-in-out"
                    >
                        Developed by WH
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;