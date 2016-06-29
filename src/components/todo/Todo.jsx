import React, { Component } from 'react';

import { Navbar } from '../Navbar';
import { AddTodo } from './Todo/AddTodo';
import { FilterLinkList } from './Todo/FilterLinkList';
import { TodoList } from './Todo/TodoList';

import { store } from '../../store/todo';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../../reducer/todo/todoState';

export const HomeStyles = { listStyle: 'none' };

export class Todo extends Component {
  constructor() {
    super();

    this.updateState = this.updateState.bind(this);
    this.filterTodo = this.filterTodo.bind(this);

    store.subscribe(this.updateState);

    this.state = {
      size: this.size(),
      todos: this.todos(),
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

        <AddTodo />

        <FilterLinkList filter={this.state.filter} />

        <TodoList size={this.state.size}
                  styles={HomeStyles}
                  todos={this.filterTodo()}/>
      </div>
    );
  }
}
