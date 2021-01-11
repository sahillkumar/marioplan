import React from 'react'
import ProjectCard from './ProjectCard'
import { Link } from "react-router-dom";

function ProjectList({ projects }) {
    return (
        <div className="p-5">
            {
                projects && projects.map(project =>(
                    <Link to={`/project/${project.id}`}  key={project.id} className="text-decoration-none text-reset">
                        <ProjectCard project={project}/>
                    </Link>
                ))
            }
        </div>
    )
}

export default ProjectList
