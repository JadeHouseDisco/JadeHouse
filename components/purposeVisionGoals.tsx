"use client"

import { useState, useEffect } from 'react';
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
            headText:string;
            bodyText: string;
        }[];
    };
  }

const PurposeVisionGoals: React.FC<PurposeVisionGoalsProps> = ({ purposeVisionGoalsProps }) => {
    
    const [backgroundImage, setBackgroundImage] = useState(purposeVisionGoalsProps.default.imageHref)
    const [headText, setHeadText] = useState(purposeVisionGoalsProps.default.headText)
    const [bodyText, setBodyText] = useState(purposeVisionGoalsProps.default.bodyText)
    const [delayActive, setDelayActive] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [key, setKey] = useState(0);

    useEffect(() => {
        // Force a re-mount of the Image component when the source changes
        setLoaded(false);
        setKey((prevKey) => prevKey + 1);
    }, [backgroundImage]);

    const handleMouseEnterPurpose = () => {
        if (!delayActive) {
            setDelayActive(true);
            setTimeout(() => {
                for (const button of purposeVisionGoalsProps.buttons) {
                    if (button.buttonText === "Purpose") {
                        setBackgroundImage(button.imageHref);
                        setHeadText(button.headText)
                        setBodyText(button.bodyText)
                    }
                }
              setDelayActive(false);
            }, 200); // 200 milliseconds = 0.2 second
        }
    }

    const handleMouseEnterVision = () => {
        if (!delayActive) {
            setDelayActive(true);
            setTimeout(() => {
                for (const button of purposeVisionGoalsProps.buttons) {
                    if (button.buttonText === "Vision") {
                        setBackgroundImage(button.imageHref);
                        setHeadText(button.headText)
                        setBodyText(button.bodyText)
                    }
                }
              setDelayActive(false);
            }, 200); // 200 milliseconds = 0.2 second
        }
    }

    const handleMouseEnterGoals = () => {
        if (!delayActive) {
            setDelayActive(true);
            setTimeout(() => {
                for (const button of purposeVisionGoalsProps.buttons) {
                    if (button.buttonText === "Goals") {
                        setBackgroundImage(button.imageHref);
                        setHeadText(button.headText)
                        setBodyText(button.bodyText)
                    }
                }
              setDelayActive(false);
            }, 200); // 200 milliseconds = 0.2 second
        }
    }

    const handleMouseLeave = () => {
        if (!delayActive) {
            setDelayActive(true);
            setTimeout(() => {
                setBackgroundImage(purposeVisionGoalsProps.default.imageHref);
                setHeadText(purposeVisionGoalsProps.default.headText)
                setBodyText(purposeVisionGoalsProps.default.bodyText)
              setDelayActive(false);
            }, 200); // 200 milliseconds = 0.2 second
        }
    }

    return (
        <div key="1" className="flex flex-col min-h-[100dvh]">
            <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
                <div className="z-10 absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="z-10 absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className={`z-10 absolute inset-0 bg-black transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}></div>
                <Image
                    key={key}
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
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    {headText}
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                    {bodyText}
                    </p>
                </div>
            </section>
            <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 mt-10">
                <div className="flex justify-center space-x-40">
                    {purposeVisionGoalsProps.buttons.map((button, index) => (
                        <div
                            className="inline-flex font-bold text-lg items-center justify-center h-10 px-6 rounded-md bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
                            onMouseEnter={button.buttonText === "Purpose" ? handleMouseEnterPurpose : button.buttonText === "Vision" ? handleMouseEnterVision : handleMouseEnterGoals}
                            onMouseLeave={handleMouseLeave}
                            key={index}
                        >
                            {button.buttonText}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PurposeVisionGoals;