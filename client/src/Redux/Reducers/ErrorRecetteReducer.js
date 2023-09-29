import { HANDLEERROR, REMOVEERROR } from "../ActionTypes/ErrorRecetteType"

const initialState = []


const ErrorRecetteReducer=(state = initialState,action)=>{
    switch (action.type) {
        case HANDLEERROR : return [...state,action.payload]
        case REMOVEERROR: return state.filter(el=> el.id != action.payload)
        default: return state
    }
}
export default ErrorRecetteReducer