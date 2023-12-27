import type { KyInstance } from 'ky';
import ky from 'ky';

import { API_URL } from '@/common/common-constants';

export const httpClient: KyInstance = ky.create({
  headers: {
    'Content-Type': 'application/json',
  },
  prefixUrl: API_URL,
  retry: 0,
});
