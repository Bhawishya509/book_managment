import mongoose from "mongoose";
import bcrypt from "bcrypt"
import {logschema} from "../Schema/loginschema.js"
const pass = "Bhawishya11";
const collection_name = "ecom";
const mongo = `mongodb+srv://Bhawishya:${pass}@cluster0.ehz40xr.mongodb.net/${collection_name}?retryWrites=true&w=majority`;
mongoose.connect(mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
});
const logincon = async (req, res) => {

        const { anydata, password } = req.body;
        const Product = mongoose.model('studentdatas', logschema);
        let data = await Product.findOne({
            $or: [{ "email": anydata }, { "username": anydata }]
        });
    
        if (data) {
            let checking = await bcrypt.compare(password, data.password);
            if (checking == true) res.redirect("/dashboard_ui");
            else if (checking == false) res.redirect("/login_ui")
        }
        else if (data !== undefined) {
            res.redirect("/login_ui")
        }
    
}
export {logincon}