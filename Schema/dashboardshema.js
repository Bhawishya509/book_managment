
import mongoose from "mongoose";
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
});
const dashboardshema = new mongoose.Schema({
    title: String,
    author: String,
    prize: Number,
    category:String

});
export {dashboardshema}  