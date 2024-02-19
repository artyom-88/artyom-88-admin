import type { JSX } from 'react';

import { Button } from '@nextui-org/react';
import Link from 'next/link';

import { CAREER_PAGE_URL } from '@/common/common-constants';
import { dayjs } from '@/common/common-date';

import type { CareerListItemProps } from './career-types';
import styles from './CareerListItem.module.scss';

const CareerListItem = ({ item }: CareerListItemProps): JSX.Element => {
  const { _id: itemId, endDate, description, post, site, startDate, title, tools } = item;
  return (
    <div className={`flex items-baseline justify-between ${styles.container}`} key={itemId}>
      <div>{title}</div>
      <div>
        <span>{dayjs(startDate).format('MMMM DD, YYYY')}</span>
        {endDate ? <span> - {endDate.format('MMMM DD, YYYY')}</span> : null}
      </div>
      <div>{post}</div>
      <div>{site}</div>
      <div>{description}</div>
      <div>{tools}</div>
      <Link href={`${CAREER_PAGE_URL}/${itemId}`}>
        <Button size='sm'>Open</Button>
      </Link>
    </div>
  );
};

export default CareerListItem;
