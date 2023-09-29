import React from 'react'
import { Link } from 'react-router-dom'
import { Card} from 'semantic-ui-react'

import { Swiper, SwiperSlide } from 'swiper/react';
import ListRecetteHome from './ListRecetteHome';
const Home=()=>{
   
      const citationbackground ={
        backgroundImage : 'url("https://www.hervecuisine.com/wp-content/uploads/macarons2.jpg")',
        backgroundSize: 'cover',
        height : '700px'
      
      }
    
    return(

        <div >
           
            <div className="intro">
              <h1>L'Art Culinaire </h1>
              <p>Dans la cuisine, magie en ébullition,
                L'art culinaire, une passion en action.
                Des saveurs qui dansent, des arômes divins,
                Chaque plat, une symphonie, un festin.</p>
              {/* <button>Learn More</button> */}
            </div>
    {/* ***********************************************         */}


    
    <div class="about-me">
              <div class="about-me-text">
                <h2 className='tith'>A Propos Julia Cuisine</h2>
                <div className="trait_dessus"><hr/></div>
                <p style={{marginTop:'18px'}} className='paprop'>Julia Cuisine une vaste collection de recettes allant des plats classiques aux créations originales. Les recettes sont souvent accompagnées d'instructions étape par étape, de listes d'ingrédients et de conseils de cuisine pour aider les utilisateurs à réussir leurs plats.</p>
                <img style={{width:'127px',marginTop:'40px'}} src='/grande.webp' alt='Not Found'/>
              </div>
              <img src='/12.jpg' alt="me"/>
            </div>
            
    <div className="citation" style={citationbackground}>
      
              <div className='citationMa'>

                    <p>"Cuisiner. C'est l'art le plus beau et le plus complet. Il engage nos cinq sens, plus un - le besoin de donner le meilleur de nous-mêmes."</p>
                    <div className="trait_dessus"><hr/></div>
                    <p>-Paulo Coelho-</p>
                  </div>
            
            </div>  

            <div style={{paddingTop:"100px",backgroundColor:"#f7f4f6"}}>
            <div className="row">
            
                <div className="col-lg-4 col-md-6 text-center mb-3">
                <a href="/ListRecetteCatSucre">
                    <div className="service-wrap">
                        <div className="service-icon">
                            <i className="fas fa-layer-group"></i>
                        </div>
                        <h4>Recettes Sucrées</h4>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...</p> */}
                        {/* <a href="#">Read More</a> */}
                    </div>
                    </a>
                </div>
               
                 
                <div  className="col-lg-4 col-md-6 text-center mb-3">
                <a href="/ListRecetteCatSale">
                    <div className="service-wrapp">
                        <div className="service-icon">
                            <i className="fas fa-layer-group"></i>
                        </div>
                        <h4>Recettes Salées</h4>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...</p> */}
                        {/* <a href="#">Read More</a> */}
                    
                    </div>
                    </a>
                    </div>
                
                
                </div>
                </div>
    
        {/* *******************FOOOOTER************************** */}

        <footer className="footer">
           
              {/* <img src='/choux.jpg' alt='not found'/>
              <img src='/coffee-macaron.jpg' alt='not found'/>
              <img src='/cakeframboise.jpg' alt='not found'/>
              <img src='/sale.jpg' alt='not found'/>
              <img src='/vanilleCacahuete.jpg' alt='not found'/>
              <img src='/tarteVanille.jpg' alt='not found'/>
              <img src='/TarteMacae.jpg' alt='not found'/> */}
              <div className='listFooter'>
              <ListRecetteHome/>
              </div> 
              
          </footer>






            
        </div>
       
    )
}
export default Home