import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NINE FORTY AIR logo', () => {
  render(<App />);
  const linkElement = screen.getByText(/NINE FORTY AIR/i);
  expect(linkElement).toBeInTheDocument();
});
