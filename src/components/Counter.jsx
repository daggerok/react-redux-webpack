import React, { Component } from 'react';

import { Navbar } from './Navbar';

import { store } from '../reducer';

export class Counter extends Component {
  constructor() {
    super();

    this.update = this.update.bind(this);

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
        <Navbar/>
        <h3>hi!</h3>
        <h4>current counter: {this.state.counter}</h4>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
}
