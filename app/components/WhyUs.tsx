import React from 'react';

const reasons = [
    'Smartly turned out guards',
    'Well-trained, competent, and professional staff',
    'High standards Security Services',
    'Security Consultancy and project security survey',
    'Disciplined, cooperative, and informative staff',
    'Valuing clients on a long-term basis',
    'Fully committed management',
    'Responsive to all incidents in a professional way',
    'Focus on safety, integrity, and honesty',
    'Leading by example from CEO to security guards',
];

const WhyChooseUs: React.FC = () => {
    return (
        <section id="why-us" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-primary">Why Shahkar Security Services?</h2>
                <ul className="space-y-4 max-w-3xl mx-auto">
                    {reasons.map((reason, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-secondary mr-2 mt-1">✔</span>
                            <p className="text-gray-700">{reason}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default WhyChooseUs;