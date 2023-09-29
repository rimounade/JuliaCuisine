import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/AuthActions"
import { Button } from "react-bootstrap"
import ConfirmDel from "./ConfirmDel"
import { useNavigate } from "react-router-dom"
import ListUserRecettes from "./ListUserRecettes"

const Profil=()=>{
    const dispatch = useDispatch()
    const navigate=useNavigate()
    useEffect(()=>{
        dispatch(current())
    },[])
    const user = useSelector(state=>state.AuthReducer.user)
    const handleEdit = ()=>{
        navigate(`/EditProfil/${user._id}`)//kifech yo93ed fel profil
    }
    return(
        <div>
            {
          //   user &&
          //       <div>
          //           {/* <h1>Profil</h1>  */}
          //   <div className="ProfilName">
          //       <img src="https://static.wixstatic.com/media/707ea6_01ef562d8d034d789009ccf08fdb91b2~mv2.png/v1/crop/x_131,y_130,w_447,h_442/fill/w_48,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Jardin-Sucr%C3%A9_Logo-picto_vert-rvb.png" alt="not found" className="sg"/>
          //       <div className="trait_dessus"><hr/></div>
          //  <h2>{user.name}  {user.first_name}</h2>
          //  <img src="https://static.wixstatic.com/media/707ea6_7fc9303e446b49c39f12ddbb00f29238~mv2.jpg/v1/fill/w_706,h_446,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/JARDIN_SUCREE_1603_GESTUEL-58.jpg" alt="not found" className="imageP"/>
          //  </div>
          //  <Button onClick={handleEdit}>Edit</Button>
          
          //   <ConfirmDel oneUser={user}/>
          //   <ListUserRecettes id={user._id}/>
          //       </div>
            }
            
         {/* Nouveau */}


  {
    user &&
    <div class="card">
      {/* <ListUserRecettes id={user._id}/> */}
    <img src={user.image}  alt="Person" class="card__image"/>
    <p class="card__name">{user.name}  {user.first_name}</p>
    <div class="grid-container">

      <div >
      {user.email} 
      </div>

      {/* <div class="grid-child-followers">
        1300 Likes
      </div> */}

    </div>
    <ul class="social-icons">
      {user.fb && <li><a href={user.fb}><i class="fa-brands fa-facebook fa-2xl" style={{color: "#ffffff"}}></i></a></li>}
      {user.instagram &&<li><a href={user.instagram}><i  class="fa-brands fa-instagram fa-2xl" style={{color: "#ffffff"}}></i></a></li>}
      {/* <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
      <li><a href="#"><i class="fa fa-codepen"></i></a></li> */}
    </ul>
    <button class="btn draw-border" onClick={handleEdit}>Modifier</button>
          
            <ConfirmDel class="btn draw-border" oneUser={user}/>
    {/* <button class="btn draw-border">Follow</button>
    <button class="btn draw-border">Message</button> */}
      
  </div>

  }

        </div>
    )
}
export default Profil