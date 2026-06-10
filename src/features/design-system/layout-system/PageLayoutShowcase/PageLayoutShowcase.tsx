import { Button } from '@/components/ui/forms';
import { Card } from '@/components/ui/display';
import { PageLayout } from '@/components/layouts';

import styles from './PageLayoutShowcase.module.scss';

export function PageLayoutShowcase() {
  return (
    <PageLayout
      title="Dashboard Overview"
      description="Example of a standard page using the PageLayout component."
      actions={<Button>New Project</Button>}
    >
      <div className={styles.grid}>
        <Card>
          <h3>Users</h3>
          <p>1,284</p>
        </Card>

        <Card>
          <h3>Revenue</h3>
          <p>€12,540</p>
        </Card>

        <Card>
          <h3>Orders</h3>
          <p>328</p>
        </Card>
      </div>
    </PageLayout>
  );
}