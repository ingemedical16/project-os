'use client';

import { useEffect, useState } from 'react';

import { BREAKPOINTS } from '@/constants/breakpoints';

export type Breakpoint =
  keyof typeof BREAKPOINTS;

export function useBreakpoint(): Breakpoint {
  const getBreakpoint = (): Breakpoint => {
    if (typeof window === 'undefined') {
      return 'lg';
    }

    const width = window.innerWidth;

    if (width >= BREAKPOINTS.xxl) {
      return 'xxl';
    }

    if (width >= BREAKPOINTS.xl) {
      return 'xl';
    }

    if (width >= BREAKPOINTS.lg) {
      return 'lg';
    }

    if (width >= BREAKPOINTS.md) {
      return 'md';
    }

    if (width >= BREAKPOINTS.sm) {
      return 'sm';
    }

    return 'xs';
  };

  const [breakpoint, setBreakpoint] =
    useState<Breakpoint>(getBreakpoint);

  useEffect(() => {
    const handleResize = (): void => {
      setBreakpoint(getBreakpoint());
    };

    window.addEventListener(
      'resize',
      handleResize,
    );

    return () => {
      window.removeEventListener(
        'resize',
        handleResize,
      );
    };
  }, []);

  return breakpoint;
}