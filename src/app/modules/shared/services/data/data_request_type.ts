import { RequestType } from '../../../shared-types';

//#region RawBlogItem
export const rawRequestType: Partial<RequestType>[] = 
  ['Request Type 1','Request Type 2','Request Type 3'].map(
    (name: string, index: number) => (
      {
        id: index + 1,
        name,
      }
    )
  );
