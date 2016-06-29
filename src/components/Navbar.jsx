import React, { Component } from 'react';
import { Link } from 'react-router';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>{' '}
        <Link to="/todo">Todo</Link>{' '}
        <Link to="/counter">Counter</Link>{' '}
        <Link to="/not-found-page">404</Link>{' '}
      </div>
    );
  }
}
