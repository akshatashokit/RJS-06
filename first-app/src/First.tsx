//import Component class
//Component is the predefined class
//Component class used to create the "React Component"
//Component class present in "react" package.
import { Component } from "react";

//state
//component "own data" called as "state"
//in general, we will represent "state" by using "interfaces"
interface IState{};

//props
//props recognizing the data coming from other components
//we will represent props by using interfaces
interface IProps{};

class First extends Component<IState,IProps>{
    constructor(props:IProps){
        super(props);
    };

    render(){
        return(
            <h1>welcome to react component !!!</h1>
        )
    };
};


export default First;