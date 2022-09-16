import { ReactNode } from 'react';

export interface TableCustomizedDataType {
  id: string | number;
  [propName: string]: any;
}

export interface TableCustomizedColumnType {
  label: string;
  accessor: string;
}

export interface IField {
  label: string;
  type:
    | 'text'
    | 'checkbox'
    | 'groupCheckbox'
    | 'select'
    | 'titleGroupField'
    | 'form';
  name?: string;
  placeholder?: string;
  helperText?: string;
  fullWidth?: boolean;
  multiple?: boolean;
  onPress?: any;
  required?: boolean;
  error?: any;
  items?: { label: string; value: string; checked?: boolean }[];
  // listCheckbox?: { label: string; value: string; checked?: boolean }[];
  icon?: ReactNode | string;
  // onPressIcon?: () => void;
  checked?: boolean;
}

export interface IHash<E> {
  [key: string]: E;
}
