import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

function Navbar(props) {
    const links = props.auth.uid ? <SignedInLinks/> : <SignedOutLinks/>
    // console.log(props.auth);
    return (
        <div className="navbar bg-dark navbar-dark navbar-expand-lg">
             <div className="container-fluid">
                <Link className="navbar-brand" to="/">MarioPlan</Link>
                <div className="navbar-nav">
                    { props.auth.isLoaded ? links : null }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        auth:state.firebase.auth
    }
}
export default connect(mapStateToProps) (Navbar)
