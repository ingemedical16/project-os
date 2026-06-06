import {
  Badge,
  Card,
  Tabs,
} from '@/components/ui';

import styles from './TabsShowcase.module.scss';

export function TabsShowcase() {
  return (
    <section className={styles.showcase}>
      <h2>Tabs Primitive</h2>

      <Card>
        <Tabs
          defaultValue="overview"
          tabs={[
            {
              label: 'Overview',
              value: 'overview',
              content: (
                <div className={styles.content}>
                  <h3>Overview</h3>
                  <p>
                    This tab contains general project information.
                  </p>
                  <Badge variant="info">Info</Badge>
                </div>
              ),
            },
            {
              label: 'Settings',
              value: 'settings',
              content: (
                <div className={styles.content}>
                  <h3>Settings</h3>
                  <p>
                    This tab can contain user or application settings.
                  </p>
                  <Badge variant="success">Active</Badge>
                </div>
              ),
            },
            {
              label: 'Billing',
              value: 'billing',
              content: (
                <div className={styles.content}>
                  <h3>Billing</h3>
                  <p>
                    This tab can contain invoices, payments, and plans.
                  </p>
                  <Badge variant="warning">Pending</Badge>
                </div>
              ),
            },
            {
              label: 'Disabled',
              value: 'disabled',
              disabled: true,
              content: <p>Disabled content.</p>,
            },
          ]}
        />
      </Card>
    </section>
  );
}