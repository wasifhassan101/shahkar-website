import Image from 'next/image';
import React from 'react';
import guardImg from "@/public/guard.png";
import { AnimatedList } from "@/components/magicui/animated-list";
import { cn } from "@/lib/utils";
import BlurFade from '@/components/magicui/blur-fade';

const qualities = [
    {
        name: 'Professionalism',
        description: 'Our guards maintain the highest standards of professionalism in all their duties.',
        icon: "💼",
        color: "#00C9A7",
        time: "Always",
    },
    {
        name: 'Alertness/Vigilance',
        description: 'Constant awareness and vigilance in every situation to prevent incidents.',
        icon: "👀",
        color: "#FFB800",
        time: "Always",
    },
    {
        name: 'Physical Fitness/Strength',
        description: 'Physically fit and strong to handle any challenges that arise.',
        icon: "💪",
        color: "#FF3D71",
        time: "Always",
    },
    {
        name: 'Honesty/Integrity',
        description: 'Upholding the highest standards of honesty and integrity.',
        icon: "🛡️",
        color: "#1E86FF",
        time: "Always",
    },
    {
        name: 'Communication Skills',
        description: 'Clear and effective communication with clients and the team.',
        icon: "💬",
        color: "#00C9A7",
        time: "Always",
    },
    {
        name: 'Judgment',
        description: 'Sound judgment in critical situations to ensure safety and security.',
        icon: "⚖️",
        color: "#FFB800",
        time: "Always",
    },
    {
        name: 'Training',
        description: 'Trained to handle security operations efficiently and effectively.',
        icon: "🎓",
        color: "#FF3D71",
        time: "Always",
    },

];

const Qualities: React.FC = () => {
    return (
        <section id="qualities" className="h-[100dvh] overflow-hidden relative pt-10">
            <div className='h-[10%] flex items-center justify-center'>
                <h2 className="text-4xl font-medium tracking-tight">Qualities of Shahkar Security Guards</h2>
            </div>
            <div className='flex justify-around pt-10'>
                <AnimatedList delay={1500}>
                    {qualities.map((item, idx) => (
                        <Notification {...item} key={idx} />
                    ))}
                </AnimatedList>
                <BlurFade key={0} delay={0.5} inView className='relative'>
                    <Image alt="Shahkar Security Guard" src={guardImg} width={400} height={500} />
                </BlurFade>
            </div>
        </section>
    );
};

export default Qualities;



interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
}

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};