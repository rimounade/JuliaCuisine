import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOneUser, updateUser } from "../Redux/Actions/AuthActions"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import {FormGroup} from "reactstrap"
import FormRim from 'react-bootstrap/Form';
import axios from "axios"
import {  Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
const EditUser = ()=>{
    const {id}=useParams()
    const location = useLocation()
    const verif = location.pathname
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(getOneUser(id))
    },[])

    const oneUser = useSelector(state => state.AuthReducer.oneUser)

    const [name,setName] = useState(oneUser.name)
    const [first_name,setFirst_name] = useState(oneUser.first_name)
    const [email,setEmail] = useState(oneUser.email)
    const [image,setImage] = useState(oneUser.image)
    const [uploading, setUploading] = useState(false);
    const [fb, setFb] = useState(oneUser.fb);
    const [instagram,setInstagram]=useState(oneUser.instagram)

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
    useEffect(()=>{
        setName(oneUser.name)
        setFirst_name(oneUser.first_name)
        setEmail(oneUser.email)
        setImage(oneUser.image)
    },[oneUser])

    const handleUpdate=(e)=>{
        e.preventDefault()
        dispatch(updateUser({name,first_name,email,image,fb,instagram},id,navigate,verif))
        }
    return(

    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2'  textAlign='center'>
      <Image size="20%"src='/julia.png' style={{ marginRight: '1.5em' }} /> You Can Edit A Recipe
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input value={name}  onChange={(e)=> setName(e.target.value)}   placeholder='Name' />
          <Form.Input value={first_name} onChange={(e)=> setFirst_name(e.target.value)}   placeholder='FirstName' />
          <Form.Input value={email} onChange={(e)=>setEmail(e.target.innerText)}

          placeholder='Email'
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
           

<FormRim.Group controlId="formFile" className="mb-3">
       
       <FormRim.Control type="file" accept="image/*" onChange={uploadProfileImage} />
     </FormRim.Group>
              

                    
                  </div>
                </>
                <div style={{display:"flex", alignItems:"center", marginBottom:"20px"}}>
                      <i class="fa-brands fa-facebook fa-xl" style={{marginRight:"20px",color:"#f277c6",marginLeft:"5px"}}></i>
                      <Form.Input value={fb} style={{width:"347px"}} onChange={(e)=> setFb(e.target.value)} fluid icon='fa-regular fa-facebook-f'  iconPosition='left' placeholder='Facebook' />
                      </div>
                      <div style={{display:"flex", alignItems:"center"}}>
                      <i class="fa-brands fa-instagram fa-xl" style={{marginRight:"20px",color:"#f277c6",marginLeft:"5px"}}></i>
                      <Form.Input value={instagram} style={{width:"347px"}}onChange={(e)=> setInstagram(e.target.value)} fluid icon='fa-brands fa-instagram' iconPosition='left' placeholder='Instagram' />
                      
                      </div>
      </FormGroup>
      <button  class="btn draw-border"   style={{    width: "365px"}} onClick={(e)=>handleUpdate(e)} >Modifier</button>
          {/* <Button onClick={(e)=>handleUpdate(e)} className="color"   fluid size='large'>
            Edit
          </Button> */}
        </Segment>
      </Form>
     
    </Grid.Column>
  </Grid>
    )
}
export default EditUser