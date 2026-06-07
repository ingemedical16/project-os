import clsx from 'clsx';

import { SkeletonProps } from './Skeleton.types';

import styles from './Skeleton.module.scss';

export function Skeleton({
  width,
  height,
  circle = false,
  className,
}: SkeletonProps) {
  return (
    <div
      className={clsx(
        styles.skeleton,
        circle && styles.circle,
        className,
      )}
      style={{
        width,
        height,
      }}
      aria-hidden="true"
    />
  );
}