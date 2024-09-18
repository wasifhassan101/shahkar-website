import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-6">
            <div className="container mx-auto px-6 text-center tracking-tight">
                <p>&copy; {new Date().getFullYear()} Shahkar Security Services Pvt Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;