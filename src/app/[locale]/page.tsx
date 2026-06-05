import {
  AlertShowcase,
  AvatarShowcase,
  BadgeShowcase,
  ButtonShowcase,
  CardShowcase,
  CheckboxShowcase,
  DividerShowcase,
  FormShowcase,
  InputShowcase,
  LanguageShowcase,
  RadioShowcase,
  SelectShowcase,
  SpinnerShowcase,
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
        <BadgeShowcase />
        <SpinnerShowcase />
        <CardShowcase />
        <DividerShowcase />
        <AvatarShowcase />
        <AlertShowcase />
      </div>
    </main>
  );
}