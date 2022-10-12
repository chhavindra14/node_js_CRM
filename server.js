import { MongoClient } from 'mongodb'
const express = require('express');
import { APP_PORT } from "./config";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Router from './Routes';
import ConnectDb from './db/db.js'
import http from 'http';


dotenv.config();
const app =  express();
app.use(express.json())

 ConnectDb();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api',  Router);

app.use('/project_img', express.static('uploads'));
app.use('/user_profile', express.static('uploads'));

app.listen(APP_PORT, () => console.log(` Server is lisrening  on port: http://localhost:${APP_PORT}`));



// Database commection
// const Database = 'Test';
// const url = 'mongodb+srv://sanju:asd123!@#@san.ntmjy.mongodb.net/?retryWrites=true&w=majority';

// const client = new MongoClient(url);

// async function getData()

// {
//   let  result = await client.connect();
//   let db = result.result.db(Database);
//   let collection = db.collection("Food");
//   let response = await  collection.find({}).toArray();
//   console.log(response);
// }

// getData();








  





// mongoose.connect(process.env.DB_CONNECT,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   },() => console.log("Database Connection Successfully.......")
// );




















