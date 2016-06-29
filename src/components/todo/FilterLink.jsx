import React, { Component } from 'react';
import { Navbar } from '../Navbar';
import { store } from '../../store/todo/index';
import { SET_VISIBILITY_FILTER } from '../../reducer/todo/todoType';

export const FilterLink = ({
  filter,
  children
}) => {
  return (
    <a href="#"
       onClick={e => {
         e.preventDefault();
         store.dispatch({
           type: SET_VISIBILITY_FILTER,
           filter
         });
       }}>{children}</a>
  );
};
