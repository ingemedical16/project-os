import {
  AccordionShowcase,
  AlertShowcase,
  AvatarShowcase,
  BadgeShowcase,
  ButtonShowcase,
  CardShowcase,
  CheckboxShowcase,
  DividerShowcase,
  DrawerShowcase,
  FormShowcase,
  InputShowcase,
  LanguageShowcase,
  ModalShowcase,
  RadioShowcase,
  SelectShowcase,
  SpinnerShowcase,
  SwitchShowcase,
  TabsShowcase,
  TextareaShowcase,
  ThemeShowcase,
  TooltipShowcase,
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
        <ModalShowcase />
        <TooltipShowcase />
        <AccordionShowcase />
        <TabsShowcase />
        <DrawerShowcase />
      </div>
    </main>
  );
}