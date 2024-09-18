import React from 'react';
import Image from 'next/image';

const services = [
    {
        name: 'Security Guarding Services',
        image: 'https://source.unsplash.com/600x400/?security-guard',
    },
    {
        name: 'Escort Duty Services',
        image: 'https://source.unsplash.com/600x400/?security-escort',
    },
    {
        name: 'Vehicle Scanning & Parking System',
        image: 'https://source.unsplash.com/600x400/?vehicle-scan',
    },
    {
        name: 'Communication Line Services',
        image: 'https://source.unsplash.com/600x400/?communication-security',
    },
    {
        name: 'Inventory & Gate Management',
        image: 'https://source.unsplash.com/600x400/?inventory',
    },
    {
        name: 'Guest/Public Checking System',
        image: 'https://source.unsplash.com/600x400/?public-checking',
    },
    {
        name: 'Sniper Post at Main Gates',
        image: 'https://source.unsplash.com/600x400/?sniper-security',
    },
    {
        name: 'Infrastructure Security',
        image: 'https://source.unsplash.com/600x400/?infrastructure-security',
    },
    {
        name: 'Crisis Management Teams',
        image: 'https://source.unsplash.com/600x400/?crisis-management',
    },
    {
        name: 'Static Guarding',
        image: 'https://source.unsplash.com/600x400/?static-guard',
    },
    {
        name: 'Close Protection',
        image: 'https://source.unsplash.com/600x400/?close-protection',
    },
    {
        name: 'Asset Security',
        image: 'https://source.unsplash.com/600x400/?asset-security',
    },
    {
        name: 'Facility Risk Assessments',
        image: 'https://source.unsplash.com/600x400/?risk-assessment',
    },
    {
        name: 'Digital Security of Buildings',
        image: 'https://source.unsplash.com/600x400/?digital-security',
    },
    {
        name: 'Emergency Response System',
        image: 'https://source.unsplash.com/600x400/?emergency-response',
    },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Services</h2>
                <div className="flex flex-wrap -mx-4">
                    {services.map((service, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="bg-white shadow rounded-lg p-6 text-center h-full">
                                <div className="mb-4">
                                    {/* Using Next.js Image optimization */}
                                    <Image
                                        src={service.image}
                                        alt={service.name}
                                        width={600}
                                        height={400}
                                        className="w-full h-40 object-cover rounded"
                                        placeholder="blur"
                                        blurDataURL="/images/placeholder.jpg"  // Optional: A local low-res placeholder image
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold mb-2 text-secondary">{service.name}</h3>
                                <p className="text-gray-600">
                                    Professional {service.name.toLowerCase()} to meet your security needs.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;