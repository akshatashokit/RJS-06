//import Component
//Component is the predefined "class"
//Component class used to create the "react component"
import { Avatar, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import React, { Component } from "react";


//state
//state is the predefined object
//state used to represent the component data
//we will declare state by using interfaces
interface IState{
    key1 : string;
    num : number;
    bool : boolean;
    mern : any;
    products : any[];  
};


//props
//props also predefined object
//props used to receive the data from another component
//we will define props by using interfaces
interface IProps{}

//create component
class Example1 extends Component<IProps,IState>{
        //receive the props at booting time
        //only constructor will execute at booting time
        constructor(props:IProps){
            super(props);

            //define the state
            this.state = {
                key1 : "Hello_1",
                num : 100,
                bool : true,
                mern : {"sub_1":"ReactJS","sub_2":"NodeJS","sub_3":"MongoDB"},
                products : [
                        {"name":"Shirt","brand":"Niki","price":100,"qty":10,"rating":4,"image":"https://rjs05.s3.ap-south-1.amazonaws.com/p1.jpg"},
                        
                        {"name":"Shirt","brand":"Polo","price":100,"qty":10,"rating":5,"image":"https://rjs05.s3.ap-south-1.amazonaws.com/p2.jpg"},
                        
                        {"name":"Shirt","brand":"American","price":100,"qty":10,"rating":3,"image":"https://rjs05.s3.ap-south-1.amazonaws.com/p3.jpg"},
                        
                        {"name":"Pant","brand":"Niki","price":100,"qty":10,"rating":4,"image":"https://rjs05.s3.ap-south-1.amazonaws.com/p4.jpg"},
                       
                        {"name":"Pant","brand":"Niki","price":100,"qty":10,"rating":4,"image":"https://rjs05.s3.ap-south-1.amazonaws.com/p5.jpg"},
                        
                        {"name":"Pant","brand":"Niki","price":100,"qty":10,"rating":4,"image":"https://rjs05.s3.ap-south-1.amazonaws.com/p6.jpg"}]
            };

        };

        render(){
            return(
                <React.Fragment>
                    <Container fixed>

                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>SNO</TableCell>
                                        <TableCell>NAME</TableCell>
                                        <TableCell>BRAND</TableCell>
                                        <TableCell>PRICE</TableCell>
                                        <TableCell>QTY</TableCell>
                                        <TableCell>RATING</TableCell>
                                        <TableCell>IMAGE</TableCell>
                                    </TableRow>
                                </TableHead>
                                {this.state.products.map((element,index)=>(
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{index+1}</TableCell>
                                            <TableCell>{element.name}</TableCell>
                                            <TableCell>{element.brand}</TableCell>
                                            <TableCell>{element.price}</TableCell>
                                            <TableCell>{element.qty}</TableCell>
                                            <TableCell>{element.rating}</TableCell>
                                            <TableCell><Avatar src={element.image}></Avatar></TableCell>
                                        </TableRow>
                                    </TableBody>
                                ))}
                            </Table>
                        </TableContainer>



                        <Typography variant="h4" color="primary">
                            {this.state.mern.sub_1}....{this.state.mern.sub_2}....{this.state.mern.sub_3}
                        </Typography>



                        <Typography variant="h3" color="secondary">
                            {JSON.stringify(this.state.bool)}
                        </Typography>


                        <Typography variant="h2" color="primary">
                            {this.state.num}
                        </Typography>


                        <Typography variant="h1" color="secondary">
                            {this.state.key1}
                        </Typography>
                    </Container>
                </React.Fragment>
            )
        };


};

//export the component
export default Example1;
