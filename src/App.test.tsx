import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Reserve a Car form', () => {
  render(<App />);
  const formHeader = screen.getByText(/Reserve a Car/i);
  expect(formHeader).toBeInTheDocument();
});

test('renders Available Cars section', () => {
  render(<App />);
  const availableCarsHeader = screen.getByText(/Available Cars/i);
  expect(availableCarsHeader).toBeInTheDocument();
});

