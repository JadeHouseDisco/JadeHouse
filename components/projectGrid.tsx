"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image'


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

const CardTitle: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h3 className="text-xl font-bold mb-2 text-gray-200">
    {children}
  </h3>
);

const CardFooter: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="p-4 bg-gray-800">{children}</div>
);

const ProjectGrid: React.FC<ProjectGridProps> = ({ projectGridProps }) => {
  const [hoveringTile, setHoveringTile] = useState<number | null>(null);
  const [overflowingTitles, setOverflowingTitles] = useState<boolean[]>([]);

  const titleRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
      setHoveringTile(index);
  }

  const handleMouseLeave = () => {
      setHoveringTile(null);
  }

  useEffect(() => {
      const checkOverflowingTitles = () => {
          const next = titleRefs.current.map((title) =>
            title ? title.scrollWidth > title.clientWidth : false,
          );
          setOverflowingTitles((current) =>
            current.length === next.length && current.every((value, index) => value === next[index])
              ? current
              : next,
          );
      };

      checkOverflowingTitles();
      window.addEventListener('resize', checkOverflowingTitles, { passive: true });

      return () => {
          window.removeEventListener('resize', checkOverflowingTitles);
      };
  }, [projectGridProps.projects]);
  
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-[clamp(2rem,6vw,2.5rem)] font-bold text-gray-200">
          {projectGridProps.projectTitle}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {projectGridProps.projects.slice(0, 3).map((project, index) => (
            <Link
              className="min-w-0 transition duration-300 hover:-translate-y-1 hover:cursor-pointer"
              href={project.viewLink}
              key={project.viewLink}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >  
              <Card>
                <CardHeader>
                <Image
                  alt={project.image.alt}
                  className="rounded-t-lg object-cover w-full aspect-[4/3]"
                  height={project.image.height}
                  src={project.image.src}
                  width={project.image.width}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                </CardHeader>
                <CardFooter>
                  <div className="h-22">
                    <CardTitle>
                      <div className="relative flex min-w-0 overflow-hidden whitespace-nowrap">
                        <p 
                        ref={(el) => {
                          titleRefs.current[index] = el;
                        }}
                        className = {`${hoveringTile === index && overflowingTitles[index] ? "animate-marquee inline-block" : "truncate"}`}>
                          {project.title}
                        </p>
                        {hoveringTile === index && overflowingTitles[index] && (
                          <p className="absolute animate-marquee2 inline-block">
                              {project.title}
                          </p>
                        )}
                      </div>
                    </CardTitle>
                    <p className="text-gray-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </Link>
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
