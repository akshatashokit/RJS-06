import React, { Component } from "react";

interface IProps{
    key1 : (data:any)=>void;
};

interface IState{};

class Child extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <button onClick={ ()=>{this.props.key1("ReactJS With TypeScript")} }>Change</button>
            </React.Fragment>
        )
    }
};

export default Child;