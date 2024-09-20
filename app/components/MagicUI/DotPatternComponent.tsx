"use client";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import { OrbitingCirclesComponent } from "./OrbitingCirclesComponent";
import WordPullUp from "@/components/magicui/word-pull-up";
import BlurFade from "@/components/magicui/blur-fade";
import { useState } from "react";
import GetStartedDock from "./GetStartedDock";

const DotPatternDemo2 = () => {
    const [isOptionSelected, setIsOptionSelected] = useState(false); // Track if the option is selected

    const handleGetStartedClick = () => {
        setIsOptionSelected(true);
    };

    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
            <div className="flex flex-col items-center space-y-2">
                <WordPullUp
                    className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-blue dark:text-white"
                    words="Integrated Security for Your Protection"
                />
                <BlurFade delay={1}>
                    <p className="z-10 whitespace-pre-wrap text-center text-2xl font-medium tracking-tighter bg-gradient-to-b from-blue to-red bg-clip-text text-transparent dark:text-white">
                        Ensuring a safe and secure environment is a top priority in the vision of Shahkar Security Services.
                    </p>
                </BlurFade>
                {/* <BlurFade className="pt-4" delay={1.5}>
                <a
                    href="#contact"
                    className="bg-blue hover:scale-105 font-medium tracking-tight rounded-xl text-white py-3 px-8">
                    Get Started
                </a>
                </BlurFade> */}
                {!isOptionSelected ? (
                    <BlurFade className="pt-4" delay={1.5}>
                        <button
                            onClick={handleGetStartedClick}
                            className="bg-blue hover:scale-105 font-medium tracking-tight rounded-xl text-white py-3 px-8"
                        >
                            Get Started
                        </button>
                    </BlurFade>
                ) : (
                    <GetStartedDock />
                )}
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
        </div>
    );
};

export default DotPatternDemo2;

