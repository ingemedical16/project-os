import { Toast } from '@/components/ui';

import styles from './ToastShowcase.module.scss';

export function ToastShowcase() {
  return (
    <section className={styles.showcase}>
      <h2>Toast Primitive</h2>

      <Toast title="Information">
        Your profile was viewed.
      </Toast>

      <Toast
        variant="success"
        title="Success"
      >
        Changes saved successfully.
      </Toast>

      <Toast
        variant="warning"
        title="Warning"
      >
        Storage is almost full.
      </Toast>

      <Toast
        variant="danger"
        title="Error"
      >
        Something went wrong.
      </Toast>
    </section>
  );
}