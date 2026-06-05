import { Alert } from '@/components/ui';

import styles from './AlertShowcase.module.scss';

export function AlertShowcase() {
  return (
    <section className={styles.showcase}>
      <h2>Alert Primitive</h2>

      <Alert title="Info">
        This is an informational alert.
      </Alert>

      <Alert variant="success" title="Success">
        Your action was completed successfully.
      </Alert>

      <Alert variant="warning" title="Warning">
        Please review this information carefully.
      </Alert>

      <Alert variant="danger" title="Danger">
        Something went wrong. Please try again.
      </Alert>
    </section>
  );
}