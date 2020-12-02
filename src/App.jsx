import React from 'react';
import './App.scss';
import { FindMovie } from './FindMovie/FindMovie';
import { MovieList } from './MovieList/MovieList';

export const App = () => (
  <>
    <MovieList />
    <FindMovie />
  </>
);
