import React from 'react';

function ProjectCard({ project }) {
    const { title, description, image, link } = project;

    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
            <a href={link}>View Project</a>
        </div>
    );
}

export default ProjectCard;
