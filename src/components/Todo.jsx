import React, { Component } from 'react';
import { Navbar } from './Navbar';

import { createStore } from 'redux';
import { todos, todosDecorator, ADD_TODO } from '../reducer/todo';
import { log } from '../util/index';

const store = createStore(todos);
const decoratedStore = createStore(todosDecorator);
export const HomeStyles = { listStyle: 'none' };
let id = 0;

export class Todo extends Component {
  constructor() {
    super();

    this.addTodo = this.addTodo.bind(this);
    this.updateState = this.updateState.bind(this);
    this.onEnter = this.onEnter.bind(this);

    store.subscribe(this.updateState);

    this.state = {
      size: store.getState().length,
      todos: store.getState(),
      input: 'test'
    };
  }

  addTodo() {
    store.dispatch({
      type: ADD_TODO,
      text: this.input.value,
      id: id++
    });
    this.input.value = '';
  }

  onEnter(event) {
    if (13 === event.charCode) {
      this.addTodo();
      this.input.value = '';
    }
  }

  updateState() {
    this.setState({
      size: store.getState().length,
      todos: store.getState()
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <input onKeyPress={this.onEnter}
               ref={node => {
                this.input = node;
               }}/>
        <h4>add todo</h4>
        <div class="container">
          <button onClick={this.addTodo}>save todo</button>
        </div>
        <div class="container">
          <h4>current todos: {this.state.size}</h4>
          <ul style={HomeStyles}>
            {this.state.todos.map((todo, index) => <li key={index}>{todo.id}) {todo.text}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}
