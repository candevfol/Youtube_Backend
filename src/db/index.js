import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDb =  async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`)
        console.log("Success Connection")
    } catch (error) {
        console.log("Error found",error)
    }
}

export default connectDb