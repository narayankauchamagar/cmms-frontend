import api, { authHeader } from './api';
import { UserResponseDTO } from '../models/user';

export const getUserInfos = async (token: string): Promise<UserResponseDTO> => {
  return await api.get<UserResponseDTO>('auth/me');
};
