import type { JSX } from 'react';
import { useCallback } from 'react';

import { Button } from '@nextui-org/react';

import BlogList from '@/features/blog/BlogList';
import { useBlogListQuery } from '@/features/blog/hooks/use-blog-list-query';

const Blogs = (): JSX.Element => {
  const { refetch } = useBlogListQuery({ enabled: true });
  const handleRefresh = useCallback(() => refetch(), [refetch]);
  return (
    <>
      <div className='flex justify-between'>
        <h1>Blog</h1>
        <Button onClick={handleRefresh} size='sm'>
          Refresh
        </Button>
      </div>
      <BlogList />
    </>
  );
};

export default Blogs;
