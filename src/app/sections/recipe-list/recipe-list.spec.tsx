import * as React from 'react';
import { render } from 'react-testing-library';
import { RecipeListPage } from './recipe-list';

describe('RecipeListPage', () => {
  it('should render', () => {
    const component = render(<RecipeListPage />);
    expect(component).toBeDefined();
  });
});
