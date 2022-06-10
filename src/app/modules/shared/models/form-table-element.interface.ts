import { SelectItem } from './select-item.interface';

export type dataFunc = (row: unknown) => string | number | boolean;

export interface FormTableElement {
  name?: string;
  type: string;
  label?: string;
  dateFormat?: string;
  tableDisplay?: boolean;
  data?: dataFunc;
  required?: boolean;
  options?: Partial<SelectItem>[];
  display?: boolean;
}

export type TableElements = Partial<FormTableElement>[];
