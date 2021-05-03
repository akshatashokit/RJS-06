//import node modules
//require() function, used to import the node modules
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongodb = require("mongodb");




//create the rest object
const app = express();
//where "app" is the rest object


//enable the cors policy
app.use( cors() );


//set the communication language between client and server
//MIME Type
app.use(bodyparser.json());


//read the data
app.use(bodyparser.urlencoded({extended:false}));



//create reference variable by using "mongodb" module
//above reference variable, used to connect to "mongodb" database
let ashokIT = mongodb.MongoClient;
//where "ashokIT" is the reference variable



//GET Request
app.get("/products",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@cluster0.hz6xa.mongodb.net/ecommerce?retryWrites=true&w=majority",
                                                            (err,connection)=>{
        if(err) throw err;
        else{
            //get the database object
            const db = connection.db("ecommerce");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});



//assign the port number
app.listen(8080,()=>{
    console.log("server started successfully !!!");
});

