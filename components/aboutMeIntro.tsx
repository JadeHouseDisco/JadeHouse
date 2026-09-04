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
    <div className="bg-black">
      <section key="1" className="relative min-h-[clamp(32rem,72svh,50rem)] w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/55 md:bg-transparent md:bg-gradient-to-r md:from-transparent md:from-20% md:to-black md:to-65%" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_bottom,#000_0%,transparent_18%,transparent_72%,#000_100%)]" />
        <div className="relative z-20 ml-auto flex min-h-[clamp(32rem,72svh,50rem)] w-full max-w-2xl flex-col justify-center space-y-4 px-4 py-16 text-left sm:px-8 md:w-1/2 md:space-y-6 md:px-10 xl:mr-[7vw]">
          <h1 className="text-balance text-[clamp(2.25rem,6vw,3.75rem)] font-bold leading-tight tracking-tighter">
            {aboutMeIntroProps.headerText}
          </h1>
          <p className="text-base leading-relaxed tracking-tight sm:text-lg">
            {aboutMeIntroProps.pText}
          </p>
          <div className="flex flex-wrap gap-3">
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
          fill
          className="z-0 object-cover object-center"
          sizes="100vw"
          priority
        />
      </section>
      <div aria-hidden="true" className="h-16 bg-black sm:h-24" />
    </div>
  )
}

export default AboutMeIntro;
