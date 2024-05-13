import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  viewLink: string;
}

interface ProjectGridProps {
  projectGridProps: {
    projectTitle: string;
    projects: ProjectCardProps[];
    viewAllLink: string;
    buttonText: string;
  }
}

const Card: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
    {children}
  </div>
);

const CardHeader: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div>{children}</div>
);

const CardContent: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="p-4">{children}</div>
);

const CardTitle: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h3 className="text-xl font-bold mb-2 text-gray-200">
    {children}
  </h3>
);

const CardFooter: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="p-4 bg-gray-800">{children}</div>
);

const ProjectGrid: React.FC<ProjectGridProps> = ({ projectGridProps }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 ml-6 text-gray-200 text-center">
          {projectGridProps.projectTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectGridProps.projects.map((project, index) => (
            <a 
              className="transition duration-300 hover:scale-105 hover:cursor-pointer"
              href={project.viewLink}
              key={index}
            >  
              <Card>
                <CardHeader>
                  <img
                    alt={project.image.alt}
                    className="rounded-t-lg object-cover w-full aspect-[4/3]"
                    height={project.image.height}
                    src={project.image.src}
                    width={project.image.width}
                  />
                </CardHeader>
                <CardFooter>
                  <div className="h-22 overflow-hidden">
                    <CardTitle>{project.title}</CardTitle>
                    <p className="text-gray-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            className="inline-flex items-center justify-center h-10 px-6 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
            href={projectGridProps.viewAllLink}
          >
            {projectGridProps.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;