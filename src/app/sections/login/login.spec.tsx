import * as React from 'react';
import { render } from 'react-testing-library';
import { LoginPage } from './login';

describe('LoginPage', () => {
  it('should render', () => {
    const component = render(<LoginPage />);
    expect(component).toBeDefined();
  });
});
