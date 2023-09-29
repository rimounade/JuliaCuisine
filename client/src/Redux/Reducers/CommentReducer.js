import { GETCOMMENTPOST } from "../ActionTypes/CommentTypes"

const initialState = {
    comments : []
}

const CommentReducer = (state = initialState,action)=>{
    console.log(action.payload)
    switch (action.type) {
        case GETCOMMENTPOST : return {...state,comments : action.payload}
        default: return state
            
    }
}
export default CommentReducer