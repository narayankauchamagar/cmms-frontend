export type RoleType = 'paid' | 'free';

export interface Role {
  id: number;
  name: string;
  users: number;
  externalId?: string;
  type: RoleType;
}
