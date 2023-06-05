import bcrypt from "bcrypt"
import {regschema} from "../Schema/registerschema.js"
import mongoose from "mongoose";
mongoose.connect("mongodb://0.0.0.0:27017/mangment")
const regcon = async (req, res) =>
{
    const { name, email, password, username, number } = req.body;
    let rounds = 10;
    const hashPassword = await bcrypt.hash(password, rounds)
      
    const Product = mongoose.model('studentdata', regschema);
    let data = new Product({
        name: name,
        password: hashPassword,
        email: email,
        username: username,
        number:number
    });
    await data.save();

    res.cookie("email",email, {
        maxAge:200000
    })
    res.cookie("username",username, {
        maxAge:200000
    })
    res.cookie("password",password, {
        maxAge:200000
    })
    res.redirect("/login_ui");
}

export {regcon}