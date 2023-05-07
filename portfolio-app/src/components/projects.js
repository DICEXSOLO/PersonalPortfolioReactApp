import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet...',
        image: 'https://via.placeholder.com/300x150',
        link: 'https://example.com/project1'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Pellentesque commodo bibendum libero...',
        image: 'https://via.placeholder.com/300x150',
        link: 'https://example.com/project2'
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Donec facilisis erat eget feugiat bibendum...',
        image: 'https://via.placeholder.com/300x150',
        link: 'https://example.com/project3'
    },
];

function Projects() {
    return (
        <div>
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}

export default Projects;
