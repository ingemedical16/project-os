import {
  ButtonShowcase,
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
      </div>
    </main>
  );
}