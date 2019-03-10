import * as React from 'react';
import { render } from 'react-testing-library';
import { RecipePage } from './recipe';

describe('RecipePage', () => {
  it('should render', () => {
    const component = render(<RecipePage />);
    expect(component).toBeDefined();
  });
});
