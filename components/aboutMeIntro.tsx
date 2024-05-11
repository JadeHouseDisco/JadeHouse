interface AboutMeIntroProps {
    aboutMeIntroProps: {
        headerText: string;
        pText: string;
        imgSrc: string;
    };
  }

const AboutMeIntro: React.FC<AboutMeIntroProps> = ({ aboutMeIntroProps }) => {
  return (
    <section key="1" className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent from-40% to-black to-65%" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black to-90%" />
        <div className="absolute z-10 ml-auto w-full max-w-xl space-y-4 text-left md:space-y-6 top-80 right-16">
            <h1 className="text-3xl font-bold tracking-tighter  sm:text-4xl md:text-5xl lg:text-6xl">
            {aboutMeIntroProps.headerText}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">
            {aboutMeIntroProps.pText}
            </p>
        </div>
        <img
            alt="Background"
            className="h-full w-full object-cover object-center"
            height="800"
            src={aboutMeIntroProps.imgSrc}
            style={{
            aspectRatio: "1600/800",
            objectFit: "cover",
            }}
            width="1600"
        />
    </section>

  )
}

export default AboutMeIntro;