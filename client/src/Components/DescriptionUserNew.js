import { useParams } from "react-router-dom"
import ListUserRecette from "./ListUserRecettes"
import ListRecette from "./ListRecette"
import { useEffect } from "react"
import { getRecettes } from "../Redux/Actions/RecetteActions"
import { useDispatch, useSelector } from "react-redux"
import CardRecette from "./CardRecette"

const DescriptionUserNew=()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getRecettes())
    },[])
    const recettes = useSelector(state => state.RecetteReducer.recettes)
    return(
        <div className="Container">
        <div className="cardUser" >
            
            {
               recettes.length == 0 ? <h3>Pas de recette</h3> : recettes.map(el=><CardRecette key={el._id} el={el}/>)
            }
        </div>
        </div>
    )
}

export default DescriptionUserNew