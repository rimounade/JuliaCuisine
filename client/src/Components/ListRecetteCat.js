import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecetteCat, getRecettes, getUserRecettes } from "../Redux/Actions/RecetteActions"
import CardRecette from "./CardRecette"
import { useLocation } from "react-router-dom"


const ListRecetteCat =()=>{
    const dispatch = useDispatch()
    const location = useLocation()
    const verif = location.pathname
    console.log(verif)
    useEffect(()=>{
        dispatch(getRecetteCat(verif))
    },[verif])
   

   

        const recettes = useSelector(state => state.RecetteReducer.recettes)
        return(
            <div className="cardUser">
                {
                 recettes &&   
                 recettes.length == 0? <h4>Pas de Recettes</h4>: recettes.map(el=><CardRecette key={el._id} el={el}/>)
                }
                
            </div>
        )
    
}
export default ListRecetteCat