import React, { Component } from "react";

interface IProps{}
interface IState{}


class SigninScreen extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };

    myFun = (event:any)=>{
        event.preventDefault();
        console.log("Hello");
    };


    render(){
        return(
            <React.Fragment>
                <div>
                    <form className="form" onSubmit={this.myFun}>

                        <div>
                            <h1>Signin</h1>
                        </div>

                        <div>
                            <label>Email Addreess</label>
                            <input type="email"></input>
                        </div>

                        <div>
                            <label>Password</label>
                            <input type="password"></input>
                        </div>

                        <div>
                            <label></label>
                            <input type="submit" value="Sign In"></input>
                        </div>

                        <div>
                            <label></label>
                            <div>New User ? {' '} <a href="#">Create New Account</a></div>
                        </div>

                    </form>
                </div>
            </React.Fragment>
        )
    }


};

export default SigninScreen;
