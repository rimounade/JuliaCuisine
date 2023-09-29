import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecettes } from "../Redux/Actions/RecetteActions"
import CardRecette from "./CardRecette"
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { CloseButton} from "react-bootstrap"

const ListRecette = ()=>{
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getRecettes())
    },[])
    const [text,setText] = useState('')
    const [categorie,setCategorie] = useState('All')
    const options = [
        {  text: 'All', value: 'all' },
        {  text: 'Sale', value: 'sale' },
        {  text: 'Sucre', value: 'sucre' }
        
      ]
    const recettes = useSelector(state => state.RecetteReducer.recettes)
    return(
        <div>
             <div className="filterRe">
            <Form.Input value={text} onChange={(e)=> setText(e.target.value)}   placeholder='Description' />
            <Form.Select onChange={(e)=>setCategorie(e.target.innerText)}
            value={categorie}
          
            options={options}
            placeholder='Catégorie'
            />
            
            {/* <button  class="btn draw-border"   style={{        width: "212px",    height: "41px"}} onClick={(e)=>{setCategorie('All');setText('')}}>Reset</button> */}
           
            <button  class="btn draw-border"   style={{        width: "212px",    height: "41px"}} onClick={(e)=>{setCategorie('All');setText('')}}>
                 {/* <i class="fa-solid fa-arrows-rotate fa-2xl"></i> */}
                 <CloseButton aria-label="Hide" />
                 </button>
            </div>
            
            <div className="Container">
        <div className="cardUser" >
           
            {
               recettes.length == 0 ? 
               
               <h3>Pas de recette</h3> 
               
               : 
               <>
                    {
                        categorie == "All" ?
                        recettes.filter(el=>  el.name.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de recettes</h3> : recettes.filter(el=>  el.name.toUpperCase().includes(text.toUpperCase())).map(el=><CardRecette key={el._id} el={el}/>)
                        

                        :

                        categorie == "Sale" ?
                        recettes.filter(el=> el.categorie == "Sale" && el.name.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de recettes</h3> : recettes.filter(el=> el.categorie == "Sale" && el.name.toUpperCase().includes(text.toUpperCase())).map(el=><CardRecette key={el._id} el={el}/>)

                       

                        :

                        recettes.filter(el=> el.categorie == "Sucre" && el.name.toUpperCase().includes(text.toUpperCase())).length == 0 ? <h3>Pas de recettes</h3> : recettes.filter(el=> el.categorie == "Sucre" && el.name.toUpperCase().includes(text.toUpperCase())).map(el=><CardRecette key={el._id} el={el}/>)
                     

                    }
               </>
               
            }
            {/* recettes.map(el=><CardRecette key={el._id} el={el}/>) */}
        </div>
        </div>
        
        </div>
       
    )
}
export default ListRecette