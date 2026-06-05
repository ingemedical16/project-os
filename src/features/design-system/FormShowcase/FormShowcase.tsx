'use client';

import { useState } from 'react';

import {
  Button,
  Checkbox,
  Form,
  FormActions,
  FormField,
  Input,
  Select,
  Textarea,
} from '@/components/ui';

import styles from './FormShowcase.module.scss';

const categoryOptions = [
  {
    value: '',
    label: 'Select a category',
    disabled: true,
  },
  {
    value: 'frontend',
    label: 'Frontend',
  },
  {
    value: 'backend',
    label: 'Backend',
  },
  {
    value: 'fullstack',
    label: 'Full Stack',
  },
];

export function FormShowcase() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    category: '',
    message: '',
    acceptedTerms: false,
  });

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    console.log(formData);
  }

  return (
    <section className={styles.showcase}>
      <h2>Form Primitive</h2>

      <Form onSubmit={handleSubmit}>
        <FormField>
          <Input
            label="First Name"
            placeholder="John"
            value={formData.firstName}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,
                firstName: event.target.value,
              }))
            }
          />
        </FormField>

        <FormField>
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,
                email: event.target.value,
              }))
            }
          />
        </FormField>

        <FormField>
          <Select
            label="Category"
            value={formData.category}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,
                category: event.target.value,
              }))
            }
            options={categoryOptions}
          />
        </FormField>

        <FormField>
          <Textarea
            label="Message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,
                message: event.target.value,
              }))
            }
          />
        </FormField>

        <FormField>
          <Checkbox
            label="I accept terms and conditions"
            checked={formData.acceptedTerms}
            onChange={(event) =>
              setFormData((previous) => ({
                ...previous,
                acceptedTerms:
                  event.target.checked,
              }))
            }
          />
        </FormField>

        <FormActions>
          <Button
            type="button"
            variant="ghost"
          >
            Cancel
          </Button>

          <Button type="submit">
            Submit
          </Button>
        </FormActions>
      </Form>
    </section>
  );
}