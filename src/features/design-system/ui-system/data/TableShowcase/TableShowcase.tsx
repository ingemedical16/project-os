import { useTranslations } from 'next-intl';

import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHeadCell,
  TableHeader,
  TableRow,
} from '@/components/ui';

import { ShowcaseSection } from '../../../shared/ShowcaseSection';

import styles from './TableShowcase.module.scss';

export function TableShowcase() {
  const t = useTranslations(
    'designSystem.components.table'
  );

  const usage = `<Table>
  <TableHeader>
    <TableRow>
      <TableHeadCell>Name</TableHeadCell>
      <TableHeadCell>Status</TableHeadCell>
    </TableRow>
  </TableHeader>

  <TableBody>
    <TableRow>
      <TableCell>Project OS</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>`;

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

        <Table>
          <TableHeader>
            <TableRow>
              <TableHeadCell>{t('name')}</TableHeadCell>
              <TableHeadCell>{t('role')}</TableHeadCell>
              <TableHeadCell>{t('status')}</TableHeadCell>
              <TableHeadCell>{t('email')}</TableHeadCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Mohammed EL-IDRISSI</TableCell>
              <TableCell>{t('developer')}</TableCell>
              <TableCell>
                <Badge variant="success">
                  {t('active')}
                </Badge>
              </TableCell>
              <TableCell>mohammed@example.com</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>{t('designer')}</TableCell>
              <TableCell>
                <Badge variant="warning">
                  {t('pending')}
                </Badge>
              </TableCell>
              <TableCell>jane@example.com</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>{t('manager')}</TableCell>
              <TableCell>
                <Badge variant="danger">
                  {t('blocked')}
                </Badge>
              </TableCell>
              <TableCell>john@example.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </ShowcaseSection>
  );
}