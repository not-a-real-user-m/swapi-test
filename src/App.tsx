import {RouterProvider} from 'react-router-dom';
import ErrorBoundary from './primitives/ErrorBoundary';
import {router} from './router';
import {CssBaseline} from '@mui/material';

export default function App() {
  return (
    <>
      <CssBaseline />

      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </>
  );
}
