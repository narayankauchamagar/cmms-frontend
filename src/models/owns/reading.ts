import { Audit } from './audit';
import User, { users } from './user';
import Asset, { assets } from './asset';
import Location, { locations } from './location';

export default interface Reading {
  value: number;
}

export const readings: Reading[] = [
  {
    value: 57
  },
  { value: 75 }
];
