import express from "express";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import  userRoutes from "./src/routes/userRoutes";
import visitRoutes from "./src/routes/visitRoutes";
dotenv.config("./.env");

const app=express();

app.use(bodyparser.json());
app.use("/user", userRoutes);
app.use("/visit",visitRoutes);
app.use("/",(req,res) => res.status(200).json({
    message:"This is Tour ApI is not Exist"
}));



const dbUrl=process.env.DATABASEURL;
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
 
    useUnifiedTopology: true,

}).then(()=> console.log("Database connected successfully"))

const port =process .env.PORT;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})


export default app;