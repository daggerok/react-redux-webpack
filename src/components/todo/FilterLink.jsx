import React, { Component } from 'react';
import { Navbar } from '../Navbar';
import { store } from '../../store/todo/index';
import { SET_VISIBILITY_FILTER } from '../../reducer/todo/todoType';

export const FilterLink = ({
  filter,
  currentFilter,
  children
}) => {
  return (
    <a href="#"
       class={filter === currentFilter ? 'hidden' : ''}
       onClick={e => {
         e.preventDefault();
         store.dispatch({
           type: SET_VISIBILITY_FILTER,
           filter
         });
       }}>{children}</a>
  );
};
