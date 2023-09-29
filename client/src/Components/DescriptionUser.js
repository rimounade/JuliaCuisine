import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import {  current, getOneUser } from "../Redux/Actions/AuthActions"
import { Button } from "react-bootstrap"
import ConfirmDel from "./ConfirmDel"
import ListUserRecettes from "./ListUserRecettes"
import ListRecette from "./ListRecette"

const DescriptionUser = ()=>{
    const {id}= useParams()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getOneUser(id))
        dispatch(current())
    },[])
    const oneUser = useSelector(state => state.AuthReducer.oneUser)
    const user = useSelector(state=>state.AuthReducer.user)
    useEffect(()=>{
        dispatch(getOneUser(id))
   
    },[user])
    const navigate=useNavigate()
    const handleEdit = ()=>{
        navigate(`/EditUser/${id}`)
    }
    return(
       <div>


        <div class="card">
            <img src={'../../.'+oneUser?.image?.replace('\\','/')} alt="Person" class="card__image"/>
            <p class="card__name">{oneUser.name}  {oneUser.first_name}</p>
            <div class="grid-container">

            <div >
            {oneUser.email}           
            
            </div>           

            </div>           
            
        </div>

        {
            oneUser &&
                <div style={{textAlign : "center"}}>                   
                    {
                        (user?.role == "admin" || user?._id == oneUser?._id)&&
                        <>

                            <ul class="social-icons" >
                                <div >
                                {oneUser.fb &&<li ><a href={oneUser.fb}><i class="fa-brands fa-facebook fa-2xl" style={{color: "#ffffff"}}></i></a></li>}
                                {oneUser.instagram &&<li ><a href={oneUser.instagram}><i  class="fa-brands fa-instagram fa-2xl" style={{color: "#ffffff"}}></i></a></li> }                             
                                </div>
                                </ul>
                                <button class="btn draw-border" onClick={handleEdit}>Modifier</button>
                                    
                                        <ConfirmDel class="btn draw-border" oneUser={user}/>                            
                        </>
                    }                   
                                                           
                 </div>
        }
        
        {(oneUser && user ) &&<ListUserRecettes id={id}/>}
        
        </div> 
    )
}
export default DescriptionUser