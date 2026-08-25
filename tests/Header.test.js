import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Header from '../src/components/Header';
import theme from '../src/theme';

function renderHeader() {
  return render(
    <ThemeProvider theme={theme}>
      <Header title="Biblioteca Musical" />
    </ThemeProvider>
  );
}

describe('Header', () => {
  test('renders the application title', () => {
    renderHeader();

    expect(screen.getByText('Biblioteca Musical')).toBeInTheDocument();
  });

  test('does not show extra content beyond the header title', () => {
    renderHeader();

    expect(screen.queryByText('Contenido extra')).not.toBeInTheDocument();
  });
});
