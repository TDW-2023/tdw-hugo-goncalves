import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from './page';

test('Element with "src/app/page.js" should exist', async () => {
  render(<Home />);

  const element = screen.getByText('src/app/page.js');
  expect(element).toBeDefined();
});

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
