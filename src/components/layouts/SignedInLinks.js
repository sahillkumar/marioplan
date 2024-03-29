import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../redux/actions/authActions'

function SignedInLinks(props) {
    return (
        <>
            <li className="nav-item">
                <NavLink className="nav-link" to="/project/create"> New Project</NavLink>
            </li>
            <li className="nav-item">
                <div className="btn nav-link" onClick={props.signOut} style={{background:'transparent'}}> Log Out</div>
            </li>
            <li className="nav-item">
                <NavLink to="/" className="nav-link btn btn-danger m-auto text-uppercase" style={{ height:50, width:50, borderRadius:'50%',padding:'10px'}}>{props.profile.initials}</NavLink>
            </li>
        </>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signOut:()=>dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(SignedInLinks)
