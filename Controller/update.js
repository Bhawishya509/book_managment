import mongoose from "mongoose";
import {dashboardshema} from "../Schema/dashboardshema.js"
mongoose.connect("mongodb://0.0.0.0:27017/mangment")
const updatedata = async(req, res) =>
{
    const { title, author, prize, category,_id } = req.body;
    console.log(req.body)
    
    const Product = mongoose.model('bookdetails', dashboardshema);
    try {
        let data =await  Product.updateOne(
            { _id: _id },
            {
                $set: { title: title,author:author,prize:prize,category:category }
            }
        )
        console.log(data)

    res.redirect("/dashboard_ui")
        
    } catch (error) {
        console.log("error")
    }
    
    
}
export { updatedata }
