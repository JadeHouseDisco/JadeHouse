import { DockerIcon, ROSIcon, HTMLIcon, CssIcon, JavascriptIcon, CubeIcon, MeshIcon, ReactIcon, CppIcon, PythonIcon, GitIcon } from "@/components/icons"

interface skillsShowcaseProps {
    skillsShowcaseProps: {
        headingText: string;
        bodyText: string;
        icons: {
            icon: React.ReactNode;
            text: string;
        }[];
    };
  }

const SkillsShowcase: React.FC<skillsShowcaseProps> = ({ skillsShowcaseProps }) => {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{skillsShowcaseProps.headingText}</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {skillsShowcaseProps.bodyText}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {skillsShowcaseProps.icons.map((icon, index) => (
            <div className="flex flex-col items-center gap-2">
                {icon.icon}
                <span className="text-sm font-medium">{icon.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default SkillsShowcase;