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
        <div className="absolute inset-0 bg-gradient-to-r from-transparent from-35% to-black to-55%" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black to-90%" />
        <div className="absolute w-[35vw] space-y-6 right-[5vw] flex flex-col">
          <h1 className="text-[4vw] font-bold tracking-tighter">
            {aboutMeIntroProps.headerText}
          </h1>
          <p className="text-[1.5vw] tracking-tight leading-[5vh]">
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