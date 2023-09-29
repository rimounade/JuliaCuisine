// import { Link } from "react-router-dom"

// const CardRecetteHomme =({el})=>{
//     const backgroundImageUrl = `url("${'../../.'+el.image.replace('\\','/')}")`
//     return(
   
            
//             // <div className="cardHH">
                        
//             // <Link to={`/DescriptionRecette/${el._id}`}>
//             //             <div style={{backgroundImage : backgroundImageUrl}} className="cardTextHome">
                           
//             //             {/* <h5>{el.categorie}</h5> */}
//             //             {/* <p>{el.owner.first_name} {el.owner.name}</p> */}
//             //             {/* <div className="trait_dessus"><hr/></div> */}
//             //             <h4>{el.name.slice(0,50)}...</h4>
//             //             {/* <p>{el.ingredients}</p> */}
                        
                        
//             //             {/* <p className="pDescription">{el.description.slice(0,60)}... <Link to={`/DescriptionRecette/${el._id}`}>Read More</Link></p> */}
                        
//             //             </div>
//             //             </Link> 
//             //         </div>
                   
    
//     )
// }
// export default CardRecetteHomme


import { useState } from "react"
import { Link } from "react-router-dom"
const CardRecetteHomme = ({el})=>{



    const backgroundImageUrl = `url("${'../../.'+el?.image?.replace('\\','/')}")`;
    const token = localStorage.getItem('token')
    const styles = {
        backgroundImage:  backgroundImageUrl,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'local',
        transition: 'all 0.5s',
        paddingTop :'25px',
        paddingBottom : '25px',
        color : 'red',
        marginRight: "50px",
        marginLeft: "50px"
      };

    return(


                    <div >
                        {
                            el.image &&
                            <Link to={token ? `/DescriptionRecette/${el._id}`: '/Register'}>
                            <div  style={styles} >
                            <div class="service-icon Center" >
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <a >
                            <div style={{    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    width: "292px",
    height: "219px"}}>
                               
                           
                            <h4 style={{    color: "#fbf7f794",fontWeight: "bold",fontSize: "xx-large"}}>{el.name}</h4>
                      
                            
                          
                            
                            </div>
                            </a>
                        </div>
                        </Link>
                        }
                  
                    </div>
          


     
           
    )
}
export default CardRecetteHomme