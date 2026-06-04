import type { InputHTMLAttributes } from 'react';

export type InputVariant = 'default' | 'error';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: InputVariant;
}