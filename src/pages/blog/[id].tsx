import type { JSX } from 'react';

import { Button } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { BLOG_PAGE_URL } from '@/common/common-constants';
import type { BlogModel } from '@/common/types/common-blog-types';
import { blogItemRequest } from '@/features/blog/blog-api';
import { BLOG_ID_QUERY_KEY } from '@/features/blog/blog-constants';

const Blog = (): JSX.Element => {
  const router = useRouter();
  const id = router.query?.id as string;
  const { data, error } = useQuery<BlogModel>({
    queryFn: () => blogItemRequest(id),
    queryKey: [BLOG_ID_QUERY_KEY, id],
    refetchOnMount: false,
  });
  const blog = data ?? ({} as BlogModel);

  if (error) return <div>Failed to load</div>;
  if (!blog) return <div>Loading...</div>;
  return (
    <>
      <h1 className='flex items-baseline justify-between'>
        <div>{blog.title}</div>
        <Link href={BLOG_PAGE_URL}>
          <Button size='sm'>Back</Button>
        </Link>
      </h1>
      <div className='flex'>
        <div>{blog.date?.format('MMMM DD, YYYY')}</div>
        <div>{blog.link}</div>
        <div>{blog.linkCaption}</div>
      </div>
    </>
  );
};

export default Blog;
