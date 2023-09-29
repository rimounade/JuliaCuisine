import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const EditComment =({el})=>{
    const {id}=useParams()
    const Comments = useSelector(state => state.CommentReducer.comments)
    const [texte,setTexte]=useState('')
    const dispatch= useDispatch()
    return(
       <input value={el.texte} type="text"/>
    )
}
export default EditComment