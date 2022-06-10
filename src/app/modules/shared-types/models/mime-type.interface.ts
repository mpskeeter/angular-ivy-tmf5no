import { BaseName } from './base-name.interface';

export interface MimeType extends BaseName {
  ext: string;
  player: string;
}
