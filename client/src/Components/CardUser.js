import { Card } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const CardUser=({el})=>{
    const token = localStorage.getItem('token')
    const user = useSelector(state=>state.AuthReducer.user)
    return(
        <div >
            {/* nouveau */}
            <div   class="cardListUser">
            <Link to={token ? `/DescriptionUser/${el._id}` :'/Register' }>
            
            <img src={el.image}  alt="Person" class="card__image__User" style={ {borderColor:user._id == el._id  &&'#8ae78a'}}/>
            <p style={{textTransform:'uppercase'}} class="card__name__User">{el.name}  {el.first_name}</p>
            
            </Link>
            <ul class="social-icons">
                {el.fb && <li><a href={el.fb}><i class="fa-brands fa-facebook fa-2xl" style={{color: "#ffffff"}}></i></a></li>}
                {el.instagram && <li><a href={el.instagram}><i  class="fa-brands fa-instagram fa-2xl" style={{color: "#ffffff"}}></i></a></li>}
                {/* <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa fa-codepen"></i></a></li> */}
            </ul>
            </div>
  </div>
  
        
    )
}

export default CardUser