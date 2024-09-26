import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import dbConnection from "./database/dbConnection.js";

const app=express();
dotenv.config({path:"./config/.env"})

app.use(cors({
    origin:[process.env.PORTFOLIO_URL, process.env.DAHBOARD_URL],
    methods:["GET", "POST", "DELETE","PUT"],
    credentials:true,
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}))

dbConnection();
export default app;
