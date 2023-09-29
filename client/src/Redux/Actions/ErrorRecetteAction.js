import { HANDLEERROR, REMOVEERROR } from "../ActionTypes/ErrorRecetteType"

export const handleError = (msg)=>async(dispatch)=>{
    const id = Math.random()
    dispatch(
        {
            type : HANDLEERROR,
            payload : {msg,id}
        }
    )
    setTimeout(()=>{
        dispatch(
            {
                type : REMOVEERROR,
                payload : id
            }
        )
    },2000)
}