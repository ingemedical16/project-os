import { Avatar, Card } from '@/components/ui';

import styles from './AvatarShowcase.module.scss';

export function AvatarShowcase() {
  return (
    <section className={styles.showcase}>
      <h2>Avatar Primitive</h2>

      <Card>
        <div className={styles.row}>
          <Avatar
            size="sm"
            name="Mohammed EL-IDRISSI"
          />

          <Avatar
            size="md"
            name="Mohammed EL-IDRISSI"
          />

          <Avatar
            size="lg"
            name="Mohammed EL-IDRISSI"
          />

          <Avatar
            size="xl"
            name="Mohammed EL-IDRISSI"
          />
        </div>
      </Card>

      <Card>
        <div className={styles.profile}>
          <Avatar
            size="lg"
            name="Mohammed EL-IDRISSI"
          />

          <div>
            <h3>Mohammed EL-IDRISSI</h3>

            <p>
              Full Stack JavaScript Developer
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <div className={styles.row}>
          <Avatar />

          <Avatar name="John Doe" />

          <Avatar name="Jane Smith" />
        </div>
      </Card>
    </section>
  );
}