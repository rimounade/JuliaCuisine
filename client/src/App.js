
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';

import Home from './Components/Home';

import Loginn from './Components/Loginn';

import ErrorHand from './Components/ErrorHnad';
import ListUsers from './Components/ListUsers';
import DescriptionUser from './Components/DescriptionUser';
import EditUser from './Components/EditUser';
import ListRecette from './Components/ListRecette';
import DescriptionRecette from './Components/DescriptionRecette';
import EditRecette from './Components/EditRecette';
import AddRecette from './Components/AddRecette';
import Footer from './Components/Footer';
import NavJulia from './Components/NavJulia';
import ListUserRecettes from './Components/ListUserRecettes';
import ListRecetteCat from './Components/ListRecetteCat';
import NavTest from './Components/NavTest';
import PrivateRoute from './Components/PrivateRoute'
import Profil from './Components/Profil'
import { useDispatch } from 'react-redux';




function App() {
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(current())
  // })
  return (
    <div >
      
      {/* <NavCuisine/> */}
      {/* <NavJulia/> */}
      <NavTest/>
      {/* <img src='https://static.wixstatic.com/media/707ea6_3455ed03091b4ddc9ce7fa5eadfdf9b1~mv2.png/v1/fill/w_1349,h_874,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/707ea6_3455ed03091b4ddc9ce7fa5eadfdf9b1~mv2.png' className='back'/> */}
      <ErrorHand/>
      {/* <br/>
      <br/>
      <br/> */}
      <div >
        
      <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/Register' element={<Register/>}/>
          {/* Users******* */}
          <Route path='/Loginn' element={<Loginn/>}/>
          <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
          <Route path='/ListUsers' element={<ListUsers/>}/>
          <Route path='/DescriptionUser/:id' element={<DescriptionUser/>}/>
          <Route path='/EditUser/:id' element={<EditUser/>}/>
          <Route path='/EditProfil/:id' element={<EditUser/>}/>
          {/* Recettes********* */}
          <Route path='/ListRecette' element={<ListRecette/>}/>
          <Route path='/DescriptionRecette/:id' element={<DescriptionRecette/>}/>
          <Route path='/EditRecette/:id' element={<EditRecette/>}/>
          <Route path='/AddRecette' element={<PrivateRoute><AddRecette/></PrivateRoute>}/>
          <Route path='/ListRecetteCatSucre' element={<ListRecetteCat/>}/>
          <Route path='/ListRecetteCatSale' element={<ListRecetteCat/>}/>
          {/* <Route path='/ListUserRecette/:id' element={<ListUserRecettes/>}/> */}
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
