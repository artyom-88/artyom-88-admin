import type { UseQueryOptions } from '@tanstack/react-query';

import type { CareerModel } from '@/common/types/common-career-types';

export interface UseCareerItemQueryParams extends Omit<UseQueryOptions<CareerModel>, 'queryKey' | 'queryFn'> {
  id: string | null;
}

export interface CareerListItemProps {
  item: CareerModel;
}

export interface CareerModalStore {
  handleClose: () => void;
  id: string | null;
  isOpen: boolean;
  handleOpen: (id?: string | null) => void;
}
