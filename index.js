import express from 'express'
import dotenv from 'dotenv'
import contactRoute from './routes/contactRoute.js';
const app = express()
dotenv.config()
const port = process.env.PORT || 5000 ;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",contactRoute)

// client error hendeling
app.use((req,res,next)=>{
    console.log("This page is not available")
    res.status(400).send({
        "message":"api not available"
    })
    next()
})

// server error hendeling
app.use((err,req,res,next)=>{
    console.log("some problem in this server! ")
    res.status(500).send({
        "message":`some problems in this server ${err}`
    })
})

app.listen(port, () =>{
    console.log(`server is running ${port}`)
})