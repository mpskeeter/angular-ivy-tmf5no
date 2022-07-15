import { BaseId } from './base-id.interface';
import { Status } from './status.interface';
import { User } from './user.interface';

export interface BlogItem extends BaseId {
  title?: string;
  slug?: string;
  content?: string;
  image?: string;
  isFeatured?: boolean;
  authorId?: number;
  statusId?: number;

  createdAt?: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;

  publishedAt?: Date | string;

  author?: Partial<User>;
  status?: Partial<Status>;
}
