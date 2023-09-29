import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCommentPost } from "../Redux/Actions/CommentActions"
import CardComment from "./CardComment"
import { Button, Comment, Form } from 'semantic-ui-react'

const ListComments = ({id})=>{
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getCommentPost(id))
    },[])
   

    const comments = useSelector(state => state.CommentReducer.comments)
    return(
        // <div className="cardUser">
             <Comment.Group>
            {
               comments.length == 0 ? <h3>Pas de commentaire</h3> : comments.map(el=><CardComment el={el}/>)
            }
            </Comment.Group>
        // </div>
    )
}
export default ListComments