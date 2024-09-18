import React from 'react';

const Hero: React.FC = () => {
    return (
        <section
            className="bg-cover bg-center h-screen flex items-center"
            style={{ backgroundImage: 'url(/security-hero.webp)' }}
        >
            <div className="container mx-auto px-6">
                <div className="max-w-2xl bg-black bg-opacity-50 p-8 rounded">
                    <h1 className="text-secondary text-5xl font-bold mb-4">
                        Better Security for Your Protection
                    </h1>
                    <p className="text-gray-200 text-xl mb-6">
                        Ensuring a safe and secure environment is a top priority in the vision of Shahkar Security Services.
                    </p>
                    <a
                        href="#contact"
                        className="bg-secondary text-white px-6 py-3 rounded hover:bg-red-700 transition"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;