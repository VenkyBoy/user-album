import React from 'react';
import { render } from '@testing-library/react';
import PageNotFound from './PageNotFound';

describe('PageNotFound component', () => {
  it('renders without errors', () => {
    const { getByText } = render(<PageNotFound />);
    expect(getByText('404')).toBeInTheDocument();
    expect(getByText('Page not found')).toBeInTheDocument();
    expect(getByText('We are sorry but the page you are looking for does not exist.')).toBeInTheDocument();
  });

  it('displays the correct heading', () => {
    const { getByText } = render(<PageNotFound />);
    expect(getByText('404')).toBeInTheDocument();
  });

  it('displays the correct subheading', () => {
    const { getByText } = render(<PageNotFound />);
    expect(getByText('Page not found')).toBeInTheDocument();
  });

  it('displays the correct message', () => {
    const { getByText } = render(<PageNotFound />);
    expect(getByText('We are sorry but the page you are looking for does not exist.')).toBeInTheDocument();
  });
});
