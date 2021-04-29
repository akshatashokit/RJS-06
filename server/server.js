//NodeJS
//import the modules
//require() function, used to import the modules
//@express      @cors       @mongodb        @body-parser
const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const bodyparser = require("body-parser");


//rest object
const app = express();
//where "app" object is the rest object
//where "app" object, used to develop the rest services


//enable "ports" communication
//enabling "cors" policy
app.use( cors() );


//MIME Type
app.use( bodyparser.json() );


//receive the data from client application
app.use(bodyparser.urlencoded({extended:false}));



//create the reference variable to connect to mongodb database
//we will create reference variable by using "mongodb" module
let ashokIT = mongodb.MongoClient;
//where "ashokIT" is the reference variable
//by using ashokIT we can connect to mongodb atlas



//create the GET Request
app.get("/products",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@cluster0.hz6xa.mongodb.net/RJS-06?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            let db = connection.db("RJS-06");
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
    console.log("server ready");
});
















