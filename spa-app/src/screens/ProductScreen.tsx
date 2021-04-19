import React, { Component } from "react";

interface IState{
    msg : string;
};

interface IProps{

};

class ProductScreen extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            msg : "Garments Soon...!"
        };
    };

    render(){
        return(
            <React.Fragment>
               <h1 style={{color:'green'}}>{this.state.msg}</h1> 
            </React.Fragment>
        )
    };
};

export default ProductScreen;