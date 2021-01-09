import React from 'react'

function ProjectCard({project}) {
    return (
        
        <div className="card mb-2">
            <div className="card-body">
                <h2 className="card-title">project - {project.id} </h2>
                <p className="card-text">{project.content}</p>
            </div>
        </div>
        
    )
}

export default ProjectCard
