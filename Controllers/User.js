const User = require('../Models/User')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Recette = require('../Models/Recette');
const Comment = require('../Models/Comment');

//SignUp
exports.SignUp = async(req,res)=>{
    try {
        const {email, password}=req.body

        const found = await User.findOne({email})

        if (found){
            res.status(400).send({errors : [{msg : "Email exists"}]})
        }
        const newUser = new User({...req.body, role : "client"})

        const salt = 10
        const hashedpassword = bcrypt.hashSync(password, salt);
        
        newUser.password = hashedpassword

        await newUser.save()

        const payload = { id : newUser._id}
        var token = jwt.sign(payload, process.env.privateKey,{ expiresIn: '5h' });

        res.status(200).send({msg : 'Success',newUser,token})

        
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not SignUp'}]})
    }
}


//SignIn
exports.SignIn = async(req,res)=>{

    try {
        
        const {email,password} = req.body

    
    const found = await User.findOne({email})

   
    if(!found){
        return res.status(400).send({errors : [{msg : "Wrong email"}]})
    }
    
    const matched =  bcrypt.compareSync(password, found.password)
    
    if(!matched){
        return res.status(400).send({errors : [{msg : "Wrong password"}]})
    }

    const payload = {id : found._id}
    
    var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '5h' } );
    res.status(200).send({msg:"success",found,token})
        
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not SignIn'}]})
    }
    
    
}
// put user
exports.updateUser = async(req,res)=>{
    try {
        const {id} = req.params
        await User.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : 'User updated'})
    } catch (error) {
        res.status(500).send('Could not update user')
    }
}
// get users
exports.getUsers = async(req,res)=>{
    try {
        const users = await User.find() 
        res.status(200).send({msg : "list of users", users})
        
    } catch (error) {
        res.status(500).send({errors : [{msg:"could not get users"}]})
    }
}

exports.deleteUser = async(req,res)=>{
    try {
        const {id} = req.params
        await Comment.deleteMany({owner : id})
        await Recette.deleteMany({owner : id})
        await User.findByIdAndDelete(id)
        res.status(200).send({msg : 'user deleted'})
        
    } catch (error) {
        res.status(500).send({errors : [{msg:"could not delete user"}]})
    }
}

exports.getOneUser = async(req,res)=>{
    try {
        const {id}= req.params

        const user = await User.findById(id) 
        res.status(200).send({msg : "OneUser", user})
        
    } catch (error) {
        res.status(500).send({errors : [{msg:"could not get users"}]})
    }
}
