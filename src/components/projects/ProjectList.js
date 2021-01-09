import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectList({ projects }) {
    return (
        <div className="p-5">
            {
                projects && projects.map(project =>(
                    <ProjectCard project={project} key={project.id}/>
                ))
            }
        </div>
    )
}

export default ProjectList
