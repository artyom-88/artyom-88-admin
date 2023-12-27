import type { JSX } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import type { CareerModel } from '@/common/types/common-career-types';
import { BLOG_ID_QUERY_KEY } from '@/features/blog/blog-constants';
import { careerItemRequest } from '@/features/career/career-api';

const Career = (): JSX.Element => {
  const router = useRouter();
  const id = router.query?.id as string;
  const { data, error } = useQuery<CareerModel>({
    queryFn: () => careerItemRequest(id),
    queryKey: [BLOG_ID_QUERY_KEY, id],
    refetchOnMount: false,
  });
  const career = data ?? ({} as CareerModel);

  if (error) return <div>Failed to load</div>;
  if (!career) return <div>Loading...</div>;
  return (
    <>
      <h1>{career.title}</h1>
      <div className='flex'>
        <div>{JSON.stringify(career)}</div>
      </div>
    </>
  );
};

export default Career;
