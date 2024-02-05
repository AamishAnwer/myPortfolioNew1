import React from 'react';

const Previous = [
    {
        id: 1,
        title: "Project One",
        description: "This is a brief description of Project One.",
        imageUrl: "url-to-image-1.jpg",
    },
    {
        id: 2,
        title: "Project Two",
        description: "This is a brief description of Project Two.",
        imageUrl: "url-to-image-2.jpg",
    },
    // ... more projects
];

const ProjectCard = ({ project }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={project.imageUrl} alt={project.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.title}</div>
                <p className="text-gray-700 text-base">
                    {project.description}
                </p>
            </div>
        </div>
    );
};

const ProjectsGrid = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
                {projects.map((project) => (
                    <div key={project.id} className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/3">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Previous;
