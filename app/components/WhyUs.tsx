import React from 'react';
import BlurFade from "@/components/magicui/blur-fade";

const reasons = [
    {
        title: 'Secret Inspection by Vigilance Department',
        content:
            'Our dedicated vigilance department secretly collects feedback from customers, monitors operational staff, and reports to top management for remedial action. This ensures a professional and honest work environment.',
    },
    // {
    //     title: 'Operation Chart',
    //     content:
    //         'We ensure efficient man-management across all branches. From supervisors to directors, everyone is involved in execution and monitoring, supported by a mobile application.',
    // },
    {
        title: 'Night Checking & Surprise Visit',
        content:
            'Daily night checks and surprise visits are routine at SSS, ensuring the alertness of our staff and maintaining high service standards at every location.',
    },
    {
        title: 'SSS Mobile Application',
        content:
            'We have developed a customized mobile application to provide 100% technology-supported man-management services, enabling real-time monitoring and execution of field activities.',
    },
    {
        title: 'Arms and Ammunition',
        content:
            'We provide top-quality weapons to all our security guards, enhancing the effectiveness of security and ensuring the safety of our clients.',
    },
    {
        title: 'Messing Facilities for Staff and Security Personnel',
        content:
            'We offer messing facilities for all our staff and security personnel, ensuring their well-being and satisfaction.',
    },
    {
        title: 'Accommodation for Staff and Security Personnel',
        content:
            'SSS provides accommodation for staff and security personnel to ensure comfort and focus on delivering high-quality services.',
    },
];

const WhyShahkarSecurityGuards: React.FC = () => {
    return (
        <section id="why-us" className="pt-10 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-medium text-center mb-12 tracking-tight">
                    Why Shahkar Security Services?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <BlurFade key={index} delay={0.25 + index * 0.1} className='bg-white z-10' inView>
                            <div className="border h-full shadow-lg p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer">
                                <div className="flex flex-col mb-4">
                                    <div className="text-2xl font-semibold tracking-[-0.02em] text-black dark:text-white">
                                        0{index + 1}
                                    </div>
                                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-black dark:text-white">
                                        {reason.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {reason.content}
                                </p>
                            </div>
                        </BlurFade>
                    ))}
                    <RetroGrid />
                </div>

            </div>
        </section>
    );
};

export default WhyShahkarSecurityGuards;



import { BorderBeam } from "@/components/magicui/border-beam";
import RetroGrid from '@/components/magicui/retro-grid';

export function BorderBeamDemo() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Border Beam
            </span>
            <BorderBeam size={250} duration={12} delay={0} />
        </div>
    );
}
