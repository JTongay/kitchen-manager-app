import * as React from 'react';
import { render } from 'react-testing-library';
import { TextInput } from './';

describe('Input Component', () => {
  it('should render', () => {
    const mockProps = {
      type: 'text',
      input: {
        name: 'test',
        value: '',
        onBlur: jasmine.createSpy('onBlur'),
        onChange: jasmine.createSpy('onChange'),
        onFocus: jasmine.createSpy('onFocus')
      },
      meta: {}
    };
    const component = render(<TextInput {...mockProps} />);
    expect(component).toBeDefined();
  });

  it('should render its value in the input', () => {
    const mockProps = {
      type: 'text',
      input: {
        name: 'test',
        value: 'initialValue',
        onBlur: jasmine.createSpy('onBlur'),
        onChange: jasmine.createSpy('onChange'),
        onFocus: jasmine.createSpy('onFocus')
      },
      meta: {}
    };
    const { getByValue } = render(<TextInput {...mockProps} />);
    expect(getByValue('initialValue').getAttribute('value')).toBe('initialValue');
  });
});
