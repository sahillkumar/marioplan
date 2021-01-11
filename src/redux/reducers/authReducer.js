const initState = {
    authErr:''
}

const authReducer = ( state = initState, action )=>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('signIn successfull');
            return {...state,authErr:null}
        case 'LOGIN_FAILED':
            console.log('signIn failed');
            return {...state,authErr:'Login Failed'}
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state
        default:
            return state;
    }
}

export default authReducer