import express from "express"
import mongoose from "mongoose";
const uiroute = express.Router();
import {dashboardshema} from "../Schema/dashboardshema.js"


uiroute.get("/", (req, res) =>
{
    res.render("../views/home/home.ejs")
})

uiroute.get("/register_ui", (req, res) =>
{
  
    res.render("../views/register/Register.ejs")
})

uiroute.get("/login_ui", (req, res) =>
{
    res.render("../views/login/Login.ejs")
})

uiroute.get("/update_ui/:datass", async(req, res) =>
{
    let datas = req.params
    const Product = mongoose.model('bookdetails', dashboardshema);
    let data = await Product.findOne({_id:datas.datass})
    res.render("../views/update/update.ejs",{value:data})
})

uiroute.get("/dashboard_ui",async (req, res) =>
{
  const Product = mongoose.model('bookdetails', dashboardshema);
  let data = await Product.find()

  res.render("../views/dashboard/Dashboard.ejs",{data:data})
})


uiroute.post("/forgot-password_ui", (req, res) =>
{
  res.send("forget")
})


uiroute.get("/resend-verification_ui", (req, res) =>
{
    res.send("resend-verification")
})


export {uiroute}
