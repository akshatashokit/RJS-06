import React, { Component } from "react";

interface IState{
    msg : string;
};

interface IProps{

};

class HomeScreen extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            msg : "ECommerce Project Soon....!"
        };
    };

    render(){
        return(
            <React.Fragment>
               <h1 style={{color:'red'}}>{this.state.msg}</h1> 
            </React.Fragment>
        )
    };
};

export default HomeScreen;