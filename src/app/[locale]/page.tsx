import { ButtonShowcase, LanguageShowcase, ThemeShowcase } from '@/features/designSystem/ index';
import styles from './page.module.scss';



export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <ThemeShowcase />

        <LanguageShowcase />

        <ButtonShowcase />
      </div>
    </main>
  );
}