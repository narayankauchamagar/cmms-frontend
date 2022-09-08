export type RoleType = 'paid' | 'free';

export interface Role {
  id: string;
  name: string;
  users: number;
  externalId?: string;
  type: RoleType;
}

export interface TableCustomizedDataType {
  id: string | number;
  [propName: string]: any;
}
