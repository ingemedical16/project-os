import { EmptyState } from '../../display/EmptyState';
import {
  Table,
  TableBody,
  TableCell,
  TableHeadCell,
  TableHeader,
  TableRow,
} from '../Table';

import type { DataTableProps } from './DataTable.types';

import styles from './DataTable.module.scss';

export function DataTable<TData extends object>({
  columns,
  data,
  getRowKey,
  emptyTitle = 'No data',
  emptyDescription = 'There is no data to display.',
}: DataTableProps<TData>) {
  if (data.length === 0) {
    return (
      <div className={styles.emptyState}>
        <EmptyState
          title={emptyTitle}
          description={emptyDescription}
        />
      </div>
    );
  }

  return (
    <div className={styles.dataTable}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHeadCell key={String(column.key)}>
                {column.header}
              </TableHeadCell>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={getRowKey(row, rowIndex)}>
              {columns.map((column) => (
                <TableCell key={String(column.key)}>
                  {column.render
                    ? column.render(row)
                    : String(row[column.key as keyof TData] ?? '')}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}