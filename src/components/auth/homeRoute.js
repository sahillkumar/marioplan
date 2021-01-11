import React from "react";
import { connect } from "react-redux";
import { Route,Redirect} from "react-router-dom"


const HomeRoute = (props)=> {
    const { component:Component,auth, ...rest} = props
    return ( 
        <Route
            {...rest}
            render={ props =>
            auth.uid ?
            (<Redirect
                to={{
                    pathname: "/",
                    state: { from: props.location }
                }}
                /> ): (
                    <Component {...props}/>
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
export default connect(mapStateToProps) (HomeRoute);