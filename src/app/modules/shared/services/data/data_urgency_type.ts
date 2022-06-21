import { UrgencyType } from '../../../shared-types';

//#region RawBlogItem
export const rawUrgencyType: Partial<UrgencyType>[] = 
  ['Urgency Type 1','Urgency Type 2','Urgency Type 3'].map(
    (name: string, index: number) => (
      {
        id: index + 1,
        name,
      }
    )
  );
