import React, { Component } from 'react';

import { Navbar } from '../Navbar';
import { FilterLink } from './Todo/FilterLink';
import { TodoList } from './Todo/TodoList';

import { store } from '../../store/todo';
import {
  ADD_TODO,
  TOGGLE_TODO
} from '../../reducer/todo/todoType';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../../reducer/todo/todoState';

export const HomeStyles = { listStyle: 'none' };
let id = 0;

export class Todo extends Component {
  constructor() {
    super();

    this.addTodo = this.addTodo.bind(this);
    this.updateState = this.updateState.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.filterTodo = this.filterTodo.bind(this);

    store.subscribe(this.updateState);

    this.state = {
      size: this.size(),
      todos: this.todos(),
      input: 'test',
      filter: this.filter()
    };
  }

  todos() {
    return store.getState().todos;
  }

  size() {
    return this.todos().length;
  }

  filter() {
    return store.getState().filterTodo;
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

  filterTodo() {
    switch (this.state.filter) {
      case SHOW_ALL:
        return this.todos();
      case SHOW_ACTIVE:
        return this.todos().filter(todo => !todo.completed);
      case SHOW_COMPLETED:
        return this.todos().filter(todo => todo.completed);
      default:
        return this.todos();
    }
  }

  updateState() {
    this.setState({
      size: this.size(),
      todos: this.todos(),
      filter: this.filter()
    });
  }

  render() {
    return (
      <div>
        <Navbar/>

        <div class="container">
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
        </div>

        <div class="container">
          Show:{' '}
          <FilterLink filter={SHOW_ALL}
                      currentFilter={this.state.filter}>All</FilterLink>{' '}
          <FilterLink filter={SHOW_ACTIVE}
                      currentFilter={this.state.filter}>Active</FilterLink>{' '}
          <FilterLink filter={SHOW_COMPLETED}
                      currentFilter={this.state.filter}>Completed</FilterLink>{' '}
        </div>

        <TodoList size={this.state.size}
                  styles={HomeStyles}
                  todos={this.filterTodo()}/>
      </div>
    );
  }
}
