'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import {
  Button,
  Checkbox,
  Form,
  FormActions,
  FormField,
  Input,
  RadioGroup,
  Select,
  Switch,
  Textarea,
} from '@/components/ui';

import { ShowcaseSection } from '../../../shared/ShowcaseSection';

import styles from './FormShowcase.module.scss';

export function FormShowcase() {
  const t = useTranslations(
    'designSystem.components.form'
  );

  const [data, setData] = useState({
    name: '',
    email: '',
    role: 'user',
    country: '',
    bio: '',
    newsletter: true,
    terms: false,
  });

  const usage = `<Form>
  <FormField>
    <Input />
  </FormField>

  <FormActions>
    <Button />
  </FormActions>
</Form>`;

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
      <Form>
        <FormField>
          <Input
            label={t('name')}
            value={data.name}
            onChange={(event) =>
              setData({
                ...data,
                name: event.target.value,
              })
            }
          />
        </FormField>

        <FormField>
          <Input
            label={t('email')}
            type="email"
            value={data.email}
            onChange={(event) =>
              setData({
                ...data,
                email: event.target.value,
              })
            }
          />
        </FormField>

        <FormField>
          <Select
            label={t('country')}
            value={data.country}
            onChange={(event) =>
              setData({
                ...data,
                country: event.target.value,
              })
            }
            options={[
              {
                value: '',
                label: t('selectCountry'),
              },
              {
                value: 'fr',
                label: 'France',
              },
              {
                value: 'ro',
                label: 'Romania',
              },
              {
                value: 'ma',
                label: 'Morocco',
              },
            ]}
          />
        </FormField>

        <FormField>
          <RadioGroup
            name="role"
            label={t('role')}
            value={data.role}
            options={[
              {
                value: 'user',
                label: t('user'),
              },
              {
                value: 'admin',
                label: t('admin'),
              },
            ]}
            onChange={(value) =>
              setData({
                ...data,
                role: value,
              })
            }
          />
        </FormField>

        <FormField>
          <Textarea
            label={t('bio')}
            value={data.bio}
            onChange={(event) =>
              setData({
                ...data,
                bio: event.target.value,
              })
            }
          />
        </FormField>

        <FormField>
          <Switch
            label={t('newsletter')}
            checked={data.newsletter}
            onChange={(event) =>
              setData({
                ...data,
                newsletter:
                  event.target.checked,
              })
            }
          />
        </FormField>

        <FormField>
          <Checkbox
            label={t('terms')}
            checked={data.terms}
            onChange={(event) =>
              setData({
                ...data,
                terms: event.target.checked,
              })
            }
          />
        </FormField>

        <FormActions>
          <Button variant="secondary">
            {t('cancel')}
          </Button>

          <Button>
            {t('submit')}
          </Button>
        </FormActions>
      </Form>
    </ShowcaseSection>
  );
}