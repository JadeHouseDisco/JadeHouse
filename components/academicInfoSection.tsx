import {GraduationCapIcon, TrophyIcon} from "@/components/icons"

interface AcademicInfoSectionProps {
  academicInfoSectionProps: {
    title: string;
    sections: {
        sectionTitle: string;
        items: {
            title: string;
            subtitle: string[];
            icon: string;
        }[]
    }[]
  }
}

const AcademicInfoSection: React.FC<AcademicInfoSectionProps> = ({ academicInfoSectionProps }) => {
  return (
    <section className="mx-auto mb-12 w-full max-w-[1600px] px-4 pb-4 pt-8 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{academicInfoSectionProps.title}</h2>
      <div className="mt-6 space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
        {academicInfoSectionProps.sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold">{section.sectionTitle}</h3>
            <ul className="mt-4 space-y-4 text-gray-400">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      {item.icon === 'graduation' && (
                        <GraduationCapIcon className="h-6 w-6 text-gray-500" />
                      )}
                      {item.icon === 'trophy' && (
                        <TrophyIcon className="h-6 w-6 text-gray-500 mt-1" />
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-100">{item.title}</p>
                      {item.subtitle.map((text) => (
                        <p className="text-sm" key={text}>
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicInfoSection;

