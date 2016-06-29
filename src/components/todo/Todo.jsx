import React, { Component } from 'react';
import { Navbar } from '../Navbar';

import { store } from '../../store/todo';
import { ADD_TODO } from '../../reducer/todo';
import { TOGGLE_TODO } from '../../reducer/todo/todoType';

export const HomeStyles = { listStyle: 'none' };
let id = 0;

export class Todo extends Component {
  constructor() {
    super();

    this.addTodo = this.addTodo.bind(this);
    this.updateState = this.updateState.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.completeTodo = this.completeTodo.bind(this);

    store.subscribe(this.updateState);

    this.state = {
      size: this.size(),
      todos: this.todos(),
      input: 'test'
    };
  }

  todos() {
    return store.getState().todos;
  }

  size() {
    return this.todos().length;
  }

  addTodo() {
    if (this.input.value) {
      store.dispatch({
        type: ADD_TODO,
        text: this.input.value,
        id: id++
      });
      this.input.value = '';
    }
  }

  onEnter(event) {
    if (13 === event.charCode) {
      this.addTodo();
      this.input.value = '';
    }
  }

  completeTodo(id) {
    store.dispatch({
      type: TOGGLE_TODO,
      id: id
    });
  }

  updateState() {
    this.setState({
      size: this.size(),
      todos: this.todos()
    });
  }

  render() {
    return (
      <div>
        <Navbar/>

        <h4>add todo</h4>

        <div class="form-group">
        <label htmlFor="todo-text">enter todo text</label>
        <input id="todo-text"
               class="form-control"
               onKeyPress={this.onEnter}
               ref={node => {
                this.input = node;
               }}/>
        </div>

        <div class="container">
          <button class="btn btn-primary"
                  onClick={this.addTodo}>save todo</button>
        </div>

        <div class="container">
          <h4>current todos: {this.state.size}</h4>
          <ul style={HomeStyles}>
            {this.state.todos.map((todo, index) => {
              return (
                <li onClick={() => this.completeTodo(todo.id)}
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                    key={index}>
                  {todo.id}) {todo.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
