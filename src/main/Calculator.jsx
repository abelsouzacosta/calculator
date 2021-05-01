import React, { Component } from "react";
import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";

export default class Calculator extends Component {

  constructor(props) {
    super(props);

    this.resetCalculator = this.resetCalculator.bind(this);
    this.addDigit = this.addDigit.bind(this);
    this.setOperation = this.setOperation.bind(this);
  }

  /**
   * Adiciona um digito no display
   */
  addDigit(digit) {
    console.log(`add ${ digit }`);
  }

  /**
   * Reinicia a calculadora
   */
  resetCalculator() {
    console.log(`limpar`);
  }

  /**
   * Define a operação
   */
  setOperation(operation) {
    console.log(`set ${ operation }`);
  }

  render() {
    return (
      <div className="calculator">
        <Display value={ 0 }></Display>
        <Button label="AC" click={ this.resetCalculator } triple ></Button>
        <Button label="/" click={ this.setOperation } operation ></Button>
        <Button label="7" click={ this.addDigit }></Button>
        <Button label="8" click={ this.addDigit }></Button>
        <Button label="9" click={ this.addDigit }></Button>
        <Button label="*" click={ this.setOperation } operation ></Button>
        <Button label="4" click={ this.addDigit }></Button>
        <Button label="5" click={ this.addDigit }></Button>
        <Button label="6" click={ this.addDigit }></Button>
        <Button label="-" click={ this.setOperation } operation ></Button>
        <Button label="1" click={ this.addDigit }></Button>
        <Button label="2" click={ this.addDigit }></Button>
        <Button label="3" click={ this.addDigit }></Button>
        <Button label="+" click={ this.setOperation } operation ></Button>
        <Button label="0" click={ this.addDigit } double ></Button>
        <Button label="." click={ this.addDigit }></Button>
        <Button label="=" click={ this.setOperation } operation ></Button>
      </div>
    )
  }
}
