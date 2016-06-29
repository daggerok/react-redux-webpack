/**
 * Created by mak on 6/29/16.
 */
import React from 'react';

import { TodoItem } from './TodoItem';

import {
  filterTodos
} from '../../../store/todo';

export const styles = { listStyle: 'none' };

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
