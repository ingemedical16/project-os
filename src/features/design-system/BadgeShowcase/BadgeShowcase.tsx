import { Badge } from '@/components/ui';

import styles from './BadgeShowcase.module.scss';

export function BadgeShowcase() {
  return (
    <section className={styles.showcase}>
      <h2>Badge Primitive</h2>

      <div className={styles.row}>
        <Badge>Default</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="success">Active</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="danger">Blocked</Badge>
      </div>
    </section>
  );
}