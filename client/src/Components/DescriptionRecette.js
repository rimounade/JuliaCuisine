import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneRecette } from "../Redux/Actions/RecetteActions"
import ConfirmDel from "./ConfirmDel"
import { Button } from "react-bootstrap"
import ListComments from "./ListComments"
import AddComment from "./AddComment"
import { current } from "../Redux/Actions/AuthActions"

const DescriptionRecette = ()=>{
   

    const {id}= useParams()
    const dispatch = useDispatch()
   
    useEffect(()=>{
        dispatch(getOneRecette(id))
        dispatch(current())
    },[])

    const oneRecette = useSelector(state => state.RecetteReducer.oneRecette)
    const user = useSelector(state=>state.AuthReducer.user)
    // useEffect(()=>{
       
    //     dispatch(getOneRecette())
    // },[oneRecette])
    const navigate=useNavigate()
    console.log("user id",user._id  )
    console.log('owner', oneRecette?.owner?._id)
    const handleEdit = ()=>{
        navigate(`/EditRecette/${id}`)
    }

    return(
        <div>
            
            {
                oneRecette && 
<div>
                <div class="projcard-container">
		

        <div class="projcard projcard-red">
            <div class="projcard-innerbox">
                <img class="projcard-img" src={'../../.'+oneRecette?.image?.replace('\\','/')} />
                <div class="projcard-textbox">
                    <div class="projcard-title">{oneRecette.name}</div>
                    <div class="projcard-subtitle">{oneRecette.categorie}</div>
                    <div class="projcard-bar"></div>
                    <div class="projcard-description">
                        Ingredients : 
                        <br/>
                        {oneRecette.ingredients}
                        <br/>
                       
                        <div className="trait_dessus"><hr/></div>
                        Recette : 
                        <br/>
                        {oneRecette.description}
                        </div>
                    <div class="projcard-tagbox">
                    {
                        (user._id == oneRecette?.owner || user.role =="admin")  && 
                        <>
                            <button  class="btn draw-border"  onClick={handleEdit}>Modifier</button>
                            < ConfirmDel oneUser={oneRecette}/>
                     
                        </>
                        }
                    </div>
                </div>
            </div>
        </div>
        
       
        
    </div>
    <div className="LayoutCom">
    <ListComments id={id}/>
    <AddComment id={id}/>
    </div>

      </div>      }
            
        {/* {
            (oneRecette && user) &&
                <div>
                    <h1>{oneRecette.name}({oneRecette.date})</h1>
            
                    <p style={{width:"50%"}}>{oneRecette.description}</p>
                    <p>{oneRecette.ingredients}</p>
                    {
                        (user._id == oneRecette?.owner || user.role =="admin")  && 
                        <>
                            <Button onClick={handleEdit}>Edit</Button>
                            <ConfirmDel oneUser={oneRecette}/>
                            
                        </>
                    }
                   
                   <AddComment id={id}/>
                    <ListComments id={id}/>
                    
                    
                   
                 </div>
        } */}
        
        </div> 
    )
}
export default DescriptionRecette