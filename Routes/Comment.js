const express = require('express')
const Comment = require('../Models/Comment')
const { isAuth } = require('../Middelwares/isAuth')
const commentRouter = express.Router()


commentRouter.post('/AddComment',isAuth,async(req,res)=>{
    try {
        const d= new Date()

        const currentDate =   [d.getMonth()+1,
              d.getDate(),
              d.getFullYear()].join('/')+' '+
             [d.getHours(),
              d.getMinutes(),
              d.getSeconds()].join(':');
        const newComment = new Comment ({...req.body,date : currentDate,owner : req.user._id})
        await newComment.save()
        res.status(200).send({msg :"Comment added",newComment})
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not add comment'}]})
    }
})

commentRouter.get('/getCommentsPost/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const comments = await Comment.find({post : id}).populate("owner").populate("post")
        res.status(200).send({msg : "list of comments", comments})
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not get comments'}]})
    }
})
//delete comment 
commentRouter.delete('/deleteComment/:id',isAuth, async(req,res)=>{ 
    try {
        const {id}= req.params
        await Comment.findByIdAndDelete(id)
        res.status(200).send({msg:"Comment deleted"})
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not delete comment'}]})
    }
    
})
//Update Comment
commentRouter.put('/updateComment/:id',isAuth,async(req,res)=>{
    try {
        const {id} = req.params
        const d= new Date()

        const currentDate =   [d.getMonth()+1,
              d.getDate(),
              d.getFullYear()].join('/')+' '+
             [d.getHours(),
              d.getMinutes(),
              d.getSeconds()].join(':');
        await Comment.findByIdAndUpdate(id,{$set : {...req.body,date : currentDate}})
        res.status(200).send({msg:"Comment updated"})

    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not update comment'}]})
    }
})


module.exports = commentRouter