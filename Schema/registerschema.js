import mongoose from "mongoose";
mongoose.connect("mongodb://0.0.0.0:27017/mangment")
const regschema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    username: String,
    number:Number

});
export {regschema}