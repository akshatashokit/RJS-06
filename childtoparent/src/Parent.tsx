import React, { Component } from "react";
import Child from "./Child";

interface IState{
    msg : string;
};

interface IProps{

};

class Parent extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            msg : "ReactJS"
        }
    };

    myFun = (data:any):void=>{
        this.setState({
            msg:data
        })
    };

    render(){
        return(
            <React.Fragment>
                <h1>{this.state.msg}</h1>
                <Child key1={this.myFun}></Child>
            </React.Fragment>
        )
    }

};

export default Parent;