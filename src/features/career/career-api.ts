import { dayjs } from '@/common/common-date';
import { httpClient } from '@/common/http-client';
import type { CareerDTO, CareerModel } from '@/common/types/common-career-types';
import type { AuthStore } from '@/features/auth/auth-types';
import { useAuthToken } from '@/features/auth/hooks/use-auth-token';

const careerItemAdapter = (dto: CareerDTO): CareerModel => ({
  ...dto,
  endDate: dto.endDate ? dayjs(dto.endDate) : undefined,
  startDate: dayjs(dto.startDate),
});

export const careerListRequest = async (): Promise<CareerModel[]> => {
  const dto = await httpClient.get('career').json<CareerDTO[]>();
  return dto.map(careerItemAdapter);
};

export const careerItemRequest = async (id: string): Promise<CareerModel> => {
  const dto = await httpClient.get(`career/${id}`).json<CareerDTO>();
  return careerItemAdapter(dto);
};

export const careerItemCreate = async (item: Partial<CareerModel>): Promise<CareerModel> => {
  const { token }: AuthStore = useAuthToken.getState();
  const dto = await httpClient
    .post('career', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: item,
    })
    .json<CareerDTO>();
  return careerItemAdapter(dto);
};

export const careerItemUpdate = async (id: string, { ...rest }: Partial<CareerModel>): Promise<CareerModel> => {
  const { token }: AuthStore = useAuthToken.getState();
  const dto = await httpClient
    .patch(`career/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: rest,
    })
    .json<CareerDTO>();
  return careerItemAdapter(dto);
};
