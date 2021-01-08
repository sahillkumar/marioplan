import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedInLinks() {
    return (
        <>
            <li className="nav-item">
                <NavLink className="nav-link" to="/"> New Project</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/"> Log Out</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/" className="nav-link btn btn-danger m-auto" style={{ height:50, width:50, borderRadius:'50%',padding:'10px'}}>SK</NavLink>
            </li>
        </>
    )
}

export default SignedInLinks
