//functional level component

//import React
import React, { useState } from "react";


//create the function
const Example2 = ()=>{
    const [name,setName] = useState("Hello_1");

    const myFun = ()=>{
        setName("Welcome");
    }

    return(
        <React.Fragment>
            <h1>{name}</h1>
            <button onClick={myFun}>Change</button>
        </React.Fragment>
    )


};

export default Example2;


