import type {
  FormHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from 'react';

export interface FormProps
  extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export interface FormFieldProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface FormActionsProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}