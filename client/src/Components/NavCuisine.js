import {Navbar,Container,Nav} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../Redux/Actions/AuthActions"
import SearchBare from "./SearchBare"
const NavCuisine = ()=>{
    const token = localStorage.getItem('token')
    const user = useSelector(state=>state.AuthReducer.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return(
        
        // <div className="NavCuisineJulia">
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        
         {/* <div className="navC"> */}
          <Nav className="me-auto">
            {/* Recettes******** */}
            <Navbar.Brand ></Navbar.Brand>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/ListRecette'>List Recettes</Nav.Link>
            <Nav.Link as={Link} to='/AddRecette'>Add Recette</Nav.Link>
            
            {/* Users*********** */}
            <Nav.Link as={Link} to='/ListUsers'>List Users</Nav.Link>
            {
                token && user?
                <>
                <Nav.Link as={Link} to='/Profil'>Profil</Nav.Link>
                <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
                </>
                :
                <>
                <Nav.Link as={Link} to='/Register'>Subscribe</Nav.Link>
                <Nav.Link as={Link} to='/Loginn'>Sign In</Nav.Link>
               
                </>
            }

          <SearchBare/>

          </Nav>
          {/* </div> */}
        </Container>
      </Navbar>
      // </div>
    )
}
export default NavCuisine