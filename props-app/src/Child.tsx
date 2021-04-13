import React, { Component } from "react";

interface IProps{
    arr : any[]
};

interface IState{

};

class Child extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <table>
                    <tr>
                        <th>SNO</th>
                        <th>P_ID</th>
                        <th>P_NAME</th>
                        <th>IMAGE</th>
                    </tr>
                    {this.props.arr.map((element,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.name}</td>
                            <td>{element.brand}</td>
                            <td><img width="100" height="50" src={element.image}></img></td>
                        </tr>
                    ))}                         
                </table>
            </React.Fragment>
        )
    };
};

export default Child;