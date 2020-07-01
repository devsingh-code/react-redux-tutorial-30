const initState ={
    posts: [
     {id:'1', title:'This is Bananas', body:'Bananas are yellow, dirty little felllows'},
     {id:'2', title:'This is Oranges', body:'Oranges are yellow, dirty little felllows'},
     {id:'3', title:'This is Mangoes', body:'Mangoes are yellow, dirty little felllows'}     
    ]
}

const rootReducer =(state=initState, action) =>{
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter( post =>{
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;