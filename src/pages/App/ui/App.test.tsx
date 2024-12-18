
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App Component', () => {
  it('renders the heading', async () => {
    render(<App />);

    const text = await screen.findByTestId('AppTitle');

    expect(text).toBeInTheDocument();
  });
});