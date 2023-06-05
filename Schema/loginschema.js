import mongoose from "mongoose";
mongoose.connect("mongodb://0.0.0.0:27017/mangment")
const logschema = new mongoose.Schema({
    password: String,
    anydata:String

});
export {logschema}