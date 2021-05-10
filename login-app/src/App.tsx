import React, { Component } from "react";
import { connect } from "react-redux";
import loginAction from "./actions/LoginActions";

interface IState{

};

interface IProps{
    login_fn:any;
    login_status:any;
};

class App extends Component<IProps,IState>{
    email_ref = React.createRef<HTMLInputElement>();
    password_ref = React.createRef<HTMLInputElement>();

    constructor(props:IProps){
        super(props);
    };

    login = ()=>{
        const obj = {"email":this.email_ref.current?.value,
                     "password":this.password_ref.current?.value};
        this.props.login_fn(obj);         
    };


    render(){

      return(
        <React.Fragment>
            <label style={{marginRight:50}}>Email</label>
            <input type="email" ref={this.email_ref}></input>

            <br></br><br></br>
            <label style={{marginRight:50}}>Password</label>
            <input type="password" ref={this.password_ref}></input>

            <br></br><br></br>
            <button onClick={this.login}>Login</button>
      
            <br></br><br></br>
            {JSON.stringify(this.props.login_status)}
        </React.Fragment>
      )
    };
};

//subscription
const receive = (state:any)=>{
  return{
     login_status : state
  }
};

//dispatch
const send = (dispatch:any)=>{
    return{
      login_fn : (obj:any)=>{ dispatch(loginAction(obj)) }
    }
};

export default connect(receive,send)(App);