import { useDispatch, useSelector } from "react-redux"
import {Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/Actions/AuthActions'
import SearchBare from "./SearchBare"

const NavTest=()=>{
    const token = localStorage.getItem('token')
    const user = useSelector(state=>state.AuthReducer.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return(
        <div className="testLayout">
            <div  style={{height : "200px", display:"flex", alignItems:"center"}}>
            <img id="logoNav" src='/nov.png' alt="not found"/>
            </div>

            <div className="navSerch">
                <ul id="itemsNav">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="ListUsers">Utilisateurs</Link></li>
                    <li><Link to="ListRecette">Recettes</Link></li>
                    
                    
                    
                    {
                      token && user?
                      <> 
                        <li><Link to="/AddRecette">Ajout Recette</Link></li>
                        <li><Link to="/Profil">Profil</Link></li>
                        <li><Link onClick={()=>{dispatch(logout())}} to="/" >Se déconnecter</Link></li>
                      </>
                      :
                      <>
                      <li><Link to="/Loginn">Se connecter</Link></li>
                      <li><Link to="/Register">S'inscrire</Link></li>
                      </>  
                    }
                </ul>
                {/* <input style={{height :"26px"}} type="text" placeholder="Recherche"/> */}

            </div>
        </div>
    )
}

export default NavTest