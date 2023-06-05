
import {dashboardshema} from "../Schema/dashboardshema.js"

import mongoose from "mongoose";
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
});
const deletedata = async(req, res) =>
{
    let datas = req.params
    console.log(datas)
    const Product = mongoose.model('bookdetails', dashboardshema);
    try {
        let data = await Product.deleteOne({_id:datas.datass})
    console.log(data);
    res.redirect("/dashboard_ui")
        
    } catch (error) {
        console.log("error")
    }
    
    
}
export { deletedata }
