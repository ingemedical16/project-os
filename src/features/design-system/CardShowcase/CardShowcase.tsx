import {
  Badge,
  Button,
  Card,
} from '@/components/ui';

import styles from './CardShowcase.module.scss';

export function CardShowcase() {
  return (
    <section className={styles.showcase}>
      <h2>Card Primitive</h2>

      <div className={styles.grid}>
        <Card>
          <h3>User Profile</h3>

          <p>
            Example profile card content.
          </p>

          <Badge variant="success">
            Active
          </Badge>
        </Card>

        <Card>
          <h3>Product Card</h3>

          <p>
            Example product description.
          </p>

          <Button>
            Add To Cart
          </Button>
        </Card>

        <Card>
          <h3>Statistics</h3>

          <p>
            Total Users
          </p>

          <strong>
            12,456
          </strong>
        </Card>
      </div>
    </section>
  );
}