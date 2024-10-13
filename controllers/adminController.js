import postModel from "../models/contactModel.js"

export const adminController = async (req,res)=>{
    const findAllContactPost = await postModel.find()
    res.send(findAllContactPost)
}