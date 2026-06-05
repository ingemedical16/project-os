import type { ChangeEvent } from 'react';

export interface RadioGroupOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  options: RadioGroupOption[];
  value?: string;
  label?: string;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
}