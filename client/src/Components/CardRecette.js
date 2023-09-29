import { useState } from "react"
import { Link } from "react-router-dom"
const CardRecette = ({el})=>{
    const token = localStorage.getItem('token')
    console.log(el.image,"imen")
    const [isHovered, setIsHovered] = useState(false);


    const backgroundImageUrl = `url("${'../../.'+el?.image?.replace('\\','/')}")`;
    console.log(backgroundImageUrl,"testImage")
    const styles = {
        backgroundImage: isHovered && backgroundImageUrl,
        backgroundSize: isHovered &&'cover',
        backgroundPosition: isHovered &&'center center',
        backgroundAttachment: isHovered &&'local',
        transition: isHovered &&'all 0.5s',
        paddingTop :'25px',
        paddingBottom : '25px',
        color : 'red'
      };
      
console.log('../../.'+el?.image?.replace('\\','/'),'aziz')
    return(


                    <div style={{marginTop : '20px'}} >
                        {
                            el.image &&
                            <div onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)} style={{
                                backgroundImage: isHovered && backgroundImageUrl,
                                backgroundSize: isHovered &&'cover',
                                backgroundPosition: isHovered &&'center center',
                                backgroundAttachment: isHovered &&'local',
                                transition: isHovered &&'all 0.5s',
                                paddingTop :'25px',
                                paddingBottom : '25px',
                                border : '1px solid grey'
                              }} >
                            <div class="service-icon Center" >
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <a >
                            <div className="cardText">
                               
                            {/* <h5>{el.categorie}</h5> */}
                            <p>{el.owner.first_name} {el.owner.name}</p>
                            <div className="trait_dessus"><hr/></div>
                            <h4>{el.name}</h4>
                            {/* <p>{el.ingredients}</p> */}
                            
                           
                            <p  className="pDescription">{el.description.slice(0,60)}... <Link style={{color:"#58cdd1"}} to={token ? `/DescriptionRecette/${el._id}`: '/Register'}>
En savoir plus</Link></p>
                            </div>
                            </a>
                        </div>
                        }
                  
                    </div>
          


     
           
    )
}
export default CardRecette