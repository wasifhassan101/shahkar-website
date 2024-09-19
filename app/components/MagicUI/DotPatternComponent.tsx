"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import { OrbitingCirclesComponent } from "./OrbitingCirclesComponent";

const DotPatternDemo2 = () => {
    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
            <div className="flex flex-col items-center space-y-2">
                {/* <WordPullUp
                    className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
                    words="Better Security for Your Protection"
                /> */}
                <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
                    Better Security for Your Protection
                </p>
                <p className="z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter text-black dark:text-white">
                    Ensuring a safe and secure environment is a top priority in the vision of Shahkar Security Services.
                </p>
                <a
                    href="#contact"
                    className="bg-black font-medium tracking-tight rounded-xl text-white py-3 px-8">
                    Get Started
                </a>
            </div>
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
            />
            <OrbitingCirclesComponent />
            {/* <IconCloudDemo /> */}
        </div>
    );
};

export default DotPatternDemo2;



import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];

export function IconCloudDemo() {
    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
