const initState = {
    authErr:null
}

const authReducer = ( state = initState, action )=>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('signIn successfull');
            return {...state,authErr:null}
        case 'LOGIN_FAILED':
            console.log('signIn failed');
            return {...state,authErr:action.err.message}
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state
        case 'SIGNUP_SUCCESS':
            console.log('signup successfull');
            return {...state,authErr:null}
        case 'SIGNUP_ERROR':
            console.log('signup failed');
            return {...state,authErr:action.err.message}
        default:
            return state;
    }
}

export default authReducer