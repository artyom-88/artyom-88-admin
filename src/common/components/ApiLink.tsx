import type { PropsWithChildren, ReactElement } from 'react';

import { API_URL } from '@/common/common-constants';
import type { WithClass } from '@/common/types/common-types';

const ApiLink = ({ children, className = '' }: PropsWithChildren<WithClass>): ReactElement => (
  <a className={className} href={API_URL} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
);

export default ApiLink;
