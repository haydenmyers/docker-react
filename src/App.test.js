import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('second test that should fail', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/this should be wrong/i);
  expect(linkElement).toBeInTheDocument();
});