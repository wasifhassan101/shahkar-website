import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary py-6">
            <div className="container mx-auto px-6 text-center text-white">
                <p>&copy; {new Date().getFullYear()} Shahkar Security Services Pvt Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;