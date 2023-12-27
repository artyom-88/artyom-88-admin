import type { JSX } from 'react';

import { Button } from '@nextui-org/react';
import Link from 'next/link';

import { BLOG_PAGE_URL } from '@/common/common-constants';

import type { BlogListItemProps } from './blog-types';
import styles from './BlogListItem.module.scss';

const BlogListItem = ({ item }: BlogListItemProps): JSX.Element => {
  const { _id: itemId, date, title, link, linkCaption } = item;
  return (
    <div className={`flex justify-between ${styles.container}`} key={itemId}>
      <div>{date.format('MMMM DD, YYYY')}</div>
      <div>{title}</div>
      <div>{link}</div>
      <div>{linkCaption}</div>
      <Link href={`${BLOG_PAGE_URL}/${itemId}`}>
        <Button>Open</Button>
      </Link>
    </div>
  );
};

export default BlogListItem;
