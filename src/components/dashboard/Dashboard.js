import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className='row'>
                    <div className="col col-md-6 bg-warning">
                        <ProjectList/>
                    </div>
                    <div className="col col-md-5 offset-md-1 bg-info">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
