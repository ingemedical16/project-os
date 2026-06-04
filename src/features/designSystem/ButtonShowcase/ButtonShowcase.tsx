import { Button } from '@/components/ui';

import styles from './ButtonShowcase.module.scss';

export function ButtonShowcase() {
  return (
    <section className={styles.showcase}>
      <h2>Button Primitive</h2>

      <h3>Variants</h3>

      <div className={styles.actions}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>

      <h3>Sizes</h3>

      <div className={styles.actions}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      <h3>Full Width</h3>

      <Button fullWidth>Full Width Button</Button>

      <h3>Disabled</h3>

      <div className={styles.actions}>
        <Button disabled>Disabled</Button>
        <Button variant="secondary" disabled>
          Disabled Secondary
        </Button>
      </div>
    </section>
  );
}