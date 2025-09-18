import LabHeader from "@/components/labHeader"
import AcademicInfoSection from "@/components/academicInfoSection"
import DownloadSection from "@/components/downloadSection"
import CourseTable from "@/components/courseTable"
import LabFooter from '@/components/labFooter';

export default function Academic() {
  const academicInfoSectionProps = {
    title: 'Academic Background and Information',
    sections: [
      {
        sectionTitle: 'Education History',
        items: [
          {
            title: 'Master of Science ETH in Robotics, Systems and Control',
            subtitle: ['ETH Zürich', '2025 - 2027'],
            icon: 'graduation',
          },
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
            title: "Global Undergraduate Awards Asia Regional Winner in Engineering",
            subtitle: ['The Global Undergraduate Awards'],
            icon: 'trophy',
          },
          {
            title: "AY 24/25 Dean's List",
            subtitle: ['Nanyang Technological University'],
            icon: 'trophy',
          },
          {
            title: "Multidisciplinary Team (MDT) Fund",
            subtitle: ['Nanyang Technological University'],
            icon: 'trophy',
          },
          {
            title: "AY 21/22 Dean's List",
            subtitle: ['Nanyang Technological University'],
            icon: 'trophy',
          },
          {
            title: "Accelerated Bachelor's Program",
            subtitle: ['Nanyang Technological University'],
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
        href: "https://api.cloudinary.com/v1_1/dss5ymotz/image/download?api_key=297963957635983&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiNDdkODc0OGE5MzVhOWUxODIwNDFhNDJmYjg1NWRjNjMiLCJ1c2VyX2V4dGVybmFsX2lkIjoiMGMyYTY1N2JkOWU2YmQ4NDhlMjRiN2NiMGFlNTc3IiwidXNlcl9jdXN0b21faWQiOiJhbGV4bGVlMjQ1OUBnbWFpbC5jb20iLCJjb21wb25lbnQiOiJjb25zb2xlIn0%3D&public_id=Hyunwoo_Lee_CV_ne9i9i&signature=c61e3d7db1ac523f393e9b136998edea5524ef95&source=ml&target_filename=Hyunwoo_Lee_CV_ne9i9i&timestamp=1758198293&type=upload"
      },
      {
        buttonText: "Transcript",
        href: "https://api.cloudinary.com/v1_1/dss5ymotz/image/download?api_key=297963957635983&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiNDdkODc0OGE5MzVhOWUxODIwNDFhNDJmYjg1NWRjNjMiLCJ1c2VyX2V4dGVybmFsX2lkIjoiMGMyYTY1N2JkOWU2YmQ4NDhlMjRiN2NiMGFlNTc3IiwidXNlcl9jdXN0b21faWQiOiJhbGV4bGVlMjQ1OUBnbWFpbC5jb20iLCJjb21wb25lbnQiOiJjb25zb2xlIn0%3D&public_id=Hyunwoo_Lee_Transcript_p31rbt&signature=e1ec7586df1758e849f6ca0806c6495e024ff804&source=ml&target_filename=Hyunwoo_Lee_Transcript_p31rbt&timestamp=1758198527&type=upload"
      }
    ]
  }

  const courseTableMasterProps = {
    headerText: "Masters Courses",
    tables: [
      {
        tableTitle: "Year 1 Semester 1",
        thead: {
          col1: "Courses",
          col2: "Grade",
        },
        tbody: [
          {
            col1: "Planning and Decision Making for Autonomous Robots",
            col2: "Ongoing",
          },
          {
            col1: "Dynamic Programming and Optimal Control",
            col2: "Ongoing",
          },
          {
            col1: "Microrobotics",
            col2: "Ongoing",
          },
          {
            col1: "Real-World Robotics - A Hands-On Project Class",
            col2: "Ongoing",
          },
          {
            col1: "ETH Zurich Distinguished Seminar in Robotics, Systems and Controls",
            col2: "Ongoing",
          },
          {
            col1: "Robot Dynamics",
            col2: "Ongoing",
          },
          {
            col1: "Probabilistic Artificial Intelligence",
            col2: "Ongoing",
          },
        ]
      },
    ] 
  }

  const courseTableBachelorProps = {
    headerText: "Bachelors Courses",
    tables: [
      {
        tableTitle: "Year 4 Semester 2",
        thead: {
          col1: "Courses",
          col2: "Grade",
        },
        tbody: [
          {
            col1: "ENGINEERING EXPERIMENTS",
            col2: "A-",
          },
          {
            col1: "MECHATRONICS ENGINEERING DESIGN",
            col2: "A+",
          },
          {
            col1: "FINAL YEAR PROJECT",
            col2: "A",
          },
          {
            col1: "MACHINE INTELLIGENCE",
            col2: "A+",
          },
          {
            col1: "REALTIME SOFTWARE FOR MECHATRONICS SYSTEMS",
            col2: "A+", 
          },
        ]
      },
      {
        tableTitle: "Year 4 Semester 1",
        thead: {
          col1: "Courses",
          col2: "Grade",
        },
        tbody: [
          {
            col1: "ENGINEERING COMMUNICATION",
            col2: "A",
          },
          {
            col1: "MATHEMATICAL METHODS IN ENGINEERING",
            col2: "A+",
          },
          {
            col1: "THERMODYNAMICS & HEAT TRANSFER",
            col2: "A+",
          },
          {
            col1: "MEASUREMENT & SENSING SYSTEMS",
            col2: "A",
          },
          {
            col1: "ROBOTICS",
            col2: "A", 
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

  return (
    <div key="1" className="flex flex-col min-h-[100dvh]">
      <LabHeader/>
      <AcademicInfoSection academicInfoSectionProps={academicInfoSectionProps}/>
      <DownloadSection downloadSectionProps={downloadSectionProps}/>
      <CourseTable courseTableProps={courseTableMasterProps}/>
      <CourseTable courseTableProps={courseTableBachelorProps}/>
      <LabFooter/>
    </div>
  )
}