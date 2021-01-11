import React from 'react'
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux'
import { compose } from 'redux';

function ProjectDetails(props) {
    const { project } = props
    if(project){
        return(
            <div className="card col-8 offset-2 mt-5">
                <div className="card-header">posted by - {project.authorFirstname}</div>
                <div className="card-body">
                    <h4 className="card-title">project - {project.title}</h4>
                    <p className="card-text">{project.content}</p>
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
