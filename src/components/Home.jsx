import React from 'react';
import { Link } from 'react-router';

import { Navbar } from './Navbar';
import { HomeStyles } from './todo/Todo';
import { styles } from './todo/Todo/TodoList';

export const Home = () => (
  <div>
    <Navbar/>
    <h2>Redux is awesome!</h2>
    <ul style={styles}>
      <li><Link to="todo">Todo</Link></li>
      <li><Link to="counter">Counter</Link></li>
      <li><Link to="/not-found-page">test not found page (404)</Link></li>
    </ul>
  </div>
);
