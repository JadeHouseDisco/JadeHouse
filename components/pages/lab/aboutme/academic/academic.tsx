import Header from "@/components/header";
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon, GoogleScholarIcon, ORCIDIcon } from "@/components/icons"
import AcademicInfoSection from "@/components/academicInfoSection"
import DownloadSection from "@/components/downloadSection"
import CourseTable from "@/components/courseTable"
import Footer from "@/components/footer"

export default function Academic() {
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

  const academicInfoSectionProps = {
    title: 'Academic Background and Information',
    sections: [
      {
        sectionTitle: 'Education History',
        items: [
          {
            title: 'Bachelor of Science in Mechanical Engineering',
            subtitle: ['Nanyang Technological University', '2020 - 2025'],
            icon: 'graduation',
          },
          {
            title: 'International Baccalaureate (IB) Diploma',
            subtitle: ['Northbridge International School Cambodia', '2012 - 2020'],
            icon: 'graduation',
          },
        ],
      },
      {
        sectionTitle: 'Achievements and Awards',
        items: [
          {
            title: "AY 21/22 Dean's List",
            subtitle: ['Nanyang Technological University', 'CGPA: 4.84'],
            icon: 'trophy',
          },
          {
            title: "Accelerated Bachelor's Program",
            subtitle: ['Nanyang Technological University', '3.5 Years Candidature'],
            icon: 'trophy',
          },
        ],
      },
    ],
  };

  const downloadSectionProps = {
    title: "CV/Transcript",
    downloads: [
      {
        buttonText: "CV",
        href: "https://github.com/JadeHouseDisco/JadeHouse_Files/raw/main/files/Hyunwoo_Lee_CV.docx"
      },
      {
        buttonText: "Transcript",
        href: "https://github.com/JadeHouseDisco/JadeHouse_Files/raw/main/files/Hyunwoo_Lee_Transcript.pdf"
      }
    ]
  }

  const courseTableProps = {
    headerText: "Courses Taken",
    tables: [
      {
        tableTitle: "Year 4 Semester 1",
        thead: {
          col1: "Courses",
          col2: "Grade",
        },
        tbody: [
          {
            col1: "ENGINEERING COMMUNICATION",
            col2: "ONGOING",
          },
          {
            col1: "MATHEMATICAL METHODS IN ENGINEERING",
            col2: "ONGOING",
          },
          {
            col1: "THERMODYNAMICS & HEAT TRANSFER",
            col2: "ONGOING",
          },
          {
            col1: "MEASUREMENT & SENSING SYSTEMS",
            col2: "ONGOING",
          },
          {
            col1: "ROBOTICS",
            col2: "ONGOING", 
          },
        ]
      },
      {
        tableTitle: "Year 3 Semester 1",
        thead: {
          col1: "Courses",
          col2: "Grade",
        },
        tbody: [
          {
            col1: "PROFESSIONAL INTERNSHIP",
            col2: "PASS",
          },
          {
            col1: "ANATOMY: MUSCULOSKELETAL AND INTEGUMENTARY SYSTEMS",
            col2: "PASS",
          },
          {
            col1: "GIS DATA ACQUISITION AND MAP DESIGN",
            col2: "PASS",
          },
          {
            col1: "INTRODUCTION TO NEGOTIATION: A STRATEGIC PLAYBOOK FOR BECOMING A PRINCIPLED AND PERSUASIVE NEGOTIATOR",
            col2: "PASS",
          },
          {
            col1: "MORAL FOUNDATIONS OF POLITICS",
            col2: "PASS",
          },
          {
            col1: "THE SCIENCE OF WELL-BEING",
            col2: "PASS",
          },
        ]
      },
      {
        tableTitle: "Year 2 Semester 2",
        thead: {
          col1: "Courses",
          col2: "Grade",
        },
        tbody: [
          {
            col1: "FROM ALCHEMY TO CHEMISTRY",
            col2: "PASS",
          },
          {
            col1: "INTRODUCTION TO DATA SCIENCE & ARTIFICIAL INTELLIGENCE",
            col2: "A+",
          },
          {
            col1: "ENGINEERING GRAPHICS",
            col2: "A",
          },
          {
            col1: "MECHATRONICS SYSTEM INTERFACING",
            col2: "A+",
          },
          {
            col1: "ENGINEERING INNOVATION & DESIGN",
            col2: "A+",
          },
          {
            col1: "MACHINE ELEMENT DESIGN",
            col2: "A-",
          },
          {
            col1: "CONTROL THEORY",
            col2: "A+",
          },
          {
            col1: "FLUID MECHANICS",
            col2: "A-",
          },
          {
            col1: "UNDERGRADUATE RESEARCH",
            col2: "PASS",
          },
        ]
      },
      {
        tableTitle: "Year 2 Semester 1",
        thead: {
          col1: "Courses",
          col2: "Grade",
        },
        tbody: [
          {
            col1: "FUNDAMENTALS OF MANAGEMENT",
            col2: "S",
          },
          {
            col1: "PRODUCT DEVELOPMENT CHALLENGE",
            col2: "A+",
          },
          {
            col1: "THEORY OF MECHANISM",
            col2: "A+",
          },
          {
            col1: "MANUFACTURING PROCESSES",
            col2: "A+",
          },
          {
            col1: "ENGINEERING MATHEMATICS",
            col2: "A+",
          },
          {
            col1: "INTRODUCTION TO MECHATRONICS SYSTEMS DESIGN",
            col2: "A",
          },
          {
            col1: "LABORATORY EXPERIMENTS (ME)",
            col2: "A-",
          },
          {
            col1: "SOLID MECHANICS & VIBRATION",
            col2: "A+",
          },
          {
            col1: "KICKSTART YOUR CAREER SUCCESS",
            col2: "PASS",
          },
        ]
      },
      {
        tableTitle: "Year 1 Semester 2",
        thead: {
          col1: "Courses",
          col2: "Grade",
        },
        tbody: [
          {
            col1: "MATERIALS SCIENCE",
            col2: "B+",
          },
          {
            col1: "ENGINEERS & SOCIETY",
            col2: "A-",
          },
          {
            col1: "DYNAMICS",
            col2: "A+",
          },
          {
            col1: "INTRODUCTION TO COMPUTATIONAL THINKING",
            col2: "A+",
          },
          {
            col1: "MECHANICS OF MATERIALS",
            col2: "A+",
          },
          {
            col1: "INTRODUCTION TO ELECTRICAL CIRCUITS & ELECTRONIC DEVICES",
            col2: "A+",
          },
          {
            col1: "MATHEMATICS 2",
            col2: "A+",
          },
        ]
      },
      {
        tableTitle: "Year 1 Semester 1",
        thead: {
          col1: "Courses",
          col2: "Grade",
        },
        tbody: [
          {
            col1: "NATURAL HAZARDS & SOCIETY",
            col2: "S",
          },
          {
            col1: "ENTERPRISE & INNOVATION",
            col2: "PASS",
          },
          {
            col1: "AN INTRODUCTION TO ENGINEERING & PRACTICES",
            col2: "A",
          },
          {
            col1: "SUSTAINABILITY: SEEING THROUGH THE HAZE",
            col2: "PASS",
          },
          {
            col1: "PRINCIPLES OF ECONOMICS",
            col2: "B+",
          },
          {
            col1: "EFFECTIVE COMMUNICATION",
            col2: "A-",
          },
          {
            col1: "ETHICS & MORAL REASONING",
            col2: "PASS",
          },
          {
            col1: "INTRODUCTION TO THERMO-FLUIDS",
            col2: "A+",
          },
          {
            col1: "MATHEMATICS 1",
            col2: "A+",
          },
          {
            col1: "PHYSICS",
            col2: "A+",
          },
        ]
      },
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
        href: 'https://scholar.google.com/citations?hl=en&user=G5N12aYAAAAJ',
        icon: <GoogleScholarIcon className="h-6 w-6" />,
      },
      {
        href: 'https://orcid.org/0009-0004-2586-0493',
        icon: <ORCIDIcon className="h-6 w-6" />,
      },
    ],
  }

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <Header headerProps={headerProps}/>
      <AcademicInfoSection academicInfoSectionProps={academicInfoSectionProps}/>
      <DownloadSection downloadSectionProps={downloadSectionProps}/>
      <CourseTable courseTableProps={courseTableProps}/>
      <Footer footerProps={footerProps}/>
    </div>
  )
}