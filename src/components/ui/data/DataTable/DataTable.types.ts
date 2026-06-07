import type { ReactNode } from 'react';

export interface DataTableColumn<TData> {
  key: keyof TData | string;
  header: ReactNode;
  render?: (row: TData) => ReactNode;
}

export interface DataTableProps<TData> {
  columns: DataTableColumn<TData>[];
  data: TData[];
  getRowKey: (row: TData, index: number) => string;
  emptyTitle?: string;
  emptyDescription?: string;
}