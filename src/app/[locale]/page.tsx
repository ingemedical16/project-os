import {
  ButtonShowcase,
  CheckboxShowcase,
  InputShowcase,
  LanguageShowcase,
  SelectShowcase,
  TextareaShowcase,
  ThemeShowcase,
} from '@/features/design-system/ index';
import styles from './page.module.scss';



export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
       <ThemeShowcase />
        <LanguageShowcase />
        <ButtonShowcase />
        <InputShowcase />
        <TextareaShowcase />
        <SelectShowcase />
        <CheckboxShowcase />
      </div>
    </main>
  );
}