import React, { Component } from 'react';

import { Navbar } from './Navbar';

import { store } from '../reducer';

export class Counter extends Component {
  constructor() {
    super();
    this.state = this.getState();
  }

  getState() {
    return { counter: store.getState() };
  }

  componentDidMount() {
    this.unsunscribe = store.subscribe(() => this.setState(this.getState()));
  }

  componentWillUnmount() {
    this.unsunscribe();
  }

  render() {
    return (
      <div>
        <Navbar/>
        <h3>hi!</h3>
        <h4>current counter: {this.state.counter}</h4>
        <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
      </div>
    );
  }
}
