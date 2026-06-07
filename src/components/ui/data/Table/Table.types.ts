import type {
  HTMLAttributes,
  ReactNode,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react';

export interface TableProps
  extends TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

export interface TableSectionProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export interface TableRowProps
  extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

export interface TableHeadCellProps
  extends ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

export interface TableCellProps
  extends TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}