import React, { Component } from "react";

interface IState{
    name : string;
    brand : string;
    price : number;
    qty : number;
    product : any;
    products : any[]
};

interface IProps{

};

class StateEx1 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            name : "Shirt",
            brand : "Niki",
            price : 100,
            qty : 10,
            product : {"p_id":111,"p_name":"Pant","p_cost":10000},
            products :[{"p_id":111,"p_name":"p_one","p_cost":10000},
                        {"p_id":222,"p_name":"p_two","p_cost":20000},
                        {"p_id":333,"p_name":"p_three","p_cost":30000},
                        {"p_id":444,"p_name":"p_four","p_cost":40000},
                        {"p_id":555,"p_name":"p_five","p_cost":50000}]
        };
    };
    render(){
        return(
            <React.Fragment>
                 <table>
                     <tr>
                         <th>SNO</th>
                         <th>P_ID</th>
                         <th>P_NAME</th>
                         <th>P_COST</th>
                     </tr>
                     {this.state.products.map((element,index)=>(
                         <tr key={index}>
                             <td>{index+1}</td>
                             <td>{element.p_id}</td>
                             <td>{element.p_name}</td>
                             <td>{element.p_cost}</td>
                         </tr>
                     ))}
                 </table>
                <h1>{this.state.product.p_id}....{this.state.product.p_name}...{this.state.product.p_cost}</h1>
                <h1>Qty....{this.state.qty}</h1>
                <h1>Price....{this.state.price}</h1>
                <h1>Brand....{this.state.brand}</h1>
                <h1>Name....{this.state.name}</h1>
            </React.Fragment>
        )
    }
};

export default StateEx1;