// require('dotenv').config()
import dotenv from "dotenv"
import  connectDb  from "./db/index.js"
import {app} from './app.js'
dotenv.config({
    path: './env'
})
connectDb()
.then( () => {
    app.listen(process.env.PORT , () =>{
        console.log(`App is listening at port: ${process.env.PORT} `)
    })
})
.catch( (err) => {
    console.log("MongoDb connection failed")
})






/*
import {DB_NAME} from "./constants"

import express from 'express'
const app=express()
( async ()=>{
    try{
        await moongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME})`)
        
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on ${process.env.PORT}`)
        })
        
    } catch(error){
        console.error(error);
    }
})()

*/