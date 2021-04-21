import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
// import SigninScreen from "./screens/SigninScreen";
// import RegisterScreen from "./screens/RegisterScreen";

interface IState{}

interface IProps{}

class App extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };

    render(){
      return(
        <React.Fragment>
            <Router>
                <NavLink to="/signin"  activeStyle={{color:"blue"}} exact={true} strict style={{marginRight:200}}>Signin</NavLink>
                <NavLink to="/register"  activeStyle={{color:"blue"}} exact={true} strict>Register</NavLink>
                
                <br></br><br></br>
                {/* <Route path="/signin" component={SigninScreen} exact={true} strict></Route>
                <Route path="/register" component={RegisterScreen} exact={true} strict></Route> */}
            </Router>
        </React.Fragment>
      )
    }
};

export default App;