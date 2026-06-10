import { useTranslations } from 'next-intl';

import {
  Badge,
  DataTable,
} from '@/components/ui';

import { ShowcaseSection } from '../../../shared/ShowcaseSection';

import styles from './DataTableShowcase.module.scss';

type UserRole = 'developer' | 'designer' | 'manager';
type UserStatus = 'active' | 'pending' | 'blocked';

interface UserRow {
  id: string;
  name: string;
  role: UserRole;
  status: UserStatus;
  email: string;
}

const users: UserRow[] = [
  {
    id: '1',
    name: 'Mohammed EL-IDRISSI',
    role: 'developer',
    status: 'active',
    email: 'mohammed@example.com',
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'designer',
    status: 'pending',
    email: 'jane@example.com',
  },
  {
    id: '3',
    name: 'John Doe',
    role: 'manager',
    status: 'blocked',
    email: 'john@example.com',
  },
];

export function DataTableShowcase() {
  const t = useTranslations(
    'designSystem.components.dataTable'
  );

  const usage = `<DataTable
  columns={columns}
  data={data}
  getRowKey={(row) => row.id}
/>`;

  const columns = [
    {
      key: 'name',
      header: t('name'),
    },
    {
      key: 'role',
      header: t('role'),
      render: (row: UserRow) => t(row.role),
    },
    {
      key: 'status',
      header: t('status'),
      render: (row: UserRow) => (
        <Badge
          variant={
            row.status === 'active'
              ? 'success'
              : row.status === 'pending'
                ? 'warning'
                : 'danger'
          }
        >
          {t(row.status)}
        </Badge>
      ),
    },
    {
      key: 'email',
      header: t('email'),
    },
  ];

  const emptyColumns = [
    {
      key: 'name',
      header: t('name'),
    },
    {
      key: 'role',
      header: t('role'),
    },
  ];

  return (
    <ShowcaseSection
      title={t('title')}
      description={t('description')}
      usageTitle={t('usage')}
      previewTitle={t('preview')}
      usage={
        <pre className={styles.code}>
          <code>{usage}</code>
        </pre>
      }
    >
      <div className={styles.section}>
        <h3>{t('basic')}</h3>

        <DataTable<UserRow>
          data={users}
          getRowKey={(row) => row.id}
          columns={columns}
        />
      </div>

      <div className={styles.section}>
        <h3>{t('empty')}</h3>

        <DataTable<UserRow>
          data={[]}
          getRowKey={(row) => row.id}
          emptyTitle={t('emptyTitle')}
          emptyDescription={t('emptyDescription')}
          columns={emptyColumns}
        />
      </div>
    </ShowcaseSection>
  );
}