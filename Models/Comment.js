const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    texte : String,
    
    owner : {
        type : mongoose.Types.ObjectId,
        ref : 'userCollection'
    },

    post : {
        type : mongoose.Types.ObjectId,
        ref : 'recetteCollection'
    },
    date : String
    
})

module.exports = mongoose.model("commentCollection",commentSchema)