import { ReactNode } from 'react';

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

export interface IField {
  label?: string;
  type: 'text' | 'checkbox' | 'groupCheckbox' | 'select' | 'form';
  // keyboardType?: 'numeric' | undefined;
  name: string;
  placeholder?: string;
  fullWidth?: boolean;
  multiple?: boolean;
  onPress?: any;
  required?: boolean;
  error?: any;
  items?: any;
  listCheckbox?: { label: string; value: string; checked?: boolean }[];
  icon?: ReactNode | string;
  // onPressIcon?: () => void;
}

export interface IHash<E> {
  [key: string]: E;
}
