import LabHeader from "@/components/labHeader"
import AboutMeIntro from "@/components/aboutMeIntro"
import PurposeVisionGoals from "@/components/purposeVisionGoals"
import SkillsShowcase from "@/components/skillsShowcase"
import { DockerIcon, ROSIcon, HTMLIcon, CssIcon, JavascriptIcon, CubeIcon, MeshIcon, ReactIcon, CppIcon, PythonIcon, GitIcon, MatlabIcon, CNNIcon } from "@/components/icons"
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
        imageHref: "https://res.cloudinary.com/dss5ymotz/image/upload/v1775183828/main_ysvaix.png",
        headText: "Far and blurry destination",
        bodyText: "I like to have a general direction in my life rather than a clear target. I try my best everyday hoping I am moving in the desired direction.",
    },
    buttons: [
      {
        buttonText: "Purpose",
        imageHref: "https://res.cloudinary.com/dss5ymotz/image/upload/v1775184156/purpose_hjzzja.png",
        headText: "Technology that helps lives",
        bodyText: "I am driven by the desire to create technology that can make a tangible difference in people's lives. I want my technology to bring smile to people."
      },
      {
        buttonText: "Vision",
        imageHref: "https://res.cloudinary.com/dss5ymotz/image/upload/v1775183826/vision_yc1bc3.png",
        headText: "Robotic evolution of mankind",
        bodyText: "I envision the next phase of human evolution, where robots help push humans beyond their biological limits. Future of humanity will be shaped by our own hands."
      },
      {
        buttonText: "Goals",
        imageHref: "https://res.cloudinary.com/dss5ymotz/image/upload/v1775183828/goals_smtx30.png",
        headText: "Pioneer of technology",
        bodyText: "Part of the process is not enough. I want to be the one who leads the process. I want to be the one who creates the future."
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
