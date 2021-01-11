import React from "react";
import { connect } from "react-redux";
import { Route,Redirect} from "react-router-dom"


const PrivateRoute = (props)=> {
    const { component:Component,auth, ...rest} = props
    return ( 
        <Route
            {...rest}
            render={ props =>
            auth.uid ? (
                <Component {...props}/>
            ) : (
                <Redirect
                to={{
                    pathname: "/signin",
                    state: { from: props.location }
                }}
                />
            ) 
            }
      />
     );
}

const mapStateToProps =(state) =>{
    return{
        auth:state.firebase.auth
    }
}
export default connect(mapStateToProps) (PrivateRoute);