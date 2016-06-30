import React from 'react';

import { Navbar } from '../Navbar';
import { AddTodo } from './Todo/AddTodo';
import { FilterLinkList } from './Todo/FilterLinkList';
import { TodoList } from './Todo/TodoList';
// 2:
export const Todo = () => (
  <div>
    <Navbar/>
    <AddTodo/>
    <FilterLinkList/>
    <TodoList/>
  </div>
);

/*
import {
  subscribe,
  filter
} from '../../store/todo';
// 1:
export class Todo extends Component {
  constructor() {
    super();
    this.state = this.getState();
  }

  getState() {
    return { filter: filter() };
  }

  componentDidMount() {
    this.unsubscribe = subscribe(() => this.setState(this.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <Navbar/>

        <AddTodo/>

        <FilterLinkList/>

        <TodoList/>
      </div>
    );
  }
}
*/

/* // 0:
export class Todo extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.state = this.getState();
  }

  componentWillMount() {
    this.unsubscribe = subscribe(this.updateState);
  }

  updateState() {
    this.setState(this.getState());
  }

  render() {
    return (
      <div>
        <Navbar/>

        <AddTodo/>

        <FilterLinkList/>

        <TodoList/>
      </div>
    );
  }
}
*/
