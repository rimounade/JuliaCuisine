import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../Redux/Actions/AuthActions"
import CardUser from "./CardUser"
import {Form } from 'semantic-ui-react'
import { CloseButton} from "react-bootstrap"
const ListUsers=()=>{
    const [text,setText] = useState('')
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsers())
    },[])

    const users = useSelector(state => state.AuthReducer.users)
    return(
        <div>
            <div  className="filterRe" style={{width:"30%", marginLeft:"40%"}}>
            <Form.Input value={text} onChange={(e)=> setText(e.target.value)}   placeholder='chercher' />
            <button  class="btn draw-border"   style={{        width: "212px",    height: "41px"}} onClick={(e)=>{setText('')}}>
                 {/* <i class="fa-solid fa-arrows-rotate fa-2xl"></i> */}
                 <CloseButton aria-label="Hide" />
                 </button>
            </div>


            <div className="cardUser">
            
            {
            //   users.length == 0 ? <h3>Pas d'utilisateurs</h3> :  users.map(el=> <CardUser key={el._id} el={el} />)
              users.filter(el=>  el.name.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de recettes</h3> : users.filter(el=>  el.name.toUpperCase().includes(text.toUpperCase())).map(el=><CardUser key={el._id} el={el} />)
            }
        </div>
        </div>
        
    )
}

export default ListUsers