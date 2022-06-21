import { BusinessImpact } from '../../../shared-types';

//#region RawBlogItem
export const rawBusinessImpact: Partial<BusinessImpact>[] = 
  ['Impact 1','Impact 2','Impact 3'].map(
    (name: string, index: number) => (
      {
        id: index + 1,
        name,
      }
    )
  );
