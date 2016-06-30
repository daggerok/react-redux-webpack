import React, { Component } from 'react';

import { setVisibilityFilter } from '../../../store/todo/index';

import {
  subscribe,
  filter
} from '../../../store/todo';

export class FilterLink extends Component {
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
    return (
      <a href="#"
         style={{
           color: this.props.targetFilter === filter() ? 'red' : ''
         }}
         onClick={e => {
           e.preventDefault();
           setVisibilityFilter(this.props.targetFilter);
         }}>
        {this.props.children}
      </a>
    );
  }
}
