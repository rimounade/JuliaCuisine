import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { addRecette } from "../Redux/Actions/RecetteActions"
import {FormGroup} from "reactstrap"
import axios from "axios"
import FormRim from 'react-bootstrap/Form';
// import {Form,Button} from 'react-bootstrap'

import React from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'

const AddRecette = ()=>{
    const [name,setName] = useState('')
    const [ingredients,setIngredients] = useState(0)
    const [categorie,setCategorie] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage]=useState('')
    const [uploading, setUploading] = useState(false);


    const uploadProfileImage = (e) => {
      const file = e.target.files[0];
      const bodyFormData = new FormData();
      bodyFormData.append("image", file);
      setUploading(true);
      axios
        .post("/api/uploads", bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setImage(response.data);
          setUploading(false);
        })
        .catch((err) => {
          console.log(err);
          setUploading(false);
        });
    };

    
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const options = [
      { key: id, text: 'Sale', value: 'sale' },
      { key: id, text: 'Sucre', value: 'sucre' }
      
    ]
    const handleAdd = (e)=>{
        e.preventDefault()
        dispatch(addRecette({name,ingredients,categorie,description,image},navigate))
    }
    //dropdown list
    return(
      <div>
        {/* <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ingredients</Form.Label>
          <Form.Control onChange={(e)=> setIngredients(e.target.value)} type="string" placeholder="Enter ingredients" />       
        </Form.Group>
        
        
          
          <Form.Select onChange={(e)=> setCategorie(e.target.value)} aria-label="Default select example">
            
            <option value="salé">Salé</option>
            <option value="sucré">Sucré</option>
      
          </Form.Select>
         
        
  
       
        <Button onClick={(e)=>handleAdd(e)} variant="primary" type="submit">
          Submit
        </Button>
       
        
      </Form> */}
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2'  textAlign='center'>

        <i class="fa-solid fa-plus fa-lg" style={{color: "#f277c6"}}></i>
          
          &nbsp;&nbsp;Vous pouvez ajouter une recette
      
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input onChange={(e)=> setName(e.target.value)}   placeholder='Name' />
            <Form.Input onChange={(e)=> setIngredients(e.target.value)}   placeholder='Ingredients' />
            <Form.Input onChange={(e)=> setDescription(e.target.value)}   placeholder='Description' />
            <Form.Select onChange={(e)=>setCategorie(e.target.innerText)}
            
        


            label= "categorie"
            options={options}
            placeholder='Catégorie'
            />
            <FormGroup>
      <>
                  {image ? (
                    <img
                      src={image}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Télécharger une image pour la recette" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    {/* Select File
                    <input
                      accept="image/*"
                      type="file"

                      onChange={uploadProfileImage}
                    /> */}

<FormRim.Group controlId="formFile" className="mb-3">
       
       <FormRim.Control type="file" accept="image/*" onChange={uploadProfileImage} />
     </FormRim.Group>
                  </div>
                </>
      </FormGroup>
      <button  class="btn draw-border"   style={{    width: "365px"}} onClick={(e)=>handleAdd(e)}>Ajouter Recette</button>
            {/* <Button style={{backgroundcolor:"#e0e1e2 none"}} className="color" onClick={(e)=>handleAdd(e)}  fluid size='large'>
              Add
            </Button> */}
          </Segment>
        </Form>
        
       
      </Grid.Column>
    </Grid>
    </div>
      
    )
}
export default AddRecette