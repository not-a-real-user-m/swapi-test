import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import RootScreen from '../screens/Root';
import NotFoundScreen from '../screens/NotFound';
import CharacterScreen from '../screens/Character';
import {rootLoader, characterLoader} from './loaders';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootScreen />,
    loader: rootLoader,
  },
  {
    path: '/:id',
    element: <CharacterScreen />,
    errorElement: <NotFoundScreen />,
    loader: characterLoader,
  }
]);
