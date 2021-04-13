import React, { Component } from "react";

interface IProps{
    strData:string;
    booleanData:boolean;
    numberData:number;
};

interface IState{

};

class Component2 extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };

    render(){
        return(
            <React.Fragment>
                    <h1>{this.props.strData}</h1>
                    <h1>{ JSON.stringify( this.props.booleanData ) }</h1>
                    <h1>{this.props.numberData}</h1>
            </React.Fragment>
        )
    }

};

export default Component2;