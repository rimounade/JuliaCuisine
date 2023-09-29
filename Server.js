const express = require ('express')
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User')
const recetteRouter = require('./Routes/Recette')
const commentRouter = require('./Routes/Comment')
const path=require("path")

const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())
//User
app.use('/api/user',userRouter)
//Recette
app.use('/api/recette',recetteRouter)
//Comment
app.use('/api/comment',commentRouter)
app.use("/api/uploads", require("./Routes/uploadRoute"));

app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

app.listen(process.env.port, console.log(`the server is runnig on the port ${process.env.port}`))