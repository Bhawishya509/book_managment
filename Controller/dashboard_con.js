import mongoose from "mongoose";
import { dashboardshema } from "../Schema/dashboardshema.js"
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
});
const dashcon = async (req, res) =>
{
    const { title, author, prize, category } = req.body;
    const Product = mongoose.model('bookdetails', dashboardshema);
    let data = new Product({
        title: title,
       author: author,
       prize: prize,
       category:category
    });
    await data.save();
    res.redirect("/dashboard_ui");
}

export {dashcon}