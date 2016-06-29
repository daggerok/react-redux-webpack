/**
 * Created by mak on 6/29/16.
 */
import React from 'react';

export const TodoItem = ({
  onClick,
  todo
}) => (
  <li onClick={onClick}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
    {todo.id}) {todo.text}
  </li>
);
