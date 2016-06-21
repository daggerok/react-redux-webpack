import React, { Component } from 'react';
import { store } from '../reducer';

export class Home extends Component {
  constructor() {
    super();

    store.subscribe(this.update);

    this.state = {
      counter: this.value()
    };
  }

  value = () => store.getState();

  update = () => this.setState({counter: this.value()});

  onIncrement = () => store.dispatch({type: 'INCREMENT'});

  onDecrement = () => store.dispatch({type: 'DECREMENT'});

  render() {
    return (
      <div>
        <h3>hi</h3>
        <h4>current counter: {this.state.counter}</h4>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}
