import React, { Component } from "react";
import Subchild from "./Subchild";
interface IProps{
    key1:string;
    key2:number;
    key3:boolean;
};
interface IState{};

class Child extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <Subchild {...this.props}></Subchild>
            </React.Fragment>
        )
    }
};

export default Child;

