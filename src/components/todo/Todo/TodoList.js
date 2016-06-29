/**
 * Created by mak on 6/29/16.
 */
import React from 'react';

import { TodoItem } from './TodoItem';

export const TodoList = ({
  size,
  styles,
  todos
}) => (
  <div class="container">
    <h4>current todos: {size}</h4>
    <ul style={styles}>
      {todos.map((todo, index) =>
        <TodoItem todo={todo}
                  key={index}/>
      )}
    </ul>
  </div>
);
