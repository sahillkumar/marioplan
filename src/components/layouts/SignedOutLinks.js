import React from 'react'
import { NavLink } from 'react-router-dom'

function SignedOutLinks() {
    return (
        <>
            <li className="nav-item">
                <NavLink className="nav-link text-white" to="/signup"> Sign Up</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link text-white" to="/signin"> Log In</NavLink>
            </li>
        </>
    )
}

export default SignedOutLinks
