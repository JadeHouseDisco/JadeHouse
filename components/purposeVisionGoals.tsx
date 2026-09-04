"use client";

import { useState } from 'react';
import Image from 'next/image';

interface PurposeVisionGoalsProps {
    purposeVisionGoalsProps: {
        default: {
            imageHref: string;
            headText: string;
            bodyText: string;
        };
        buttons: {
            buttonText: string;
            imageHref: string;
            headText: string;
            bodyText: string;
        }[];
    };
}

const PurposeVisionGoals: React.FC<PurposeVisionGoalsProps> = ({ purposeVisionGoalsProps }) => {
    const [backgroundImage, setBackgroundImage] = useState(purposeVisionGoalsProps.default.imageHref);
    const [headText, setHeadText] = useState(purposeVisionGoalsProps.default.headText);
    const [bodyText, setBodyText] = useState(purposeVisionGoalsProps.default.bodyText);
    const [loaded, setLoaded] = useState(false);

    const handleMouseEnter = (buttonText: string) => {
        const button = purposeVisionGoalsProps.buttons.find(b => b.buttonText === buttonText);
        if (button && button.imageHref !== backgroundImage) {
            setLoaded(false);
            setBackgroundImage(button.imageHref);
            setHeadText(button.headText);
            setBodyText(button.bodyText);
        }
    };

    const handleMouseLeave = () => {
        setLoaded(false);
        setBackgroundImage(purposeVisionGoalsProps.default.imageHref);
        setHeadText(purposeVisionGoalsProps.default.headText);
        setBodyText(purposeVisionGoalsProps.default.bodyText);
    };

    return (
        <div key="1" className="flex flex-col">
            <section className="relative min-h-[clamp(34rem,70svh,44rem)] w-full overflow-hidden">
                <div className="z-10 absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="z-10 absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className={`z-10 absolute inset-0 bg-black transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}></div>
                <Image
                    key={backgroundImage}
                    alt="Background Image"
                    className={`absolute inset-0 w-full h-full object-cover ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 z-2`}
                    height="800"
                    src={backgroundImage}
                    style={{
                        aspectRatio: "1600/800",
                        objectFit: "cover",
                    }}
                    width="1600"
                    onLoad={() => setLoaded(true)}
                    priority={backgroundImage === purposeVisionGoalsProps.default.imageHref}
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gray-900/40"></div>
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white md:px-6">
                    <div className="flex min-h-48 max-w-4xl flex-col justify-center overflow-hidden">
                        <h2 className="text-balance text-[clamp(2rem,6vw,4rem)] font-bold leading-tight tracking-tight">
                            {headText}
                        </h2>
                        <p className="mt-4 max-w-3xl text-lg md:text-xl">
                            {bodyText}
                        </p>
                    </div>
                    <div className="relative mt-8 flex flex-col items-center justify-center px-2 sm:mt-10 sm:px-4 md:px-6">
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-12">
                            {purposeVisionGoalsProps.buttons.map((button) => (
                                <button
                                    type="button"
                                    className="inline-flex min-h-11 items-center justify-center rounded-md bg-gray-50 px-5 font-bold text-gray-900 transition-colors duration-300 ease-in-out hover:bg-[#00a896] focus:ring-gray-300 sm:px-6 sm:text-lg"
                                    onMouseEnter={() => handleMouseEnter(button.buttonText)}
                                    onMouseLeave={handleMouseLeave}
                                    onFocus={() => handleMouseEnter(button.buttonText)}
                                    onBlur={handleMouseLeave}
                                    key={button.buttonText}
                                >
                                    {button.buttonText}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PurposeVisionGoals;
