import {
  ButtonShowcase,
  CheckboxShowcase,
  FormShowcase,
  InputShowcase,
  LanguageShowcase,
  RadioShowcase,
  SelectShowcase,
  SwitchShowcase,
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
        <RadioShowcase />
        <SwitchShowcase />
        <FormShowcase />
      </div>
    </main>
  );
}