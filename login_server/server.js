//import the node modules
//require() is the predefined function, used to import the modules
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongodb = require("mongodb");


//create the rest object
const app = express();
//where "app" is the rest object
//where "app" object, used to develop the rest services


//enable the cors policy
app.use(cors());


//set the json as MIME Type
app.use(bodyparser.json());

//parse the data coming from client application
app.use(bodyparser.urlencoded({extended:false}));



//create the reference variable to connect to mongidb database
const ashokIT = mongodb.MongoClient;
//where "ashokIT" is the reference variable to connect to database


//create the post request
app.post("/login",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/authentication?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("authentication");
            db.collection("login_tbl").find({"email":req.body.email, "password":req.body.password})
                                      .toArray((err,array)=>{
                    if(err) throw err;
                    else{
                        if(array.length>0){
                           res.send({"login":"success"}); 
                        }else{
                            res.send({"login":"fail"});
                        }
                    }
            });
        }
    });
});



//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});