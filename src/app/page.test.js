import { render, screen } from '@testing-library/react';
import Home from './page';

test('Element with "src/app/page.js" should exist', async () => {
  render(<Home />);

  const element = screen.getByText('src/app/page.js');
  expect(element).toBeDefined();
});
