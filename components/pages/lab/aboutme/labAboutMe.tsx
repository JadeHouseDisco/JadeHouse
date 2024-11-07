import LabHeader from "@/components/labHeader"
import AboutMeIntro from "@/components/aboutMeIntro"
import PurposeVisionGoals from "@/components/purposeVisionGoals"
import SkillsShowcase from "@/components/skillsShowcase"
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon,GoogleScholarIcon, ORCIDIcon, DockerIcon, ROSIcon, HTMLIcon, CssIcon, JavascriptIcon, CubeIcon, MeshIcon, ReactIcon, CppIcon, PythonIcon, GitIcon, MatlabIcon, CNNIcon } from "@/components/icons"
import LabFooter from '@/components/labFooter';

const LabAboutMe = () => {
  const aboutMeIntroProps = {
    headerText: "Hi, I'm Hyunwoo",
    pText: "Focused and determined mechanical engineering student with a passion for biomechatronics and biomedical engineering. Committed to leveraging my technical expertise to develop technologies that enhance lives of anyone anywhere and ultiamtely lead the robotic evolution of mankind.",
    imgSrc: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730707797/lab_profile_image_qijfst.png",
    buttons: [
      {
        text: "Academic Records",
        href: "/lab/aboutme/academic"
      },
    ]
  }

  const purposeVisionGoalsProps = {
    default: {
        imageHref: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708770/default_saqrzq.webp",
        headText: "Fuel for my Ambitions",
        bodyText: "Discover the driving forces behind my pursuit to make significant contributions and change the world. My purpose, vision, and goals reflect my commitment to enhance lives of anyone anywhere and lead the robotic evolution of mankind. Dive in to learn more about my aspirations and the impact I strive to make.",
    },
    buttons: [
      {
        buttonText: "Purpose",
        imageHref: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708770/purpose_trzy61.webp",
        headText: "Redefining Evolution",
        bodyText: "I want technology to ensure everyone's right to life is respected, regardless of socioeconomic status. I envision transforming the perception of old age and disability from a handicap into an opportunity for an upgrade. Ultimately, I aim to push beyond the biological limits of humans and achieve a new era of robotic evolution."
      },
      {
        buttonText: "Vision",
        imageHref: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708770/vision_hvu6if.webp",
        headText: "Empowering Lives",
        bodyText: "I wish to develop accessible and affordable technology that assist anyone anywhere. I strive for technology that outperforms its biological counterparts while seamlessely integrating with humans. I'm driven to normalize the replacement of biological parts with advanced prostheses, enhancing human capabilities and quality of life."
      },
      {
        buttonText: "Goals",
        imageHref: "https://res.cloudinary.com/dss5ymotz/image/upload/v1730708770/goals_qbhaf3.webp",
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

    return (
      <div key="1" className="flex flex-col min-h-[100dvh]">
        <LabHeader/>
        <AboutMeIntro aboutMeIntroProps={aboutMeIntroProps}/>
        <PurposeVisionGoals purposeVisionGoalsProps={purposeVisionGoalsProps}/>
        <SkillsShowcase skillsShowcaseProps={skillsShowcaseProps}/>
        <LabFooter/>
      </div>
    )
}

export default LabAboutMe;