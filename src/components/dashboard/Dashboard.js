import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

class Dashboard extends Component {

    render() {
        const { projects,notifications } = this.props

        return (
            <div className="container">
                <div className='row'>
                    <div className="col col-md-6">
                        <ProjectList projects = {projects}/>
                    </div>
                    <div className="col col-md-5 offset-md-1">
                        <Notifications notifications = {notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) =>{
    return {
        projects:state.firestore.ordered.projects,
        notifications:state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection:'projects' , orderBy:['createdAt', 'desc']
        },
        {
            collection:'notifications', limit:3 ,orderBy:['time', 'desc']
        }
    ])
) (Dashboard)
