import mongoose from "mongoose";
import {dashboardshema} from "../Schema/dashboardshema.js"
mongoose.connect("mongodb://0.0.0.0:27017/mangment")
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
