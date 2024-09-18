"use client"
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import SecurityIcon from "@mui/icons-material/Security";
import LockIcon from "@mui/icons-material/Lock";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useEffect, useState } from "react";

export function OrbitingCirclesComponent() {
    const words = ['Secure', 'Safe', 'Guard', 'Trust', 'Protect'];
    const [currentWord, setCurrentWord] = useState(words[0]);
    // const [inProp, setInProp] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            // setInProp(false); // Start fade-out
            setTimeout(() => {
                setCurrentWord((prevWord) => {
                    const currentIndex = words.indexOf(prevWord);
                    const nextIndex = (currentIndex + 1) % words.length;
                    return words[nextIndex];
                });
                // setInProp(true); // Start fade-in
            }, 500); // Allow time for fade-out before changing the word
        }, 2000); // Change word every 2 seconds

        return () => clearInterval(interval); // Clean up interval on unmount
    }, [words]);

    return (
        <div className="relative hidden md:flex h-[500px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                {currentWord}
            </span>

            {/* Inner Circles */}
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={80}
            >
                <CameraAltIcon style={{ fontSize: 30 }} />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}
            >
                <VerifiedUserIcon style={{ fontSize: 30 }} />
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                reverse
            >
                <SecurityIcon style={{ fontSize: 50 }} />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                delay={20}
                reverse
            >
                <LockIcon style={{ fontSize: 50 }} />
            </OrbitingCircles>
        </div>
    );
}
