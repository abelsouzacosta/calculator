import React, { Component } from "react";
import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calculator extends Component {

  state = { ...initialState }

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
    // nao pode haver dois pontos dentro da calculadora
    if (digit === '.' && this.state.displayValue.includes(digit)) {
      return;
    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;

    const currentValue = clearDisplay ? '' : this.state.displayValue;

    const displayValue = currentValue + digit 

    this.setState({ displayValue, clearDisplay: false });

    if (digit !== '.') {
      const position = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[position] = newValue;
      this.setState({ values });
    }
  }

  /**
   * Reinicia a calculadora
   */
  resetCalculator() {
    this.setState({ ...initialState });
  }

  /**
   * Define a operação
   */
  setOperation(operation) {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === '=';
      const currentOperation = this.state.operation;

      const values = [...this.state.values];
      values[0] = eval(`${ values[0] } ${ currentOperation } ${ values[1] }`);
      values[1] = 0;

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      });
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={ this.state.displayValue }></Display>
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
