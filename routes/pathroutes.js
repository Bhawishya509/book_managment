import express from "express"
const route = express.Router();
import {verify} from "../Middleware/Register_mid.js"
import { regcon } from "../Controller/Register_con.js"
import { verifypass } from "../Middleware/login_mid.js";
import { logincon } from "../Controller/login_con.js";
import { verifydash } from "../Middleware/dashboard_mid.js"
import { dashcon } from "../Controller/dashboard_con.js"
import { deletedata } from "../Controller/delete.js";
import { updatedata } from "../Controller/update.js";
route.get("/", (req, res) =>
{
    res.render("../views/home/home.ejs")
})

route.get("/delete/:datass", deletedata)
route.post("/update",updatedata)
route.post("/login",verifypass,logincon)
route.post("/Register",verify,regcon)

route.post("/dashboard",verifydash, dashcon) 
export {route}