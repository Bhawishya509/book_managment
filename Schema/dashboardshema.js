import mongoose from "mongoose";
mongoose.connect("mongodb://0.0.0.0:27017/mangment")
const dashboardshema = new mongoose.Schema({
    title: String,
    author: String,
    prize: Number,
    category:String

});
export {dashboardshema}  