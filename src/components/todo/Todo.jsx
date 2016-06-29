import React, { Component } from 'react';

import { Navbar } from '../Navbar';
import { AddTodo } from './Todo/AddTodo';
import { FilterLinkList } from './Todo/FilterLinkList';
import { TodoList } from './Todo/TodoList';

import {
  subscribe,
  todos,
  size,
  filter,
  filterTodos
} from '../../store/todo';

export const HomeStyles = { listStyle: 'none' };

export class Todo extends Component {
  constructor() {
    super();

    this.updateState = this.updateState.bind(this);
    this.state = this.getState();
    subscribe(this.updateState);
  }

  updateState() {
    this.setState(this.getState());
  }

  getState() {
    return {
      size: size(),
      todos: todos(),
      filter: filter()
    };
  }

  render() {
    return (
      <div>
        <Navbar/>

        <AddTodo/>

        <FilterLinkList filter={this.state.filter}/>

        <TodoList size={this.state.size}
                  styles={HomeStyles}
                  todos={filterTodos(this.state.filter)}/>
      </div>
    );
  }
}
