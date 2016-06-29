/**
 * Created by mak on 6/29/16.
 */
import React from 'react';

import { completeTodo } from '../../../store/todo';

export const TodoItem = ({ todo }) => (
  <li onClick={() => completeTodo(todo.id)}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
    {todo.id}) {todo.text}
  </li>
);
