import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 3design', () => {
  render(<App />);
  const el = screen.getByText(/3design/i);
  expect(el).toBeInTheDocument();
});
