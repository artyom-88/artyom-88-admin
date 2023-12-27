import { dayjs } from '@/common/common-date';
import { httpClient } from '@/common/http-client';
import type { BlogDTO, BlogModel } from '@/common/types/common-blog-types';

const blogItemAdapter = (dto: BlogDTO): BlogModel => ({
  ...dto,
  date: dayjs(dto.date),
});

export const blogListRequest = async (): Promise<BlogModel[]> => {
  const dto = await httpClient.get('blog').json<BlogDTO[]>();
  return dto.map(blogItemAdapter);
};

export const blogItemRequest = async (id: string): Promise<BlogModel> => {
  const dto = await httpClient.get(`blog/${id}`).json<BlogDTO>();
  return blogItemAdapter(dto);
};
