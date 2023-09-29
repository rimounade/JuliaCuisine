import { useState } from "react"
import {FormGroup} from "reactstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { register } from "../Redux/Actions/AuthActions"
import axios from "axios"
import React from 'react'
import FormRim from 'react-bootstrap/Form';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
const Register =()=>{
    const [name,setName] = useState('')
    const [first_name,setFirst_name] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [uploading, setUploading] = useState(false);
    const [image,setImage]=useState('')
    const [fb, setFb] = useState('');
    const [instagram,setInstagram]=useState('')

    const dispatch=useDispatch()
    const navigate=useNavigate()
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

    const handleRegister=(e)=>{
        e.preventDefault()
        dispatch(register({name,first_name,email,password,image,fb,instagram},navigate))
    }

    
    return(
      <div className="LoginPage">
         <div className="css-1t53ozj">
              <h3 className="MuiTypography-root MuiTypography-h3 css-11le6v7-MuiTypography-root">Hi, You Are Welcome </h3>
              <img src="/illustration_login.png" alt="login"/>
          </div>


          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2'  textAlign='center'>
   
      <i class="fa-solid fa-user-plus fa-lg" style={{color: "#f277c6"}}></i>
          
          &nbsp;&nbsp; Bienvenue chez Julia Cuisine
      </Header>
      <Form size='large'>
        <Segment stacked>
            <Form.Input onChange={(e)=> setName(e.target.value)} fluid icon='user' iconPosition='left' placeholder='Name' />
            <Form.Input onChange={(e)=> setFirst_name(e.target.value)} fluid icon='user' iconPosition='left' placeholder='First Name' />
            
                      <Form.Input onChange={(e)=> setEmail(e.target.value)} fluid icon='fa-regular fa-envelope' iconPosition='left' placeholder='E-mail address' />
                      <Form.Input onChange={(e)=> setPassword(e.target.value)}
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                      />
                      
                      
                      <div style={{display:"flex", alignItems:"center", marginBottom:"20px"}}>
                      <i class="fa-brands fa-facebook fa-xl" style={{marginRight:"20px",color:"#f277c6",marginLeft:"5px"}}></i>
                      <Form.Input style={{width:"347px"}} onChange={(e)=> setFb(e.target.value)} fluid icon='fa-regular fa-facebook-f'  iconPosition='left' placeholder='Facebook' />
                      </div>
                      <div style={{display:"flex", alignItems:"center"}}>
                      <i class="fa-brands fa-instagram fa-xl" style={{marginRight:"20px",color:"#f277c6",marginLeft:"5px"}}></i>
                      <Form.Input style={{width:"347px"}}onChange={(e)=> setInstagram(e.target.value)} fluid icon='fa-brands fa-instagram' iconPosition='left' placeholder='Instagram' />
                      
                      </div>
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
                      {!uploading ? "Upload Image For Profil" : "Loading ..."}
                    </div>
                  )}
                  {/* <div
                  >
                    Select File
                    <input
                      accept="image/*"
                      type="file"

                      onChange={uploadProfileImage}
                    />
                  </div> */}
                  <FormRim.Group controlId="formFile" className="mb-3">
       
        <FormRim.Control type="file" accept="image/*" onChange={uploadProfileImage} />
      </FormRim.Group>
                </>
      </FormGroup>
      <button  class="btn draw-border"   style={{    width: "365px"}} onClick={(e)=>handleRegister(e)} >S'enregistrer</button>
                      {/* <Button onClick={(e)=>handleRegister(e)} className="color" fluid size='large'>
                        Subscribe
                      </Button> */}
        </Segment>
      </Form>
     
    </Grid.Column>
  </Grid>
      </div>  
     
    
  
    )
}
export default Register