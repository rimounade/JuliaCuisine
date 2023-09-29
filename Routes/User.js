const express = require('express')

const { SignIn, SignUp, updateUser, deleteUser, getOneUser, getUsers } = require('../Controllers/User');
const { validSignUp, validation, validSignIn } = require('../Middelwares/Validator');
const { isAuth } = require('../Middelwares/isAuth');
const User = require('../Models/User');
const userRouter = express.Router()

//Signup user

userRouter.post('/SignUp',validSignUp,validation,SignUp)
//Signin User

userRouter.post('/SignIn',validSignIn,validation,SignIn)

//getoneUser user connecté

userRouter.get('/getCurrentUser',isAuth,(req,res)=>res.send(req.user)

)
//get list users
userRouter.get('/GetUsers',getUsers)
//delete user
userRouter.delete('/DeleteUser/:id',deleteUser)
//update user

userRouter.put('/UpdateUser/:id',updateUser)
// get one user
userRouter.get('/GetOneUser/:id',getOneUser) 




module.exports = userRouter