import React from 'react'
import moment from 'moment'
function ProjectCard({project}) {
    return (
        <div className="card mb-4"> 
            <div className="card-body">
                <h4 className="card-title text-capitalize"> {project.title} </h4>
                <hr/>
                <p className="card-text" style={{height:100 , overflow:'hidden'}}>{project.content}</p>
                <hr/>
                <span className="text-muted text-capitalize">Posted By : {project.authorFirstname} {project.authorLastname} - { moment(project.createdAt.toDate()).calendar()}</span>
            </div>
        </div>
        
    )
}

export default ProjectCard
