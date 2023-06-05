import mongoose from "mongoose";
import { dashboardshema } from "../Schema/dashboardshema.js"
mongoose.connect("mongodb://0.0.0.0:27017/mangment")
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