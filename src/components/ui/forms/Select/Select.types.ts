import type { SelectHTMLAttributes } from 'react';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    'children'
  > {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
}