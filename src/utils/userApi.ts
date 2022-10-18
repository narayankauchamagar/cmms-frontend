import api, { authHeader } from './api';
import { UserResponseDTO } from '../models/user';
import UserSettings from '../models/owns/userSettings';

export const getUserInfos = async (): Promise<UserResponseDTO> => {
  return api.get<UserResponseDTO>('auth/me');
};
export const getUserSettings = async (id: number): Promise<UserSettings> => {
  return api.get<UserSettings>(`user-settings/${id}`);
};
