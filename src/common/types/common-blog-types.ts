import type { Dayjs } from 'dayjs';

import type { BaseEntity } from './common-types';

export interface BlogModelBase extends BaseEntity {
  link: string;
  linkCaption: string;
  title: string;
}

export interface BlogDTO extends BlogModelBase {
  date: string;
}

export interface BlogModel extends BlogModelBase {
  date: Dayjs;
}
