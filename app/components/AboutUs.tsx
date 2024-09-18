import Image from 'next/image';
import React from 'react';
import ceoImage from "@/public/shehroz.jpeg";

const AboutUs: React.FC = () => {
    return (
        <section id="about" className="p-20 flex">
            <Image src={ceoImage} alt='' className='rounded-2xl' />
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-primary">Message from CEO</h2>
                <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
                    <p className="mb-6">
                        The private security industry is very important for a safe business, economic, and social environment of any country. Security protects our lives, homes, and businesses. Ensuring a safe and secure environment is a top priority in the vision of Shahkar Security Services (SSS).
                    </p>
                    <p className="mb-6">
                        If you decide to hire Shahkar Security Services, we ensure that this would be one of your best decisions. We design state-of-the-art solutions that will take care of your businesses, allowing you to concentrate on your core areas.
                    </p>
                    <p className="mb-6">
                        Quality service and a team of motivated employees are areas where we give more emphasis. All members of Shahkar Security Services are responsible and accountable towards their clients and are bound to maintain high standards of service delivery while continuing to grow as a market brand.
                    </p>
                    <p className="font-bold text-right">Shehroz Ahmed<br />CEO</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;