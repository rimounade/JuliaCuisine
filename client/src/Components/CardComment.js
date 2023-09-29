import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { deleteComment, updateComment } from "../Redux/Actions/CommentActions"
import ConfirmDel from "./ConfirmDel"
import { useEffect, useState } from "react"
import EditComment from "./EditComment"
import {  Comment, Form } from 'semantic-ui-react'
import ConfirmDelComm from "./ConfirmDelComm"
import { current } from "../Redux/Actions/AuthActions"
const CardComment=({el})=>{
    const dispatch = useDispatch()
    const [edit,setEdit] = useState(false)
    const [texte,setTexte] = useState(el.texte)
    // const {id} = useParams()
    const oneRecette = useSelector(state => state.RecetteReducer.oneRecette)
    const comments = useSelector(state=>state.CommentReducer.comments)
    const user = useSelector(state=>state.AuthReducer.user)
    const handleDelete = ()=>{
        dispatch(deleteComment({id :el._id, idPost : el.post._id}))
    }

    const handleUpdate=()=>{
        dispatch(updateComment({texte},el))
        setEdit(!edit)
    }
    useEffect(()=>{
      dispatch(current())
    },[])
    return(
        <div className="commCar">
  <Comment >
      <Comment.Avatar as='a' src={'../../.'+user?.image?.replace('\\','/')} />
      <Comment.Content>
        <Comment.Author style={{fontSize : "2em"}}>{el.owner.name}</Comment.Author>
        <Comment.Metadata>
          <div>{el.date}</div>
        </Comment.Metadata>
        {
            //  (user._id == comments?.owner || user.role =="admin")  &&
             <>
               <Comment.Text>
          
          {
                  edit ?    <input style={{border:" 3px solid #58cdd1",fontSize : "2em"}} value={texte} type="text" onChange={(e)=>setTexte(e.target.value)}/> :      <p>{el.texte}</p>
          }
    
          </Comment.Text>
          <div className="EdCom">
        <div style={{marginRigth : "20px"}}>
        <Comment.Actions>
        {
          (el?.owner?._id == user._id || user.role == 'admin')  &&  <Comment.Action  onClick={()=> edit ? handleUpdate() : setEdit(!edit)}>{edit ? <i class="fa-solid fa-check fa-2xl"></i> : <i class="fa-regular fa-pen-to-square fa-2xl"></i>}</Comment.Action>
        }
         
        </Comment.Actions>
        </div>
        &nbsp;
        &nbsp;
        {
          (el?.owner?._id == user._id || user.role == 'admin'|| user._id == el?.post?.owner) && <ConfirmDelComm oneUser={el}/>
        }
        
        </div>
             </>
          }
       
       
      </Comment.Content>
    </Comment>
            {/* <h2>{el.owner.name}</h2>
            {
                edit ?    <input value={texte} type="text" onChange={(e)=>setTexte(e.target.value)}/> :      <h3>{el.texte}</h3>
            }
       
            <Button onClick={()=> edit ? handleUpdate() : setEdit(!edit)}>{edit ? "Save" : "Edit"}</Button>
            <ConfirmDel oneUser={el}/> */}
        </div>
    )
}

export default CardComment