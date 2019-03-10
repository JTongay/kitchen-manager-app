import { TextField } from '@material-ui/core';
import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

interface TextInputProps extends FieldRenderProps<HTMLInputElement> {
  // The type of input (ex: text, password, number, etc.)
  type: string;
  // Assign an id to the input
  id?: string;
  // Label text
  label?: string;
  // Helper text to be displayed on the bottom
  helperText?: string;
  // Max length of the input
  maxLength?: string;
}

export const TextInput: React.SFC<TextInputProps> = ({
  input,
  meta,
  maxLength,
  id,
  label,
  type
}) => {
  const hasLocalError: boolean = !!meta.invalid;
  return (
    <TextField
      error={hasLocalError}
      label={meta.error || label}
      id={id}
      type={type}
      value={input.value}
      onChange={input.onChange}
      onBlur={input.onBlur}
      // maxLength={maxLength}
    />
  );
};
