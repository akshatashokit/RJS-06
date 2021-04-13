import React, { Component } from "react";
import Child from "./Child";

interface IState{
    products:any[];
};

interface IProps{

};

class Parent extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            products : [
                {"name":"shirt1","brand":"niki","image":"https://rjs05.s3.ap-south-1.amazonaws.com/p1.jpg"},
                {"name":"shirt2","brand":"polo","image":"https://rjs05.s3.ap-south-1.amazonaws.com/p2.jpg"},
                {"name":"shirt3","brand":"American","image":"https://rjs05.s3.ap-south-1.amazonaws.com/p3.jpg"},
                {"name":"Pant1","brand":"niki","image":"https://rjs05.s3.ap-south-1.amazonaws.com/p4.jpg"},
                {"name":"Pant2","brand":"niki","image":"https://rjs05.s3.ap-south-1.amazonaws.com/p5.jpg"},
                {"name":"Pant3","brand":"niki","image":"https://rjs05.s3.ap-south-1.amazonaws.com/p6.jpg"}
            ]
        };
    };
    
    render(){
        return(
            <React.Fragment>
                    <Child arr = {this.state.products}></Child>
            </React.Fragment>
        )
    }
    
};

export default Parent;