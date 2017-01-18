import React from "react";
import Screen from "./screen.js";
import Numbers from "./numbers.js";
import Operators from "./operators.js";
import Actions from "./actions.js";
import calculator from "../helpers.js"

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screen: '',
    };

   this.handleClick = this.handleClick.bind(this)
   this.handleClickReset = this.handleClickReset.bind(this)
   this.getResult = this.getResult.bind(this)
   }

  handleClick(e){
    const oldScreen = this.state.screen
    const newScreen = this.state.screen + e.currentTarget.textContent
    this.setState({ screen:newScreen })
  }

  handleClickReset(){
    this.setState({screen:''})
  }

  getResult(){
    const calcul = this.state.screen  
    const result = calculator(calcul)

    this.setState({screen: result})


  }

  render() {

    return (
      <div className="container">
        <Screen value={this.state.screen}/>
        <br/>
        <Numbers handleClick={this.handleClick}/>
        <br/>
        <Operators handleClick={this.handleClick}/>
        <br/>
        <Actions handleClickReset={this.handleClickReset} getResult={this.getResult}/>
      </div>
    );
}

}


