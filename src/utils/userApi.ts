import api, { authHeader } from './api';
import { UserResponseDTO } from '../models/user';

export const getUserInfos = async (): Promise<UserResponseDTO> => {
  return api.get<UserResponseDTO>('auth/me');
};
