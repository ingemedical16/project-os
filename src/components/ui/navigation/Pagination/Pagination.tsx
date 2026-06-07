'use client';

import clsx from 'clsx';

import type { PaginationProps } from './Pagination.types';

import styles from './Pagination.module.scss';

function getPaginationItems(
  page: number,
  totalPages: number,
  siblingCount: number,
): Array<number | 'ellipsis'> {
  const totalVisibleItems = siblingCount * 2 + 5;

  if (totalPages <= totalVisibleItems) {
    return Array.from(
      { length: totalPages },
      (_, index) => index + 1,
    );
  }

  const leftSibling = Math.max(page - siblingCount, 1);
  const rightSibling = Math.min(page + siblingCount, totalPages);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, index) => index + 1,
    );

    return [...leftRange, 'ellipsis', totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, index) =>
        totalPages - (3 + siblingCount * 2) + 1 + index,
    );

    return [1, 'ellipsis', ...rightRange];
  }

  return [
    1,
    'ellipsis',
    ...Array.from(
      { length: rightSibling - leftSibling + 1 },
      (_, index) => leftSibling + index,
    ),
    'ellipsis',
    totalPages,
  ];
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
}: PaginationProps) {
  const pages = getPaginationItems(
    page,
    totalPages,
    siblingCount,
  );

  const isFirstPage = page <= 1;
  const isLastPage = page >= totalPages;

  return (
    <nav
      className={clsx(styles.pagination, className)}
      aria-label="Pagination"
    >
      <button
        type="button"
        className={styles.button}
        disabled={isFirstPage}
        onClick={() => onPageChange(page - 1)}
      >
        ‹
      </button>

      {pages.map((item, index) =>
        item === 'ellipsis' ? (
          <span
            key={`ellipsis-${index}`}
            className={styles.ellipsis}
          >
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            className={clsx(
              styles.button,
              item === page && styles.active,
            )}
            aria-current={item === page ? 'page' : undefined}
            onClick={() => onPageChange(item)}
          >
            {item}
          </button>
        ),
      )}

      <button
        type="button"
        className={styles.button}
        disabled={isLastPage}
        onClick={() => onPageChange(page + 1)}
      >
        ›
      </button>
    </nav>
  );
}