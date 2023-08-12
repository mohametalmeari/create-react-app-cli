import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

test('renders learn react link', () => {
  render(
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
  const linkElement = screen.getByText(/todos/i);
  expect(linkElement).toBeInTheDocument();
});
