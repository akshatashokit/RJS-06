import { Component } from "react";

interface IState{}

interface IProps{}

class Mean extends Component<IState,IProps>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <h1>MEAN Stack Soon....!</h1>
        )
    };
};

export default Mean;