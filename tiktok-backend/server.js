import express from "express";
import mongoose from "mongoose";

import Data from "./data.js";
const conection_URL = 'mongodb+srv://admin:admin123@tiktok.0p3kn.mongodb.net/tiktokDb?retryWrites=true&w=majority';
import Videos from './dbModel.js'

//app config
const app = express();
const port = process.env.PORT || 9000;

//Middleware
app.use(express.json())
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*')
    next();
})

//Db Config

mongoose.connect(conection_URL);

//API Endpoint
app.get("/", (req, res) => {
  res.status(200).send("Hellow Everybody....");
});

app.get('/v1/posts',(req,res) => {
    res.status(200).send(Data)
})

app.post('/v2/posts',(req,res) => {
    const dbVideos = req.body

    Videos.create(dbVideos,(err,data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/v2/posts',(req,res) => {
    Videos.find((err , data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//listen
app.listen(port, () => console.log(`server is listening on port ${port}`));
