import React, { Component } from "react";
import { History, LocationState } from "history";
interface IProps{
    history:History<LocationState>;
};
interface IState{};

class Screen1 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };

    myFun = ()=>{
         this.props.history.push("/screen2/111?qty=10");
    };



    render(){
        return(
            <React.Fragment>
                <button onClick={this.myFun}>Screen2</button> 
            </React.Fragment>
        )
    }

};

export default Screen1;

