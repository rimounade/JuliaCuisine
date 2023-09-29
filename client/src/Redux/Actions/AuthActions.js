import { CURRENT, GETONEUSER, GETUSERS, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"
import axios from 'axios'
import { handleError } from "./ErrorAction"
export const register =(newUser,navigate)=>async(dispatch)=>{
    try {

        const res = await axios.post('/api/user/SignUp',newUser)

        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )

        navigate('/Profil')
        
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
        
    }
}
export const login = (logUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/user/SignIn',logUser)
        dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
        )
        navigate('/Profil')
        
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
    
}
export const current =()=>async(dispatch)=>{
    const config = {
        headers : {
            Authorization : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/user/getCurrentUser',config)

        dispatch({
            type : CURRENT,
            payload : res.data
        })
        
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}
export const logout=()=>{
    return(
    {
        type : LOGOUT
    }
)}

export const getUsers=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/user/GetUsers')

        dispatch(
            {
                type : GETUSERS,
                payload : res.data.users
            }
        )
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}
export const getOneUser=(id)=>async(dispatch)=>{
    try {

        const res = await axios.get(`/api/user/GetOneUser/${id}`)

        dispatch(
            {
                type : GETONEUSER,
                payload : res.data.user
            }
        )
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}

export const updateUser=(upUser,id,navigate,verif)=>async(dispatch)=>{
    try {
        // const token = localStorage.getItem('token')
        await axios.put(`/api/user/UpdateUser/${id}`,upUser)

        dispatch(getUsers())
        verif.includes("/EditProfil")?
        navigate('/Profil')
        
        :
        navigate(`/DescriptionUser/${id}`)
        
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}
// export const deleteProfil = (id,navigate)=>async(dispatch)=>{
//     try {
       
//         await axios.delete(`/api/user/DeleteUser/${id}`)
       
       
       
//         dispatch(logout() && navigate('/'))
//     } catch (error) {
//         console.log(error)
//     }
// }


export const deleteUser = (id,navigate,verif)=>async(dispatch)=>{
    try {

        await axios.delete(`/api/user/DeleteUser/${id}`)
        const delProf =  ()=>{dispatch(logout()); navigate('/')  }
        const deldesc = ()=>{dispatch(logout());navigate('')}
        // verif.includes("/Profil")? 
        delProf()
            
        //  :
        //  deldesc()
        //  navigate('/ListUsers')
        
        
  
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}