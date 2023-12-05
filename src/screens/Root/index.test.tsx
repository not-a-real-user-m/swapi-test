import React from 'react';
import {render, screen} from '@testing-library/react';
import RootScreen from './index';
import {createBrowserRouter, defer, RouterProvider} from 'react-router-dom';
import {IAllCharactersResponse} from '../../api/swapi/types';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootScreen/>,
    loader: async () => {
      return defer({
        allCharactersData: new Promise<IAllCharactersResponse>((resolve) => {
          resolve({
            count: 1,
            next: null,
            previous: null,
            results: [{
              name: 'Test',
              birth_year: '0BBY',
              created: "",
              edited: "",
              eye_color: "n/a",
              films: [],
              gender: "n/a",
              hair_color: "n/a",
              height: "n/a",
              homeworld: "n/a",
              mass: "0",
              skin_color: "gold",
              species: [],
              starships: [],
              url: "",
              vehicles: [],
            }],
          });
        })
      });
    }
  },
]);

const infiniteLoadingRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootScreen/>,
    loader: async () => {
      return defer({
        allCharactersData: new Promise(() => {})
      });
    }
  },
]);

beforeAll(() => {
  window.scrollTo = () => {};
});

test('render search field', () => {
  render(<RouterProvider router={router} />);
  const search = screen.getByLabelText(/Search your hero/i);
  expect(search).toBeInTheDocument();
});

test('render list', async () => {
  render(<RouterProvider router={router} />);
  const cards = await screen.findAllByTestId(/CHARACTER_CARD_/i);
  expect(cards).toHaveLength(1);
});

test('render loading state', async () => {
  render(<RouterProvider router={infiniteLoadingRouter} />);
  const stubs = await screen.findAllByTestId('CHARACTER_STUB');
  expect(stubs).toHaveLength(10);
});
