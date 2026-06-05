import { Spinner } from '@/components/ui';

import styles from './SpinnerShowcase.module.scss';

export function SpinnerShowcase() {
  return (
    <section className={styles.showcase}>
      <h2>Spinner Primitive</h2>

      <div className={styles.row}>
        <Spinner size="sm" />

        <Spinner size="md" />

        <Spinner size="lg" />
      </div>

      <div className={styles.row}>
        <Spinner label="Loading..." />

        <Spinner
          size="lg"
          label="Fetching data..."
        />
      </div>
    </section>
  );
}