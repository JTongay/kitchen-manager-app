import { FormControlLabel, Radio } from '@material-ui/core';
import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

interface RadioProps extends FieldRenderProps<HTMLInputElement> {
  // The label text to be displayed
  label?: string;
  // The placement of the radio label
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  // The color of the radio
  color?: 'primary' | 'secondary' | 'default';
}

export const RadioInput: React.SFC<RadioProps> = ({
  color,
  meta,
  input,
  label,
  labelPlacement
}) => {
  return (
    <FormControlLabel
      value={input.value}
      control={<Radio color={color || 'primary'} />}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};
