import React from 'react'
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'
import { compose } from 'redux';
import moment from 'moment'
function ProjectDetails(props) {
    const { project } = props
    if(project){
        return(
            <div className="card col-8 offset-2 mt-5 p-2">
                <div className="card-body">
                    <h4 className="card-title text-capitalize"> {project.title} </h4>
                    <hr/>
                    <p className="card-text">{project.content}</p>
                    <hr/>
                    <span className="text-muted text-capitalize">
                        Posted By : {project.authorFirstname} {project.authorLastname} - { moment(project.createdAt.toDate()).calendar()}
                    </span>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="container text-center mt-5">
                Loading...
            </div>
        )
    }

}

const mapStateToProps = (state, myProps) =>{
    const { id } = myProps.match.params
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return{
        project:project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection:'projects'
        }
    ])
) (ProjectDetails)
