import {
  Accordion,
  AccordionItem,
} from '@/components/ui';

import styles from './AccordionShowcase.module.scss';

export function AccordionShowcase() {
  return (
    <section className={styles.showcase}>
      <h2>Accordion Primitive</h2>

      <Accordion>
        <AccordionItem
          title="What is Project OS?"
          defaultOpen
        >
          Project OS is a reusable starter
          architecture for modern web
          applications.
        </AccordionItem>

        <AccordionItem title="Why use a design system?">
          A design system ensures consistency,
          scalability, and reusability across
          projects.
        </AccordionItem>

        <AccordionItem title="Is Accordion reusable?">
          Yes, it can be used for FAQs,
          settings, documentation, sidebars,
          and more.
        </AccordionItem>
      </Accordion>
    </section>
  );
}