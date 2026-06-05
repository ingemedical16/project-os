import {
  Button,
  Tooltip,
} from '@/components/ui';

import styles from './TooltipShowcase.module.scss';

export function TooltipShowcase() {
  return (
    <section className={styles.showcase}>
      <h2>Tooltip Primitive</h2>

      <div className={styles.row}>
        <Tooltip content="Create a new project">
          <Button>
            Hover Me
          </Button>
        </Tooltip>

        <Tooltip content="Delete item">
          <Button variant="secondary">
            Delete
          </Button>
        </Tooltip>

        <Tooltip content="Additional information">
          <span className={styles.icon}>
            ℹ
          </span>
        </Tooltip>
      </div>
    </section>
  );
}