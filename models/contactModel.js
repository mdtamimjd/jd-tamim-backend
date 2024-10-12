import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const DATABASE = process.env.DATABASE;
mongoose.connect(DATABASE)
.then(()=>{
    console.log("successful connected db.")
})
.catch((err)=>{
    console.log("DB connect some problems",err)
})

const userSchema = mongoose.Schema({
    fullname: String,
    phonenumber: String,
    email: String,
    title: String,
    message: String
},{timestamps: true})

const postModel = mongoose.model("contactPost",userSchema)
export default postModel;
