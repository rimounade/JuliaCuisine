import { useState } from "react"
// import {Form,Button} from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../Redux/Actions/AuthActions"
import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
    

const Loginn=()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(login({email,password},navigate))
    }
    
    return(
   <div className="LoginPage">
    <div className="css-1t53ozj">
        <h3 className="MuiTypography-root MuiTypography-h3 css-11le6v7-MuiTypography-root">
Bonjour, bon retour</h3>
        <img src="/illustration_login.png" alt="login"/>
        
    </div>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2'  textAlign='center'>
          <i class="fa-solid fa-right-to-bracket fa-lg" style={{color: "#f277c6"}}></i>
          {/* <Image size="20%"src='/julia.png' style={{ marginRight: '1.5em' }} /> */}
          &nbsp; Connectez-vous à votre compte
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input onChange={(e)=> setEmail(e.target.value)} fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input onChange={(e)=> setPassword(e.target.value)}
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
    <button  class="btn draw-border"   style={{    width: "365px"}} onClick={(e)=>handleLogin(e)} >Se connecter</button>
              {/* <Button style={{backgroundcolor:"#e0e1e2 none"}} className="color"onClick={(e)=>handleLogin(e)}  fluid size='large'>
                Login
              </Button> */}
            </Segment>
          </Form>
          <Message>
          Nouveau pour nous ? <a style={{color:"#a333c8"}} href='/Register'>S'inscrire</a>
          </Message>
        </Grid.Column>
      </Grid>
   </div>      
    
    )
}
export default Loginn