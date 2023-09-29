import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import SearchBare from './SearchBare'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Redux/Actions/AuthActions'
const NavJulia=()=>{
  const token = localStorage.getItem('token')
  const user = useSelector(state=>state.AuthReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
    return(
        <div className='menuDiv'>
         <div className='page'>
        <img src='/Julia.png' alt="not found" style={{width:200, alignItems:'center'}}/>
 
        </div>
        <div>
        <Menu fixed='top' style={{backgroundColor : "#1b1c1d36",width:50}}>
  
          <Container>
    
    
            <Menu.Item className='color' as={Link} to='/'>Home</Menu.Item>
            <Menu.Item className='color' as={Link} to='/ListRecette'>List Recettes</Menu.Item>
            <Menu.Item className='color' as={Link} to='/AddRecette'>Add Recette</Menu.Item>
            <Menu.Item className='color' as={Link} to='/ListUsers'>List Users</Menu.Item>
            {/* <Menu.Item className='color' as={Link} to='/ListRecetteCatSucre'>Sucre</Menu.Item>
            <Menu.Item className='color' as={Link} to='/ListRecetteCatSale'>Sale</Menu.Item> */}
            {
                token && user?
                <>
                <Menu.Item className='color' as={Link} to='/Profil'>Profil</Menu.Item>
                <Menu.Item className='color' style={{marginLeft:'36%'}}  onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Menu.Item>
                </>
                :
                < >
                <Menu.Item className='color' style={{marginLeft:'34%'}} as={Link} to='/Register'>Subscribe</Menu.Item>
                <Menu.Item className='color' as={Link} to='/Loginn'>Sign In</Menu.Item>
               
                </>
            }

<Menu.Item className='color'><SearchBare /></Menu.Item>

            {/* <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Container>
        </Menu>
    
    </div>
        {/* <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Semantic UI React Fixed Template</Header>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>
            A text container is used for the main container, which is useful for single column layouts.
          </p>
    
          <Image src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          <Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
        </Container>
    
        <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
          <Container textAlign='center'>
            <Grid divided inverted stackable>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Group 1' />
                <List link inverted>
                  <List.Item as='a'>Link One</List.Item>
                  <List.Item as='a'>Link Two</List.Item>
                  <List.Item as='a'>Link Three</List.Item>
                  <List.Item as='a'>Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Group 2' />
                <List link inverted>
                  <List.Item as='a'>Link One</List.Item>
                  <List.Item as='a'>Link Two</List.Item>
                  <List.Item as='a'>Link Three</List.Item>
                  <List.Item as='a'>Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Group 3' />
                <List link inverted>
                  <List.Item as='a'>Link One</List.Item>
                  <List.Item as='a'>Link Two</List.Item>
                  <List.Item as='a'>Link Three</List.Item>
                  <List.Item as='a'>Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as='h4' content='Footer Header' />
                <p>
                  Extra space for a call to action inside the footer that could help re-engage users.
                </p>
              </Grid.Column>
            </Grid>
    
            <Divider inverted section />
            <Image centered size='mini' src='/logo.png' />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Map
              </List.Item>
              <List.Item as='a' href='#'>
                Contact Us
              </List.Item>
              <List.Item as='a' href='#'>
                Terms and Conditions
              </List.Item>
              <List.Item as='a' href='#'>
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment> */}
  </div>
    )
}


export default NavJulia