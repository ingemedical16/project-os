import styles from './Accordion.module.scss';

import type { AccordionProps } from './Accordion.types';

export function Accordion({
  children,
}: AccordionProps) {
  return (
    <div className={styles.accordion}>
      {children}
    </div>
  );
}