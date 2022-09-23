import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders first element with class `container`', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('container')
});
