import {
  Card,
  Divider,
} from '@/components/ui';

import styles from './DividerShowcase.module.scss';

export function DividerShowcase() {
  return (
    <section className={styles.showcase}>
      <h2>Divider Primitive</h2>

      <Card>
        <h3>Horizontal Divider</h3>

        <p>
          Content above divider.
        </p>

        <Divider />

        <p>
          Content below divider.
        </p>
      </Card>

      <Card>
        <h3>Vertical Divider</h3>

        <div className={styles.verticalExample}>
          <span>Left</span>

          <Divider orientation="vertical" />

          <span>Center</span>

          <Divider orientation="vertical" />

          <span>Right</span>
        </div>
      </Card>
    </section>
  );
}