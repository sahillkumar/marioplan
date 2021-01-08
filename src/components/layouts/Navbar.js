import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

function Navbar() {
    return (
        <div className="navbar bg-dark navbar-expand-lg">
             <div className="container-fluid">
                <Link className="navbar-brand" to="/">MarioPlan</Link>
                <div className="navbar-nav">
                    <SignedInLinks/>
                    <SignedOutLinks/>
                </div>
            </div>
        </div>
    )
}
export default Navbar
