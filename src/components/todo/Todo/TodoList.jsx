/**
 * Created by mak on 6/29/16.
 */
import React, { Component } from 'react';

import { TodoItem } from './TodoItem';

import {
  filterTodos,
  subscribe,
  filter
} from '../../../store/todo';

export const styles = { listStyle: 'none' };

export class TodoList extends Component {
  constructor() {
    super();
    this.state = this.getState();
    this.reRender = () => {
      this.setState(this.getState());
      this.forceUpdate();
    };
  }

  getState() {
    return { filter: filter() };
  }

  componentDidMount() {
    this.unsubscribe = subscribe(() => this.reRender());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const todos = filterTodos(filter());

    return (
      <div class="container">
        <h4>current todos: {todos.length}</h4>
        <ul style={styles}>
          {todos.map((todo, index) =>
            <TodoItem todo={todo}
                      key={index}/>
          )}
        </ul>
      </div>
    );
  }
}

/*
export const TodoList = ({ filter }) => (
  <div class="container">
    <h4>current todos: {filterTodos(filter).length}</h4>
    <ul style={styles}>
      {filterTodos(filter).map((todo, index) =>
        <TodoItem todo={todo}
                  key={index}/>
      )}
    </ul>
  </div>
);
*/
