import React, { Suspense } from 'react';
import './App.css';
import Routes from '../../Routes';
import ErrorBoundary from '../ErrorBoundary';
import CircleLoader from 'react-spinners/CircleLoader';

const App = () => (
  <div className='container'>
    <ErrorBoundary fallback={<h1>Failed to load App</h1>}>
      <Suspense
        fallback={<CircleLoader color='' loading={true} css='' size={50} />}
      >
        <Routes />
      </Suspense>
    </ErrorBoundary>
  </div>
);

export default App;
