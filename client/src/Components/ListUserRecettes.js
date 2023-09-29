import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserRecettes } from "../Redux/Actions/RecetteActions"
import CardRecette from "./CardRecette"


const ListUserRecette = ({id})=>{
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getUserRecettes(id))
    },[])
   

    const userRecettes = useSelector(state => state.RecetteReducer.userRecettes)
    return(
        <div className="Container">
        <div className="cardUser" >
            
            {
               userRecettes.length == 0 ? <h3>Pas de recette</h3> : userRecettes.map(el=><CardRecette key={el._id} el={el}/>)
            }
        </div>
        </div>
    )
}
export default ListUserRecette