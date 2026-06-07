import { useTranslations } from 'next-intl';

import {
  Avatar,
  Card,
} from '@/components/ui';

import { ShowcaseSection } from '../ShowcaseSection';

import styles from './AvatarShowcase.module.scss';

export function AvatarShowcase() {
  const t = useTranslations(
    'designSystem.components.avatar'
  );

  const usage = `<Avatar
  name="John Doe"
  size="md"
/>`;

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
        <h3>{t('sizes')}</h3>

        <div className={styles.row}>
          <Avatar size="sm" name="Mohammed EL-IDRISSI" />
          <Avatar size="md" name="Mohammed EL-IDRISSI" />
          <Avatar size="lg" name="Mohammed EL-IDRISSI" />
          <Avatar size="xl" name="Mohammed EL-IDRISSI" />
        </div>
      </div>

      <div className={styles.section}>
        <h3>{t('profile')}</h3>

        <Card className={styles.profileCard}>
          <Avatar size="lg" name="Mohammed EL-IDRISSI" />

          <div>
            <h3>{t('profileName')}</h3>
            <p>{t('profileRole')}</p>
          </div>
        </Card>
      </div>

      <div className={styles.section}>
        <h3>{t('fallbacks')}</h3>

        <div className={styles.row}>
          <Avatar />
          <Avatar name="John Doe" />
          <Avatar name="Jane Smith" />
        </div>
      </div>
    </ShowcaseSection>
  );
}