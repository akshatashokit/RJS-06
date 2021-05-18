import  React, { Component } from "react";
import Child from "./Child";

interface IState{
   "key1" : string,
   "key2" : any
}

interface IProps{}

class App extends Component<IProps,IState>{


      //when ever we create the component, automatically "constructor" will execute
      //constructor will execute "only" once
      //in constructor generally we will receive "props" and we can initilize "state" also
      constructor(props:IProps){
       
        super(props);
        console.log("parent constructor");
        this.state = {
          "key1" : "Hello_1",
          "key2" : ""
        }
      };

      changeState = ()=>{
        this.setState({
          key1 : "AshokIT"
        })
      }


      shouldComponentUpdate(){
        return true;
      };


      //some times we may change the state, based on state & props
      //if you want to change state after constructor, then recomended life cycle hook is componentWillMount()
      //it's recomended to change state here by using setState() function
      //in general we will configure global parameters like "width" and "height" also
      componentWillMount(){
        console.log("parent componentWillMount");
        if(window.innerWidth<500){
          this.setState({
              key2 : window.innerWidth
          })
        }
      }




      //after componentWillMount() automatically render() life cycle hook will execute
      //this life cycle hook is "mandatory" life cycle hook
      //in general we will place "presentation" logic here
      //when ever change detected in state, automatically "render()" function will execute
      //never use "setState()" function here
      render(){
          console.log("parent render")
          return(
            <React.Fragment>
                {this.state.key1} <br></br><br></br>
                Inner Width....{this.state.key2}
                <br></br>
                <Child key1={this.state.key1}></Child>
                <br></br><br></br>
                <button onClick={this.changeState}>Change</button>
              </React.Fragment>
          )
      };

      

      //after render() life cycle hook, automatically componentDidMount() life cycle hook will execute
      //in general, in componentDidMount() will make rest api calls
      //in general, we will change state also here based on rest api response
      componentDidMount(){
          console.log("parent componentDidMount()");
      }

      componentWillReceiveProps(nextProps:any) {
        console.log("parent componentWillReceiveProps")
      };


};

export default App;