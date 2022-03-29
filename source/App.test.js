import { render, screen } from '@testing-library/react';
import App from './App';

test('renders editor window', () => {
  render(<App />);
  const linkElement = screen.getByText(/Editor/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders preview window', () => {
  render(<App />);
  const options = {
    selector: 'h3',
    ignore: 'script, style, textarea',
  }
  const linkElement = screen.getByText(/Previewer/i, options);
  expect(linkElement).toBeInTheDocument();
});
