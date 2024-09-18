import React from 'react';

const qualities = [
    'Professionalism',
    'Alertness/Vigilance',
    'Physical Fitness/Strength',
    'Honesty/Integrity',
    'Communication Skills',
    'Judgment',
    'Training',
    'Punctuality/Preparedness',
    'Customer Service',
    'Leadership and Teamwork',
    'Attitude/Motivation',
    'Values/Respects Life',
    'Experience',
    'Low Profile',
];

const Qualities: React.FC = () => {
    return (
        <section id="qualities" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-primary">Qualities of Shahkar Security Guards</h2>
                <div className="flex flex-wrap -mx-4">
                    {qualities.map((quality, index) => (
                        <div key={index} className="w-full md:w-1/2 px-4 mb-4">
                            <div className="flex items-center">
                                <span className="text-secondary mr-2">✔</span>
                                <p className="text-gray-700">{quality}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Qualities;