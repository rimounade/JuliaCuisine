import { useEffect, useState } from "react"
// import { Form,Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { updateRecette } from "../Redux/Actions/RecetteActions"
import { useNavigate, useParams } from "react-router-dom"
import {FormGroup} from "reactstrap"
import axios from "axios"
import React from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import FormRim from 'react-bootstrap/Form';

const EditRecette =()=>{
    const {id}=useParams()

    const oneRecette = useSelector(state => state.RecetteReducer.oneRecette)

    const [name,setName] = useState(oneRecette.name)
    const [ingredients,setIngredients] = useState(oneRecette.ingredients)
    const [categorie,setCategorie] = useState(oneRecette.categorie)
    const [image,setImage]=useState(oneRecette.image)
    const [uploading, setUploading] = useState(false);
    const options = [
        { key: id, text: 'Sale', value: 'sale' },
        { key: id, text: 'Sucre', value: 'sucre' }
        
      ]
    const dispatch= useDispatch()

    const navigate = useNavigate()
    useEffect(()=>{
        setName(oneRecette.name)
        setIngredients(oneRecette.ingredients)
        setCategorie(oneRecette.categorie)
        setImage(oneRecette.image)
    },[oneRecette])
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

    const handleUpdate=(e)=>{
        e.preventDefault()
        dispatch(updateRecette({name,ingredients,categorie,image},id,navigate))
        }
    return(
        <div>
        {/* <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name of recette" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control value={ingredients} onChange={(e)=> setIngredients(e.target.value)} type="text" placeholder="Enter Ingredients" />       
        </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Categorie</Form.Label>
            <Form.Control value={categorie} onChange={(e)=> setCategorie(e.target.value)} type="email" placeholder="Enter categorie" />       
        </Form.Group> */}

        
        {/* bouton ******* */}
         {/* <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
            Submit
        </Button>
    </Form> */}
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2'  textAlign='center'>
      <Image size="20%"src='/julia.png' style={{ marginRight: '1.5em' }} /> You Can Edit A Recipe
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input value={name}  onChange={(e)=> setName(e.target.value)}   placeholder='Name' />
          <Form.Input value={ingredients} onChange={(e)=> setIngredients(e.target.value)}   placeholder='Ingredients' />
          <Form.Select value={categorie} onChange={(e)=>setCategorie(e.target.innerText)}
         
          label= "categorie"
          options={options}
          placeholder='Catégorie'
          />
          <FormGroup value={image}>
      <>
                  {image ? (
                    <img
                      src={'../../.'+image?.replace('\\','/')}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Recette" : "Loading ..."}
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
      <button  class="btn draw-border"   style={{    width: "365px"}} onClick={(e)=>handleUpdate(e)} >Edit</button>
          {/* <Button onClick={(e)=>handleUpdate(e)} className="color"   fluid size='large'>
            Edit
          </Button> */}
        </Segment>
      </Form>
     
    </Grid.Column>
  </Grid>
  </div>
    )
}
export default EditRecette