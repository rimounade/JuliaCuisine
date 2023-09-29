const mongoose = require('mongoose')

const recetteSchema = mongoose.Schema({
    name : {type : String, unique : true},
    ingredients : String,
    description : String,
    image : String,
    categorie : {type : String, required : true},
    owner : {
        type : mongoose.Types.ObjectId,
        ref : 'userCollection'
    },
    date : String
    
})

module.exports = mongoose.model("recetteCollection",recetteSchema)