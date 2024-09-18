import Image from 'next/image';
import React from 'react';
import guardImg from "@/public/guard.png";

const qualities = [
    'Professionalism',
    'Alertness/Vigilance',
    'Physical Fitness/Strength',
    'Honesty/Integrity',
    'Communication Skills',
    'Judgment',
    'Training',
    // 'Punctuality/Preparedness',
    // 'Customer Service',
    // 'Leadership and Teamwork',
    // 'Attitude/Motivation',
    // 'Values/Respects Life',
    // 'Experience',
    // 'Low Profile',
];

const Qualities: React.FC = () => {
    return (
        <section id="qualities" className="py-20 bg-gray-50 h-[100dvh] overflow-hidden">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">Qualities of Shahkar Security Guards</h2>
            <div className='flex justify-around h-full px-40'>
                <div className="w-1/3 h-full flex flex-col justify-center">
                    {qualities.map((quality, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex items-center">
                                <span className="text-secondary mr-2">✔</span>
                                <p className="text-gray-700">{quality}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <Image alt='' src={guardImg} width={400} />
                </div>
            </div>
        </section>
    );
};

export default Qualities;