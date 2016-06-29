import React from 'react';
import { Link } from 'react-router';

import { Navbar } from './Navbar';
import { HomeStyles } from './todo/Todo';

export const Home = () => (
  <div>
    <Navbar/>
    <h2>Redux is awesome!</h2>
    <ul style={HomeStyles}>
      <li><Link to="todo">Todo</Link></li>
      <li><Link to="counter">Counter</Link></li>
    </ul>
  </div>
);
