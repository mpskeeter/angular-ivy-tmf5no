import { Injectable } from '@angular/core';

// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }

export const CustomBreakpointNames = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
};

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  breakpoints: object = {
    '(min-width: 1px)': CustomBreakpointNames.xs,
    '(min-width: 640px)': CustomBreakpointNames.sm,
    '(min-width: 768px)': CustomBreakpointNames.md,
    '(min-width: 1024px)': CustomBreakpointNames.lg,
    '(min-width: 1280px)': CustomBreakpointNames.xl,
    '(min-width: 1536px)': CustomBreakpointNames.xxl,
  };

  getBreakpoints(): string[] {
    return Object.keys(this.breakpoints);
  }

  getBreakpointName(breakpointValue): string {
    return this.breakpoints[breakpointValue];
  }

  constructor() {}
}
