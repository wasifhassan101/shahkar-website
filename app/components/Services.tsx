import React from 'react';
import { AnimatedBeamMultipleOutputDemo } from './MagicUI/ServicesAnimation';
// import Image from 'next/image';

// const services = [
//     {
//         name: 'Security Guarding Services',
//         image: 'https://source.unsplash.com/600x400/?security-guard',
//     },
//     {
//         name: 'Escort Duty Services',
//         image: 'https://source.unsplash.com/600x400/?security-escort',
//     },
//     {
//         name: 'Vehicle Scanning & Parking System',
//         image: 'https://source.unsplash.com/600x400/?vehicle-scan',
//     },
//     {
//         name: 'Communication Line Services',
//         image: 'https://source.unsplash.com/600x400/?communication-security',
//     },
//     {
//         name: 'Inventory & Gate Management',
//         image: 'https://source.unsplash.com/600x400/?inventory',
//     },
//     {
//         name: 'Guest/Public Checking System',
//         image: 'https://source.unsplash.com/600x400/?public-checking',
//     },
//     {
//         name: 'Sniper Post at Main Gates',
//         image: 'https://source.unsplash.com/600x400/?sniper-security',
//     },
//     {
//         name: 'Infrastructure Security',
//         image: 'https://source.unsplash.com/600x400/?infrastructure-security',
//     },
//     {
//         name: 'Crisis Management Teams',
//         image: 'https://source.unsplash.com/600x400/?crisis-management',
//     },
//     {
//         name: 'Static Guarding',
//         image: 'https://source.unsplash.com/600x400/?static-guard',
//     },
//     {
//         name: 'Close Protection',
//         image: 'https://source.unsplash.com/600x400/?close-protection',
//     },
//     {
//         name: 'Asset Security',
//         image: 'https://source.unsplash.com/600x400/?asset-security',
//     },
//     {
//         name: 'Facility Risk Assessments',
//         image: 'https://source.unsplash.com/600x400/?risk-assessment',
//     },
//     {
//         name: 'Digital Security of Buildings',
//         image: 'https://source.unsplash.com/600x400/?digital-security',
//     },
//     {
//         name: 'Emergency Response System',
//         image: 'https://source.unsplash.com/600x400/?emergency-response',
//     },
// ];

const Services: React.FC = () => {
    return (
        <section id="services" className="h-screen overflow-hidden pt-10">
            {/* <div className='h-[10%] flex items-center justify-center'> */}
            <h2 className="text-4xl font-medium tracking-tighter text-center text-primary">Our Services</h2>
            {/* </div> */}
            <AnimatedBeamMultipleOutputDemo />
        </section>
    );
};

export default Services;