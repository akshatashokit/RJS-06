import React, { Component } from "react";
import axios from "axios";


interface IState{
    countries : any[];
};

interface IProps{

};

class GetEx extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            countries : []
        }
    };


    componentDidMount(){
        axios.get("https://restcountries.eu/rest/v2/all").then((posRes)=>{
            console.log( posRes );
            const { data } = posRes;
            this.setState({
                countries : data
            })
        },(errRes)=>{
            console.log( errRes );
        });
    };

    render(){
        return(
            <React.Fragment>
                {JSON.stringify( this.state.countries ) }
            </React.Fragment>
        )
    }


};

export default GetEx;