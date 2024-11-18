import type { JSX } from 'react';
import { useCallback } from 'react';

import { Button } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { CAREER_PAGE_URL } from '@/common/common-constants';
import type { CareerModel } from '@/common/types/common-career-types';
import { BLOG_ID_QUERY_KEY } from '@/features/blog/blog-constants';
import { careerItemRequest } from '@/features/career/career-api';
import CareerModal from '@/features/career/CareerModal';
import { useCareerModal } from '@/features/career/hooks/use-career-modal';

const Career = (): JSX.Element => {
  const router = useRouter();
  const id = router.query?.id as string;
  const { data, error } = useQuery<CareerModel>({
    queryFn: () => careerItemRequest(id),
    queryKey: [BLOG_ID_QUERY_KEY, id],
    refetchOnMount: false,
  });
  const career = data ?? ({} as CareerModel);
  const { handleOpen } = useCareerModal();
  const handleEgit = useCallback(() => {
    handleOpen(id);
  }, [handleOpen, id]);

  if (error) return <div>Failed to load</div>;
  if (!career) return <div>Loading...</div>;
  return (
    <>
      <h1 className='flex items-baseline justify-between'>
        <div>{career.title}</div>
        <div className='flex'>
          <Link href={CAREER_PAGE_URL}>
            <Button size='sm'>Back</Button>
          </Link>
          <span>&nbsp;</span>
          <Button onClick={handleEgit} size='sm'>
            Edit
          </Button>
        </div>
      </h1>
      <div className='flex'>
        <div>{JSON.stringify(career)}</div>
      </div>
      <CareerModal />
    </>
  );
};

export default Career;
