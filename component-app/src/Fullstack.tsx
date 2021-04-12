import React, { Component } from "react";
import Mean from "./Mean";
import Mern from "./Mern";
import Mevn from "./Mevn";

interface IState{}
interface IProps{}

class Fullstack extends Component<IState,IProps>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                    <Mean />
                    <Mern /> 
                    <Mevn />
           </React.Fragment>
        )
    };
};
export default Fullstack;