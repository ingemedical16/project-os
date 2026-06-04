# Responsive System

## Overview

The project uses a mobile-first responsive architecture.

All breakpoints are centralized inside:

```text
styles/abstracts/_breakpoints.scss
```

---

## Available Breakpoints

```scss
$breakpoints: (
  xs: 360px,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px,
);
```

| Key | Width  |
| --- | ------ |
| xs  | 360px  |
| sm  | 576px  |
| md  | 768px  |
| lg  | 992px  |
| xl  | 1200px |
| xxl | 1400px |

---

## Usage

```scss
.card {
  padding: 1.6rem;

  @include respond(md) {
    padding: 2.4rem;
  }

  @include respond(lg) {
    padding: 3.2rem;
  }
}
```

---

## Philosophy

Default styles target mobile devices first.

Enhancements for larger screens are added progressively using the `respond()` mixin.

```scss
.component {
  // Mobile

  @include respond(md) {
    // Tablet
  }

  @include respond(lg) {
    // Desktop
  }
}
```

---

## Best Practices

* Always start with mobile styles.
* Avoid desktop-first development.
* Keep breakpoints centralized.
* Reuse the `respond()` mixin everywhere.
* Never hardcode media query values inside components.

Good:

```scss
@include respond(md) {}
```

Bad:

```scss
@media (min-width: 768px) {}
```
