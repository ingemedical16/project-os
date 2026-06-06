'use client';

import {
  Badge,
  Button,
  Card,
  Divider,
  Select,
} from '@/components/ui';
import {
  COLOR_MODES,
  THEMES,
} from '@/contexts/theme/theme.types';
import { useTheme } from '@/contexts/theme/useTheme';

import styles from './ThemeShowcase.module.scss';

export function ThemeShowcase() {
  const {
    theme,
    colorMode,
    setTheme,
    setColorMode,
    toggleColorMode,
  } = useTheme();

  const themeOptions = Object.values(THEMES).map((themeName) => ({
    value: themeName,
    label: themeName,
  }));

  const colorModeOptions = Object.values(COLOR_MODES).map((mode) => ({
    value: mode,
    label: mode,
  }));

  return (
    <section className={styles.showcase}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Theme Showcase</h1>

          <p className={styles.description}>
            Test theme and color mode using Project OS primitives.
          </p>
        </div>

        <div className={styles.badges}>
          <Badge variant="info">{theme}</Badge>
          <Badge variant="success">{colorMode}</Badge>
        </div>
      </div>

      <Card className={styles.controls}>
        <Select
          label="Theme"
          value={theme}
          onChange={(event) =>
            setTheme(event.target.value as typeof theme)
          }
          options={themeOptions}
        />

        <Select
          label="Color mode"
          value={colorMode}
          onChange={(event) =>
            setColorMode(event.target.value as typeof colorMode)
          }
          options={colorModeOptions}
        />

        <Button type="button" onClick={toggleColorMode}>
          Toggle color mode
        </Button>
      </Card>

      <Card className={styles.preview}>
        <div>
          <h2 className={styles.previewTitle}>Preview card</h2>

          <p className={styles.previewText}>
            This card uses theme CSS variables.
          </p>
        </div>

        <Divider />

        <div className={styles.tokens}>
          <span className={styles.tokenSurface}>Surface</span>
          <span className={styles.tokenAccent}>Accent</span>
          <span className={styles.tokenSuccess}>Success</span>
          <span className={styles.tokenWarning}>Warning</span>
          <span className={styles.tokenDanger}>Danger</span>
        </div>
      </Card>
    </section>
  );
}