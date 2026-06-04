import {
  ButtonShowcase,
  InputShowcase,
  LanguageShowcase,
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
      </div>
    </main>
  );
}