# UI Hooks

Reusable hooks available in Project-OS.

---

# useLocalStorage

Persist state in localStorage.

## Usage

```tsx
const [theme, setTheme] = useLocalStorage(
  'theme',
  'default',
);
```

## Functional Update

```tsx
setTheme((currentTheme) =>
  currentTheme === 'default'
    ? 'ocean'
    : 'default',
);
```

## Returns

```ts
[value, setValue]
```

---

# useDebounce

Delay value updates.

Useful for:

- Search inputs
- Filters
- API requests
- Autocomplete

## Usage

```tsx
const debouncedSearch =
  useDebounce(search, 500);
```

## Parameters

| Parameter | Type     | Default |
| ----------|----------|---------|
| value     | any      | required |
| delay     | number   | 300      |

---

# useBreakpoint

Detect current screen breakpoint.

## Available Breakpoints

| Name | Width |
|------|--------|
| xs   | 360px |
| sm   | 576px |
| md   | 768px |
| lg   | 992px |
| xl   | 1200px |
| xxl  | 1400px |

## Usage

```tsx
const breakpoint = useBreakpoint();
```

## Example

```tsx
const isMobile =
  breakpoint === 'xs' ||
  breakpoint === 'sm';
```

```tsx
if (breakpoint === 'lg') {
  return <DesktopSidebar />;
}
```

---

# Best Practices

- Prefer hooks over duplicated logic.
- Keep hooks framework-agnostic.
- Export hooks through barrel files.
- Keep TypeScript generics when possible.
- Make hooks reusable across all Project-OS projects.