import mongoose from "mongoose";
import {dashboardshema} from "../Schema/dashboardshema.js"
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
});
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
