
import { FAIL, GETONERECETTE, GETRECETTES, GETUSERRECETTE } from "../ActionTypes/RecetteTypes"

const initialState = {
    recettes : [],
    errors : [],
    oneRecette :{},
    userRecettes : []
}

const RecetteReducer = (state = initialState,action)=>{
    switch (action.type) {
        case GETRECETTES : return {...state,recettes : action.payload,errors : null}
        case FAIL : return {...state,errors : action.payload, recettes : null}
        case GETONERECETTE : return {...state, oneRecette : action.payload}
        case GETUSERRECETTE : return {...state,userRecettes : action.payload,errors : null}
    
        default: return state
            
    }
}
export default RecetteReducer