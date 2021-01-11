export const createProject = ( project ) =>{
    return (dispatch, getState, { getFirestore})=>{
        //async call to db
        const firestore = getFirestore()
        firestore.collection('projects').add({
            ...project,
            authorFirstname:'SK',
            authorLastname:'kk',
            createdAt:new Date()
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