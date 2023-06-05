import mongoose from "mongoose";
import bcrypt from "bcrypt"
import {logschema} from "../Schema/loginschema.js"
mongoose.connect("mongodb://0.0.0.0:27017/mangment")
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