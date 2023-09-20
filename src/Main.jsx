import React, {Component} from "react";
import "./Main.css";
import Button from './UI/Button'


class Main extends Component {
  state = {
    counter: 0,
  };

  addFiveHandler = () => {
    this.setState({
      counter:this.state.counter + 5,
    });
  };
  addOneHandler = () => {
    this.setState({
      counter:this.state.counter + 1,
    });
  };

  resetHandler = () => {
    this.setState({
    counter:0,
    });
  };

  removeFiveHandler = () => {
    this.setState({
      counter:this.state.counter -5,
    });
  };

  removeOneHandler = () => {
    this.setState({
      counter:this.state.counter -1,
    });
  };

  render (){
    let circleClass = ' ' ;

    if (this.state.counter === 0) {
        circleClass = 'none';

    } else if (this.state.counter % 2 === 0) {
        circleClass = "red";
        
    } else {
        circleClass = 'yellow';
        
    }
   
    return (
      <div className="main">
        <div className={circleClass}>
          <h1>{this.state.counter}</h1>
      
        </div>
        <div className="button">
          <Button click={this.addFiveHandler} text="Add 5"></Button>
          <Button click={this.addOneHandler} text="Add 1"></Button>
          <Button  click={this.resetHandler} text="Reset"></Button>
          <Button  click={this.removeFiveHandler} text="Remove 5"></Button>
          <Button click={this.removeOneHandler}  text="Remove 1"></Button> 
        </div>
      </div>
    );
  }  
    

}

export default Main;
