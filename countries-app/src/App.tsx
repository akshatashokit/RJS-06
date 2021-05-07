import React, { Component } from "react";

import { connect } from "react-redux";
import getCountries from "./actions/ContriesActions";

interface IState{

}

interface IProps{
    my_fun:any;
    res:any;
};

class App extends Component<IProps,IState>{
    constructor(props:IProps){
      super(props);
    };
    componentDidMount(){
        this.props.my_fun();
    };
    render(){
      return(
        <React.Fragment>
            {JSON.stringify(this.props.res)}
        </React.Fragment>
      )
    }
};

//subscription
const receive = (state:any)=>{
    return{
      res : state
    }
};





//dispatch
const send = (dispatch:any)=>{
    return{
      my_fun : ()=>{ dispatch( getCountries() ) }
    }
}

export default connect(receive,send)(App);