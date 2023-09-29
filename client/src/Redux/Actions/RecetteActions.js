// 

import {  GETONERECETTE, GETRECETTES, GETUSERRECETTE } from "../ActionTypes/RecetteTypes"
import axios from 'axios'
import { handleError } from "./ErrorRecetteAction"
        

export const getRecettes = ()=>async(dispatch)=>{
    try {
       const res =  await axios.get('/api/recette/getRecettes')
       dispatch(
        {
            type : GETRECETTES,
            payload : res.data.recettes
        }
       )
        
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}
export const addRecette = (newRecette,navigate)=>async(dispatch)=>{
        try {
            await axios.post('/api/recette/addRecette',newRecette,{
                headers : {
                    Authorization : localStorage.getItem('token')
                }
            } )

            dispatch(getRecettes())

            navigate('/ListRecette')

        } catch (error) {
            error.response.data.errors.forEach(element => {
                dispatch(handleError(element.msg))
            });
        }
}
//get one recette 
export const getOneRecette=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/recette/GetOneRecette/${id}`)

        dispatch(
            {
                type : GETONERECETTE,
                payload : res.data.recette
            }
        )
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}
// update recette
export const updateRecette=(upRecette,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/recette/UpdateRecette/${id}`,upRecette)

        dispatch(getRecettes())
        
        navigate(`/DescriptionRecette/${id}`)
    } 
    catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}
//delete recette
export const deleteRecette = (id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/recette/DeleteRecette/${id}`)

        navigate('/ListRecette')
        
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }

}



export const getUserRecettes = (id)=>async(dispatch)=>{
    try {
       const res =  await axios.get(`/api/recette/getRecetteUser/${id}`)
       dispatch(
        {
            type : GETUSERRECETTE,
            payload : res.data.recettes
        }
       )
        
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}


export const getRecetteCat =(verif)=>async(dispatch)=>{
   
    try {
        const res  =  await axios.get(verif.includes("Sucre") ?" /api/recette/getRecetteSucre" :'/api/recette/getRecetteSale')
        // console.log(verif.includes("Sucre"))
        // if (verif.includes("Sucre")) {
        //      res =  await axios.get(" /api/recette/getRecetteSucre")
        // } else {
        //      res =  await axios.get('/api/recette/getRecetteSale')
        // }
   
      console.log(res)
       dispatch(
        {
            type : GETRECETTES,
            payload : res.data.recettes
        }
       )
        
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}