import React, { Component } from "react";

interface IProps{
    key1:string;
    key2:number;
    key3:boolean;
};

interface IState{

};

class Subchild extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.key1}</h1>
                <h1>{this.props.key2}</h1>
                <h1>{ JSON.stringify(this.props.key3) }</h1>
            </React.Fragment>
        )        
    }
};

export default Subchild;

