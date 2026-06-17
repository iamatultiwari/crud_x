import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT;



app.get("/", (req,res) => {
    res.send("hello duniya")
    console.log("the server is created")
})
app.listen(port,(req,res) => {
    console.log(`server is listening at ${port}`);
})
