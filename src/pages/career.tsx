import type { JSX } from 'react';
import { useCallback } from 'react';

import { Button } from '@nextui-org/react';

import { useAuthorized } from '@/features/auth/hooks/use-authorized';
import CareerList from '@/features/career/CareerList';
import CareerModal from '@/features/career/CareerModal';
import { useCareerListQuery } from '@/features/career/hooks/use-career-list-query';
import { useCareerModal } from '@/features/career/hooks/use-career-modal';

const Careers = (): JSX.Element => {
  const isAuthorized = useAuthorized();
  const { refetch } = useCareerListQuery({ enabled: true });
  const { handleOpen } = useCareerModal();
  const handleAdd = useCallback(() => handleOpen(), [handleOpen]);
  const handleRefresh = useCallback(() => refetch(), [refetch]);
  return (
    <div>
      <div className='flex justify-between'>
        <h1>Career</h1>
        <div className='flex'>
          {isAuthorized ? (
            <>
              <Button onClick={handleAdd} size='sm'>
                Add
              </Button>
              <span>&nbsp;</span>
            </>
          ) : null}
          <Button onClick={handleRefresh} size='sm'>
            Refresh
          </Button>
        </div>
      </div>
      <CareerList />
      <CareerModal />
    </div>
  );
};

export default Careers;
