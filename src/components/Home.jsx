import React, { Component } from 'react';
import { store } from '../reducer';

export class Home extends Component {
  constructor() {
    super();

    this.update = this.update.bind(this);
    // this.onIncrement = this.onIncrement.bind(this);
    // this.onDecrement = this.onDecrement.bind(this);

    store.subscribe(this.update);

    this.state = { counter: store.getState() };
  }

  update() {
    this.setState({ counter: store.getState() });
  }

  onIncrement() {
    store.dispatch({ type: 'INCREMENT' });
  }

  onDecrement() {
    store.dispatch({ type: 'DECREMENT' });
  }

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
