import { UserMiniDTO } from '../user';

export default interface Team {
  id: number;
  name: string;
  description?: string;
  users?: UserMiniDTO[];
}
export interface TeamMiniDTO {
  name: string;
  id: number;
}
export const teams: Team[] = [
  {
    id: 1,
    name: 'Team one',
    description: 'first',
    users: []
  },
  {
    id: 2,
    name: 'Team two',
    description: 'second team',
    users: []
  }
];
