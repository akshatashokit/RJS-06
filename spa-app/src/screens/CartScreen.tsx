import React, { Component } from "react";

interface IState{
    msg : string;
};

interface IProps{

};

class CartScreen extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            msg : "Payment Gateways Soon...!"
        };
    };

    render(){
        return(
            <React.Fragment>
               <h1 style={{color:'blue'}}>{this.state.msg}</h1> 
            </React.Fragment>
        )
    };
};

export default CartScreen;