import React, { Component } from "react";
import Component2 from "./Component2";
interface IState{
    key1:string;
    key2:boolean;
    key3:number;
};
interface IProps{
};
class Component1 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            key1 : "Hello",
            key2 : true,
            key3 : 100
        }
    };
    render(){
        return(
            <React.Fragment>
                <Component2 strData={this.state.key1}
                            booleanData={this.state.key2}
                            numberData={this.state.key3}></Component2>
            </React.Fragment>
        )
    }
};

export default Component1;


