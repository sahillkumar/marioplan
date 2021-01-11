const initState = {
    projects:[
        {id:1,title:'sk project',content:'Est do laborum Lorem enim mollit nostrud voluptate nisi ullamco.'},
        {id:2,title:'sk project',content:'Est do laborum Lorem enim mollit nostrud voluptate nisi ullamco.'},
        {id:3,title:'sk project',content:'Est do laborum Lorem enim mollit nostrud voluptate nisi ullamco.'}
    ]
}

const projectReducer = ( state=initState, action )=>{
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log(action.project);
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log(action.err);
            return state
        default:
            return state;
    } 
}

export default projectReducer

