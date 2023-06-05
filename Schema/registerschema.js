
import mongoose from "mongoose";
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
});

const regschema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    username: String,
    number:Number

});
export {regschema}