import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header and forecast', () => {
  render(<App />);
  expect(screen.getByText(/New York, NY/i)).toBeInTheDocument();
  expect(screen.getByText(/8-day forecast/i)).toBeInTheDocument();
});
