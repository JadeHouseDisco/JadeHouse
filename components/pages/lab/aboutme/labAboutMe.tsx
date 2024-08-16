import Header from "@/components/header";
import AboutMeIntro from "@/components/aboutMeIntro"
import PurposeVisionGoals from "@/components/purposeVisionGoals"
import SkillsShowcase from "@/components/skillsShowcase"
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon,GoogleScholarIcon, ORCIDIcon, DockerIcon, ROSIcon, HTMLIcon, CssIcon, JavascriptIcon, CubeIcon, MeshIcon, ReactIcon, CppIcon, PythonIcon, GitIcon, MatlabIcon, CNNIcon } from "@/components/icons"
import Footer from "@/components/footer"

const LabAboutMe = () => {
  const headerProps ={
    imageProps: {
      src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_lab.png?raw=true',
      width: 418,
      height: 538,
    },
    titles: [
      { text: 'JadeHouse', href: '/' },
      { text: 'Lab', href: '/lab' }
    ],
    dropdownOptions: [
      { text: 'Home', href: '/lab' },
      { text: 'About', 
        href: '/lab/aboutme', 
        subOptions: [
          { text: 'Academic Records', href: '/lab/aboutme/academic' },
        ], 
      },
      {
        href:"/lab/experiences",
        text: 'Experiences',
      },
      { text: 'Ideas', href: '/lab/ideas' },
      { text: 'Literature Reviews', href: '/lab/litrev' },
    ],
  }
  
  const aboutMeIntroProps = {
    headerText: "Hi, I'm Hyunwoo",
    pText: "Focused and determined mechanical engineering student with a passion for biomechatronics and biomedical engineering. Committed to leveraging my technical expertise to develop technologies that enhance lives of anyone anywhere and ultiamtely lead the robotic evolution of mankind.",
    imgSrc: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/aboutMeIntro/lab_profile_image.png?raw=true",
    buttons: [
      {
        text: "Academic Records",
        href: "/lab/aboutme/academic"
      },
    ]
  }

  const purposeVisionGoalsProps = {
    default: {
        imageHref: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/purposeVisionGoals/default.webp?raw=true",
        headText: "Fuel for my Ambitions",
        bodyText: "Discover the driving forces behind my pursuit to make significant contributions and change the world. My purpose, vision, and goals reflect my commitment to enhance lives of anyone anywhere and lead the robotic evolution of mankind. Dive in to learn more about my aspirations and the impact I strive to make.",
    },
    buttons: [
      {
        buttonText: "Purpose",
        imageHref: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/purposeVisionGoals/purpose.webp?raw=true",
        headText: "Redefining Evolution",
        bodyText: "I want technology to ensure everyone's right to life is respected, regardless of socioeconomic status. I envision transforming the perception of old age and disability from a handicap into an opportunity for an upgrade. Ultimately, I aim to push beyond the biological limits of humans and achieve a new era of robotic evolution."
      },
      {
        buttonText: "Vision",
        imageHref: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/purposeVisionGoals/vision.webp?raw=true",
        headText: "Empowering Lives",
        bodyText: "I wish to develop accessible and affordable technology that assist anyone anywhere. I strive for technology that outperforms its biological counterparts while seamlessely integrating with humans. I'm driven to normalize the replacement of biological parts with advanced prostheses, enhancing human capabilities and quality of life."
      },
      {
        buttonText: "Goals",
        imageHref: "https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/purposeVisionGoals/goals.webp?raw=true",
        headText: "Revolutionizing Technology",
        bodyText: "I aim to pioneer advancements in neurotechnology and prosthetics to revolutionize human-machine interaction. I strive to develop bi-directional brain-machine interfaces, both invasive and non-invasive, and engineer precise prostheses that outperform biological counterparts. Furthermore, I aspire to expand expertise into exoskeletons and implantable devices, augmenting human potential and fostering human-machine symbiosis."
      },
  ]
  }

  const skillsShowcaseProps = {
    headingText: "Skills",
    bodyText: "As a passionate engineer, I bring versatile skills set to tackle diverse technical challenges and excel in various engineering projects. Committed to staying updated with the latest advancements and expanding my capabiliites, I am prepared to deliver innovative solutions and contribute effectively to any team or endeavor.",
    icons: [
      {
        icon: <CubeIcon className="h-12 w-12 text-primary" />,
        text: "Computer Assisted Drawing",
      },
      {
        icon: <MeshIcon className="h-12 w-12 text-primary" />,
        text: "Finite Element Analysis",
      },
      {
        icon: <PythonIcon className="h-12 w-12 text-primary" />,
        text: "Python",
      },
      {
        icon: <CppIcon className="h-12 w-12 text-primary" />,
        text: "C++",
      },
      {
        icon: <JavascriptIcon className="h-12 w-12 text-primary" />,
        text: "JavaScript",
      },
      {
        icon: <HTMLIcon className="h-12 w-12 text-primary" />,
        text: "HTML",
      },
      {
        icon: <CssIcon className="h-12 w-12 text-primary" />,
        text: "CSS",
      },
      {
        icon: <ReactIcon className="h-12 w-12 text-primary" />,
        text: "React",
      },
      {
        icon: <ROSIcon className="h-12 w-12 text-primary" />,
        text: "ROS",
      },
      {
        icon: <MatlabIcon className="h-12 w-12 text-primary" />,
        text: "Matlab",
      },
      {
        icon: <CNNIcon className="h-12 w-12 text-primary" />,
        text: "Convolutional Neural Network",
      },
      {
        icon: <GitIcon className="h-12 w-12 text-primary" />,
        text: "Git",
      },
      {
        icon: <DockerIcon className="h-12 w-12 text-primary" />,
        text: "Docker",
      }
    ]
  }

    const footerProps = {
      logo: {
        src: 'https://github.com/JadeHouseDisco/JadeHouse_Files/blob/main/logo/jadehouse_lab.png?raw=true',
        alt: 'Website Logo',
        width: 64,
        height: 64,
      },
      title:"JadeHouse Lab",
      description:"Portfolio of my professional life",
      navLinks: [
        { text: 'Home', href: '/lab' },
        { text: 'About', href: '/lab/aboutme' },
        { text: 'Experiences', href: '/lab/experiences' },
        { text: 'Ideas', href: '/lab/ideas' },
        { text: 'Literature Reviews', href: '/lab/litrev' },
      ],
      socialLinks: [
        {
          href: 'mailto:HYUNWOO001@e.ntu.edu.sg',
          icon: <MailIcon className="h-6 w-6" />,
        },
        {
          href: 'https://github.com/JadeHouseDisco',
          icon: <GithubIcon className="h-6 w-6" />,
        },
        {
          href: 'https://linkedin.com/in/hyunwoolee0329',
          icon: <LinkedinIcon className="h-6 w-6" />,
        },
        {
          href: 'https://www.youtube.com/@JadeHouseCinema',
          icon: <YoutubeIcon className="h-6 w-6" />,
        },
        {
          href: '#',
          icon: <GoogleScholarIcon className="h-6 w-6" />,
        },
        {
          href: '#',
          icon: <ORCIDIcon className="h-6 w-6" />,
        },
      ],
    }

    return (
      <div key="1" className="flex flex-col min-h-[100dvh]">
        <Header headerProps={headerProps}/>
        <AboutMeIntro aboutMeIntroProps={aboutMeIntroProps}/>
        <PurposeVisionGoals purposeVisionGoalsProps={purposeVisionGoalsProps}/>
        <SkillsShowcase skillsShowcaseProps={skillsShowcaseProps}/>
        <Footer footerProps={footerProps}/>
      </div>
    )
}

export default LabAboutMe;