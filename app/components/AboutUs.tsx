import Image from 'next/image';
import React from 'react';
import ceoImage from "@/public/shehroz.jpeg";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

const AboutUs: React.FC = () => {
    return (
        <section id="about-us" className="h-screen">
            <div className="relative flex flex-col lg:flex-row w-full h-full items-center justify-center overflow-hidden rounded-lg bg-background p-6 lg:p-20">
                <div className="flex flex-col lg:flex-row items-center lg:shadow-xl lg:p-10 lg:rounded-xl bg-white z-10 space-y-6 lg:space-y-0 lg:space-x-6">
                    <Image src={ceoImage} alt='CEO Shehroz Ahmed' className='rounded-xl w-48 h-48 lg:w-64 lg:h-64' />
                    <div className="container mx-auto lg:px-6">
                        <h2 className="text-2xl lg:text-4xl font-medium text-center lg:text-left mb-6 tracking-tighter text-primary">
                            Message from CEO
                        </h2>
                        <div className="max-w-xl lg:max-w-4xl mx-auto text-gray-700 leading-relaxed">
                            <p className="mb-4 text-sm lg:text-base">
                                The private security industry is very important for a safe business, economic, and social environment of any country. Security protects our lives, homes, and businesses. Ensuring a safe and secure environment is a top priority in the vision of Shahkar Security Services (SSS).
                            </p>
                            <p className="mb-4 text-sm lg:text-base">
                                If you decide to hire Shahkar Security Services, we ensure that this would be one of your best decisions. We design state-of-the-art solutions that will take care of your businesses, allowing you to concentrate on your core areas.
                            </p>
                            <p className="mb-4 text-sm lg:text-base">
                                Quality service and a team of motivated employees are areas where we give more emphasis. All members of Shahkar Security Services are responsible and accountable towards their clients and are bound to maintain high standards of service delivery while continuing to grow as a market brand.
                            </p>
                            <p className="font-bold text-right text-sm lg:text-base">Shehroz Ahmed<br />CEO</p>
                        </div>
                    </div>
                </div>
                <AnimatedGridPattern
                    numSquares={100}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(100dvw_circle_at_center,white,transparent)]",
                        "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />
            </div>
        </section>
    );
};

export default AboutUs;
