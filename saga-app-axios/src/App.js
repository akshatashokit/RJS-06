import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component{
    constructor(props){
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
    };
};
const receive = (state)=>{
    return{
      res : state
    }
};
const send = (dispatch)=>{
    return{
        my_fun : ()=>{ dispatch({type:"EMPLOYEES",value:{}}) } 
    }
};
export default connect(receive,send)(App);