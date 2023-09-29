const express = require('express')

const { addRecette, getRecettes, updateRecette, deleteRecette, getOneRecette, getRecetteSale, getRecetteSucre, getRecetteUser } = require('../Controllers/Recette')
const Recette = require('../Models/Recette')
const { isAuth } = require('../Middelwares/isAuth')
const User = require('../Models/User')


const recetteRouter = express.Router()

//add recette

recetteRouter.post('/addRecette',isAuth,addRecette)
// get recettes
recetteRouter.get('/getRecettes',getRecettes)
//update recette
 recetteRouter.put('/updateRecette/:id',updateRecette)
 //delete recette
 recetteRouter.delete('/deleteRecette/:id',deleteRecette)
//get one recette
 recetteRouter.get('/getOneRecette/:id',getOneRecette)

 //getrecetteuser

 recetteRouter.get('/getRecetteUser/:id',getRecetteUser)

//recette sucre
recetteRouter.get('/getRecetteSucre',getRecetteSucre)

 //recette ssale
 recetteRouter.get('/getRecetteSale',getRecetteSale)


module.exports = recetteRouter