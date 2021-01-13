export const createProject = ( project ) =>{
    return (dispatch, getState, { getFirestore})=>{
        //async call to db
        const state = getState()
        const authorId = state.firebase.auth.uid
        const { authorFirstname,authorLastname } = state.firebase.profile
        const firestore = getFirestore()
        firestore.collection('projects')
            .add({
                ...project,
                authorFirstname,
                authorLastname,
                authorId,
                createdAt:new Date()
        })
        .then(()=>{
            return  firestore.collection('notifications')
                .add({
                    content :'added a project',
                    user:`${authorFirstname} ${authorLastname}`,
                    time:new Date()
                })
        })
        .then(()=>{
            dispatch({
                type:'CREATE_PROJECT',
                project
            })
        })
        .catch(err=>{
            dispatch({
                type:'CREATE_PROJECT_ERROR',
                err
            })
        })
        
    }
}