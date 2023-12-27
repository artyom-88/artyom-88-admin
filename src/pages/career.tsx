import type { JSX } from 'react';
import { useCallback } from 'react';

import { Button } from '@nextui-org/react';

import CareerList from '@/features/career/CareerList';
import CareerModal from '@/features/career/CareerModal';
import { useCareerListQuery } from '@/features/career/hooks/use-career-list-query';
import { useCareerModal } from '@/features/career/hooks/use-career-modal';

const Careers = (): JSX.Element => {
  const { refetch } = useCareerListQuery({ enabled: true });
  const { handleOpen } = useCareerModal();
  const handleAdd = useCallback(() => handleOpen(), [handleOpen]);
  const handleRefresh = useCallback(() => refetch(), [refetch]);
  return (
    <div>
      <div className='flex justify-between'>
        <h1>Career</h1>
        <div className='flex'>
          <Button onClick={handleAdd}>Add</Button>
          <span>&nbsp;</span>
          <Button onClick={handleRefresh}>Refresh</Button>
        </div>
      </div>
      <CareerList />
      <CareerModal />
    </div>
  );
};

export default Careers;
