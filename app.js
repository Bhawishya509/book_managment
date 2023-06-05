import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();
const port = process.env.PORT || '3000'
import { route } from "./routes/pathroutes.js";
import { uiroute } from "./routes/Uiroutes.js";
app.use(cors())
app.use(cookieParser())
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route)
app.use(uiroute)
app.listen(port,() =>
{
    console.log("connect with server")
})