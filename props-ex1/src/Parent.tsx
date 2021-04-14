import React, { Component } from "react";
import  Child  from "./Child";

interface IState{
    key1:string;
    key2:number;
    key3:boolean;
};

interface IProps{

};

class Parent extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            key1 : "Hello",
            key2 : 100,
            key3 : true
        };
    };
    render(){
        return(
            <React.Fragment>
                <Child key1={this.state.key1}
                       key2={this.state.key2}
                       key3={this.state.key3}></Child>
            </React.Fragment>
        )
    };
};

export default Parent;

