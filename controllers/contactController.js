import postModel from "../models/contactModel.js"

export const contactController = async (req, res) => {
    let {fullname,phonenumber,email,title,message} = req.body;
    const contactPostCreate = await postModel.create({
        fullname,
        phonenumber,
        email,
        title,
        message
    })
    res.status(200).redirect("http://127.0.0.1:5500/client/index.html#footerSection")
}