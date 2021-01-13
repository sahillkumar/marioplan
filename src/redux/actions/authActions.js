export const signIn = (credentials) =>{
    return ( dispatch, getState, { getFirebase }) =>{
        //async call for authentication
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        .then(()=>{
            dispatch({
                type:'LOGIN_SUCCESS'
            })
        })
        .catch(err=>{
            dispatch({
                type:'LOGIN_FAILED',
                err
            })
        })
    }
}

export const signOut = () =>{
    return (dispatch,getState,{ getFirebase}) =>{
        const firebase = getFirebase()
        firebase.auth().signOut()
        .then(()=>{
            dispatch({
                type:'SIGNOUT_SUCCESS'
            })
        })
    }
}

export const signUp = (newUser) =>{
    return (dispatch,getState,{ getFirebase, getFirestore}) =>{
        const firebase = getFirebase()
        const firestore = getFirestore()
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
        .then((response) =>{
            return firestore.collection('users').doc(response.user.uid).set({
                authorFirstname:newUser.firstname,
                authorLastname:newUser.lastname,
                initials:newUser.firstname[0]+newUser.lastname[0]
            })
        })
        .then(()=>{
            return  firestore.collection('notifications')
                .add({
                    content :'joined the party',
                    user:`${newUser.firstname} ${newUser.lastname}`,
                    time:new Date()
                })
        })
        .then(()=>{
            dispatch({
                type:'SIGNUP_SUCCESS'
            })
        })
        .catch(err =>{
            dispatch({
                type:'SIGNUP_ERROR',
                err
            })
        })
    }
}