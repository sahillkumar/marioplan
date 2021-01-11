import React from 'react'

function ProjectCard({project}) {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h4 className="card-title">project - {project.title} </h4>
                <p className="card-text">{project.content}</p>
            </div>
        </div>
        
    )
}

export default ProjectCard
