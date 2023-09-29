import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecettes } from "../Redux/Actions/RecetteActions"

import CardRecetteHomme from "./CardRecetteHome"

const ListRecetteHome =()=>{
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getRecettes())
    },[])

    const recettes = useSelector(state => state.RecetteReducer.recettes)
    return(
        <div className="homeCard">
            {
               recettes.length == 0 ? <h3>Pas de recettes</h3>:  recettes.length<2 ?   recettes.map(el=><CardRecetteHomme key={el._id} el={el}/>): recettes.slice(recettes.length-3,recettes.length).map(el=><CardRecetteHomme key={el._id} el={el}/>)
            }
        </div>
    )
}
export default ListRecetteHome