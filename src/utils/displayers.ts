import { UserMiniDTO } from '../models/user';

export const enumerate = (array: string[]) =>
  array.reduce(
    (acc, value, index) => acc + `${index !== 0 ? ',' : ''} ${value}`,
    ''
  );

export const getUserNameById = (id: number, users: UserMiniDTO[]) => {
  const user = users.find((user) => user.id === id);
  return user ? `${user.firstName} ${user.lastName}` : null;
};
