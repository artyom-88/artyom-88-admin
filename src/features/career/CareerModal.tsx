import type { JSX } from 'react';

import { Spinner } from '@nextui-org/react';
import dynamic from 'next/dynamic';

import CommonModal from '@/common/components/CommonModal';

import { useCareerItemQuery } from './hooks/use-career-item-query';
import { useCareerModal } from './hooks/use-career-modal';
import 'react-datepicker/dist/react-datepicker.css';

const CareerEditor = dynamic(() => import('@/features/career/CareerEditor'), {
  loading: () => <Spinner />,
});

const CareerModal = (): JSX.Element => {
  const { id, isOpen, handleClose } = useCareerModal();
  const { isPending } = useCareerItemQuery({ enabled: true, id });
  return (
    <CommonModal header='Add career item' isOpen={isOpen} isLoading={isPending} handleClose={handleClose}>
      <CareerEditor />
    </CommonModal>
  );
};

export default CareerModal;
