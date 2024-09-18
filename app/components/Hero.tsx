import React from 'react';
import DotPatternDemo2 from './MagicUI/DotPatternComponent';

const Hero: React.FC = () => {
    return (
        <section
            className="h-screen flex items-center"
        >
            <DotPatternDemo2 />
            {/* <OrbitingCirclesComponent /> */}
        </section>
    );
};

export default Hero;