const Comment = require('../Models/Comment')
const Recette = require('../Models/Recette')
//add recette
exports.addRecette = async(req,res)=>{
    try {
        
        const {name}= req.body
        const found = await Recette.findOne({name}) 

        if(found){
            return res.status(400).send({errors : [{msg : "recette exists"}]})
        }
        const d= new Date()

         const currentDate =   [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');


        const newRecette = new Recette({...req.body,date : currentDate,owner : req.user._id})

        await newRecette.save()
        
        res.status(200).send({msg :"recette added",newRecette})
   
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not add recette'}]})
    }
    }
    //get recettes
    exports.getRecettes = async(req,res)=>{
        try {
            const recettes = await Recette.find().populate('owner')
            res.status(200).send({msg : "list of recettes", recettes})
        } catch (error) {
            res.status(500).send({errors : [{msg : 'Could not add recette'}]})
        }
    }
    //update recette
    exports.updateRecette = async(req,res)=>{
        try {
            const {id}=req.params
            const d= new Date()

            const currentDate =   [d.getMonth()+1,
                  d.getDate(),
                  d.getFullYear()].join('/')+' '+
                 [d.getHours(),
                  d.getMinutes(),
                  d.getSeconds()].join(':');
   
            await Recette.findByIdAndUpdate(id,{$set :{...req.body,date : currentDate}})
            
            res.status(200).send({msg:'recette updated'})
            
        } catch (error) {
            res.status(500).send({errors : [{msg : 'Could not update recette'}]})
        }
     }
     // delete recette
    exports.deleteRecette = async(req,res)=>{
        try {
            const {id}= req.params
            await Comment.deleteMany({post : id})
            await Recette.findByIdAndDelete(id)
           
            res.status(200).send({msg:"recette deleted"})
        } catch (error) {
            res.status(500).send({errors : [{msg : 'Could not delete recette'}]})
        }
        
    }
    // get one recette

    exports.getOneRecette = async(req,res)=>{
        try {
            const {id}= req.params
            const recette = await Recette.findById(id)
            res.status(200).send({msg : "one recette", recette})
        } catch (error) {
            res.status(500).send({errors : [{msg:"could not get recette"}]})
        }
     }
     //get recette user
     exports.getRecetteUser = async(req,res)=>{
        try {
            const {id}=req.params
       
    
                const recettes = await Recette.find({owner : id})
                
                res.status(200).send({msg : "les recettes de user", recettes})
            
            
            
        } catch (error) {
            res.status(500).send({errors : [{msg:"could not get recipes of user"}]})
        }
     }

     //recette sale
     exports.getRecetteSale = async(req,res)=>{
        try {
           
                const recettes = await Recette.find({categorie : "Sale"})
                
                res.status(200).send({msg : "les recettes sale", recettes})
            
            
            
        } catch (error) {
            res.status(500).send({errors : [{msg:"could not get recipes sale"}]})
        }
     }
     // recette sucre
     exports.getRecetteSucre = async(req,res)=>{
        try {
            
           
                const recettes = await Recette.find({categorie : "Sucre"})
                
                res.status(200).send({msg : "les recettes sucre", recettes})
            
            
            
        } catch (error) {
            res.status(500).send({errors : [{msg:"could not get recipes sucre"}]})
        }
     }