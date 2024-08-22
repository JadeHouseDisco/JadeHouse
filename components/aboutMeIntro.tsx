import Link from 'next/link';
import Image from 'next/image';

interface AboutMeIntroProps {
    aboutMeIntroProps: {
        headerText: string;
        pText: string;
        imgSrc: string;
        buttons?: {
          text: string;
          href: string;
        }[];
    };
  }

const AboutMeIntro: React.FC<AboutMeIntroProps> = ({ aboutMeIntroProps }) => {
  return (
    <section key="1" className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent from-35% to-black to-55%" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black to-95%" />
        <div className="absolute w-full max-w-md space-y-4 text-left md:space-y-6 right-[7vw] flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold tracking-tighter">
            {aboutMeIntroProps.headerText}
          </h1>
          <p className="text-lg tracking-tight leading-[3.5vh]">
            {aboutMeIntroProps.pText}
          </p>
          <div className="flex gap-x-4"> {/* Add a flex container around the buttons */}
            {aboutMeIntroProps.buttons && aboutMeIntroProps.buttons.map((button, index) => (
              <Link
                key={index} // Adding a unique key for each element in the list
                className="inline-flex items-center justify-center h-10 font-bold px-3 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-[#00a896] transition-colors duration-300 ease-in-out"
                href={button.href}
              >
                {button.text}
              </Link>
            ))}
          </div>
          
        </div>
        
        <Image
          alt="Background"
          src={aboutMeIntroProps.imgSrc}
          width={1600}
          height={800}
          className="h-full w-full object-cover object-center"
          style={{
            aspectRatio: "1600/800",
            objectFit: "cover",
          }}
          layout="responsive"
        />
        
    </section>
  )
}

export default AboutMeIntro;