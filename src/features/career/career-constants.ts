import { dayjs } from '@/common/common-date';
import type { CareerModel } from '@/common/types/common-career-types';

export const CAREER_LIST_QUERY_KEY = 'CAREER_LIST_QUERY_KEY';

export const CAREER_ITEM_QUERY_KEY = 'CAREER_ITEM_QUERY_KEY';

export const EMPTY_CAREER_ITEM: CareerModel = {
  description: '',
  post: '',
  site: '',
  startDate: dayjs(),
  title: '',
  tools: '',
};
