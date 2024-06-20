import { createDate } from './createDate';

interface CreateMonthParams {
  date?: Date;
  locale?: string;
};

export const createMonth = (params?:CreateMonthParams) => {
  const date = params?.date ?? new Date();
  const locale = params?.locale ?? 'default';

  const myDate = createDate({ date, locale });
};