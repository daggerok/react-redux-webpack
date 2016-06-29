import React, { Component } from 'react';

import { Navbar } from '../Navbar';
import { AddTodo } from './Todo/AddTodo';
import { FilterLinkList } from './Todo/FilterLinkList';
import { TodoList } from './Todo/TodoList';

import {
  subscribe,
  filter
} from '../../store/todo';

export class Todo extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.state = this.getState();
    subscribe(this.updateState);
  }

  getState() {
    return { filter: filter() };
  }

  updateState() {
    this.setState(this.getState());
  }

  render() {
    return (
      <div>
        <Navbar/>

        <AddTodo/>

        <FilterLinkList filter={this.state.filter}/>

        <TodoList filter={this.state.filter}/>
      </div>
    );
  }
}
