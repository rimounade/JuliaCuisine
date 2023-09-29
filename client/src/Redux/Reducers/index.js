import {combineReducers} from "redux"
import AuthReducer from "./AuthReducer"
import ErrorReducer from "./ErrorReducer"
import RecetteReducer from "./RecetteReducer"
import ErrorRecetteReducer from "./ErrorRecetteReducer"
import SearchReducer from "./SearchReducer"
import CommentReducer from "./CommentReducer"
const rootReducer = combineReducers({AuthReducer,ErrorReducer,RecetteReducer,ErrorRecetteReducer,SearchReducer,CommentReducer})

export default rootReducer
