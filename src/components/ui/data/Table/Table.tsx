import styles from './Table.module.scss';

import type {
  TableCellProps,
  TableHeadCellProps,
  TableProps,
  TableRowProps,
  TableSectionProps,
} from './Table.types';

export function Table({
  children,
  className = '',
  ...props
}: TableProps) {
  return (
    <div className={styles.wrapper}>
      <table
        className={[styles.table, className].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

export function TableHeader({
  children,
  className = '',
  ...props
}: TableSectionProps) {
  return (
    <thead
      className={[styles.header, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </thead>
  );
}

export function TableBody({
  children,
  className = '',
  ...props
}: TableSectionProps) {
  return (
    <tbody
      className={[styles.body, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </tbody>
  );
}

export function TableRow({
  children,
  className = '',
  ...props
}: TableRowProps) {
  return (
    <tr
      className={[styles.row, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </tr>
  );
}

export function TableHeadCell({
  children,
  className = '',
  ...props
}: TableHeadCellProps) {
  return (
    <th
      className={[styles.headCell, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </th>
  );
}

export function TableCell({
  children,
  className = '',
  ...props
}: TableCellProps) {
  return (
    <td
      className={[styles.cell, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </td>
  );
}