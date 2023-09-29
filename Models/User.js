const mongoose = require('mongoose')


const userSchema = mongoose.Schema(
    {
        name : String,
        first_name : String,
        image:String,
        description:String,
        fb:String,
        instagram : String,
        email : {type: String, required : true, unique : true},
        password : {type : String, requied : true},
        role : String
    }
)

module.exports = mongoose.model('userCollection', userSchema)