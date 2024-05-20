import Header from "@/components/header";
import AboutMeIntro from "@/components/aboutMeIntro"
import PurposeVisionGoals from "@/components/purposeVisionGoals"
import SkillsShowcase from "@/components/skillsShowcase"
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon,GoogleScholarIcon, ORCIDIcon, DockerIcon, ROSIcon, HTMLIcon, CssIcon, JavascriptIcon, CubeIcon, MeshIcon, ReactIcon, CppIcon, PythonIcon, GitIcon } from "@/components/icons"
import Footer from "@/components/footer"

const LabAboutMe = () => {
  const headerProps ={
    imageProps: {
      src: '/jadehouse_lab.png',
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
          { text: 'Academic', href: '/lab/aboutme/academic' },
        ], 
      },
      {
        href:"/lab/experiences",
        text: 'Experiences',
        subOptions: [
          { text: 'Research', href: '/lab/experiences/research' },
          { text: 'Work', href: '/lab/experiences/work' },
          { text: 'Project', href: '/lab/experiences/project' },
        ],
      },
      { text: 'Ideas', href: '/lab/ideas' },
      { text: 'Literature Reviews', href: '/lab/litrev' },
    ],
  }
  
  const aboutMeIntroProps = {
    headerText: "Hi, I'm Hyunwoo",
    pText: "Focused and determined mechanical engineering student graduating in 2025 with a strong interest in biorobotics and biomedical engineering. Eager to tackle practical problems to make a difference and enhance lives of anyone anywhere.",
    imgSrc: "/lab_profile_image.png"
  }

  const purposeVisionGoalsProps = {
    default: {
        imageHref: "/test.png",
        headText: "Default head text",
        bodyText: "Default body text",
    },
    buttons: [
      {
        buttonText: "Purpose",
        imageHref: "/test2.png",
        headText: "Purpose head text",
        bodyText: "Purpose body text"
      },
      {
        buttonText: "Vision",
        imageHref: "/test2.png",
        headText: "Vision head text",
        bodyText: "Vision body text"
      },
      {
        buttonText: "Goals",
        imageHref: "/test2.png",
        headText: "Goals head text",
        bodyText: "Goals body text"
      },
  ]
  }

  const skillsShowcaseProps = {
    headingText: "Skills",
    bodyText: "As a skilled full-stack developer, I have a diverse set of expertise that allows me to tackle a wide rangeof web development projects. From crafting responsive user interfaces to building robust backend systems, I'm well-versed in the latest technologies and best practices.",
    icons: [
      {
        icon: <CubeIcon className="h-12 w-12 text-primary" />,
        text: "CAD",
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
        src: '/jadehouse_lab.png',
        alt: 'Website Logo',
        width: 64,
        height: 64,
      },
      title:"JadeHouse Lab",
      description:"A short description of your website",
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