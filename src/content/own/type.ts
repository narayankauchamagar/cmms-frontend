export type RoleType = 'paid' | 'free';

export interface Role {
  id: string;
  name: string;
  users: number;
  externalId?: string;
  type: RoleType;
}

export interface TableCustomizedType {
  id: string | number;
  [propName: string]: any;
}
