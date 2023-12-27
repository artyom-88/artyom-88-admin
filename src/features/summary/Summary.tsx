import type { JSX } from 'react';

import Link from 'next/link';

import { BLOG_PAGE_URL, CAREER_PAGE_URL } from '@/common/common-constants';
import ApiLink from '@/common/components/ApiLink';

import styles from './Summary.module.scss';

const Summary = (): JSX.Element => (
  <ul className='flex flex-col'>
    <li className={styles.link}>
      <Link href={BLOG_PAGE_URL}>Blog page</Link>
    </li>
    <li className={styles.link}>
      <Link href={CAREER_PAGE_URL}>Career page</Link>
    </li>
    <li className={styles.link}>
      <ApiLink>API documentation page</ApiLink>
    </li>
  </ul>
);

export default Summary;
