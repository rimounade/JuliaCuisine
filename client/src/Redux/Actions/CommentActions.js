import { GETCOMMENTPOST } from "../ActionTypes/CommentTypes";
import axios from "axios";
import { handleError } from "./ErrorAction";
export const getCommentPost=(id)=>async(dispatch)=>{
    try {

        const res = await axios.get(`/api/comment/getCommentsPost/${id}`)

        dispatch(
            {
                type : GETCOMMENTPOST,
                payload : res.data.comments
            }
        )
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}

export const addComment = (newComment)=>async(dispatch)=>{
    try {
        await axios.post('/api/comment/AddComment',newComment,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        } )

        dispatch(getCommentPost(newComment.post))


    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}

export const deleteComment =(delCom)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/comment/deleteComment/${delCom.id}`,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        } )

       dispatch(getCommentPost(delCom.idPost))
        
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
        
    }
}
//update comment
export const updateComment=(upComment,el)=>async(dispatch)=>{
    try {
        await axios.put(`/api/comment/UpdateComment/${el._id}`,upComment,{
            headers : {
                Authorization : localStorage.getItem('token')
            }
        } )

        dispatch(getCommentPost(el.post._id))
        
       
    } 
    catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}