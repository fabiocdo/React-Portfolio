import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Calculator extends Component {

  constructor(props){
    super(props);

    this.state = {
      number1: '',
      number2: '',
      operation: ''
    }
  }

  render() {
    const { number1, number2, result } = this.state;
    
    return(
      <>
        <div align="center">
          <input type="text" className="calculator-input" onChange={this.setFirstNumber} value={number1}/>
          <input type="text" className="calculator-input" onChange={this.setSecondNumber} value={number2}/>
        </div>
        <br/>
        <div align="center">
          <Button variant="info" className="calculator-operation-btn" onClick={this.calculate} value="+">+</Button>
          <Button variant="info" className="calculator-operation-btn" onClick={this.calculate} value="-">-</Button>
          <Button variant="info" className="calculator-operation-btn" onClick={this.calculate} value="/">/</Button>
          <Button variant="info" className="calculator-operation-btn" onClick={this.calculate} value="*">*</Button>
          <Button variant="danger" className="calculator-operation-btn" onClick={this.clear}>C</Button>
        </div>
        <div align="center">
          <p>Resultado: {result}</p>
        </div>
      </>
    );
  }

  setFirstNumber = (arg) => {  
    const number1 = arg.target.value;

    this.setState({
      number1
    });
  }

  setSecondNumber = (arg) => {
    const number2 = arg.target.value;

    this.setState({
      number2
    })
  }

  calculate = (arg) => {
    const { number1, number2 } = this.state;
    const operation = arg.target.value;
    
    switch(operation){

      case '+':
        this.setState({
          result: parseFloat(number1) + parseFloat(number2) 
        })
        break;

      case '-':
        this.setState({
          result: parseFloat(number1) - parseFloat(number2)
        })
        break;
        
      case '/':
        this.setState({
          result: parseFloat(number1) / parseFloat(number2)
        })
        break;

      case '*':
        this.setState({
          result: parseFloat(number1) * parseFloat(number2)
        })
        break;

      default:
        console.log("Default");
    }

  }

  clear = () =>{

    this.setState({
      number1: '',
      number2: '',
      result: '',
    })
  }
  
}
export default Calculator;