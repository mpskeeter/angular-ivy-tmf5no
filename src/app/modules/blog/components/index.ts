import { BlogItemComponent } from './blog-item';
import { BlogPageComponent } from './blog-page';
import { LayoutComponent } from './layout';

export const ComponentsExport = [BlogPageComponent];

export const Components = [
  ...ComponentsExport,
  BlogItemComponent,
  LayoutComponent,
];

export * from './layout';
