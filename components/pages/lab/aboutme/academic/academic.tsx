import Header from "@/components/header";
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon, GoogleScholarIcon, ORCIDIcon } from "@/components/icons"
import AcademicInfoSection from "@/components/academicInfoSection"
import DownloadSection from "@/components/downloadSection"
import CourseTable from "@/components/courseTable"
import Footer from "@/components/footer"

export default function Academic() {
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
            title: 'Bachelor of Science in Computer Science',
            subtitle: ['University of California, Berkeley', 'GPA: 3.8'],
            icon: 'trophy',
          },
          {
            title: 'Certified Scrum Master',
            subtitle: ['Scrum Alliance', 'Issued: May 2021'],
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
        buttonText: "Download CV",
        href: "/Hyunwoo_Lee_CV.docx"
      },
      {
        buttonText: "Download Transcript",
        href: "/Hyunwoo_Lee_Transcript.pdf"
      }
    ]
  }

  const courseTableProps = {
    headerText: "Courses Taken",
    tables: [
      {
        tableTitle: "Year 2 Semester 2",
        thead: {
          col1: "Courses",
          col2: "Grade",
        },
        tbody: [
          {
            col1: "Engineering Graphics",
            col2: "A",
          },
          {
            col1: "Mathematics",
            col2: "A+",
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
            col1: "Engineering Graphics",
            col2: "A",
          },
          {
            col1: "Mathematics",
            col2: "A+",
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
            col1: "Engineering Graphics",
            col2: "A",
          },
          {
            col1: "Mathematics",
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
            col1: "Engineering Graphics",
            col2: "A",
          },
          {
            col1: "Mathematics",
            col2: "A+",
          },
        ]
      },
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
      <AcademicInfoSection academicInfoSectionProps={academicInfoSectionProps}/>
      <DownloadSection downloadSectionProps={downloadSectionProps}/>
      <CourseTable courseTableProps={courseTableProps}/>
      <Footer footerProps={footerProps}/>
    </div>
  )
}