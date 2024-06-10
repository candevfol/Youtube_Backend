// require('dotenv').config()
import dotenv from "dotenv"
import  connectDb  from "./db/index.js"

dotenv.config({
    path: './env'
})
connectDb()






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