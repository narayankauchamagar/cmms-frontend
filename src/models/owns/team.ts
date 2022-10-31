import User from './user';

export default interface Team {
  id: number;
  name: string;
  description?: string;
  teamUsers?: User[];
}
export const teams: Team[] = [
  {
    id: 1,
    name: 'Team one',
    description: 'first',
    teamUsers: []
  },
  {
    id: 2,
    name: 'Team two',
    description: 'second team',
    teamUsers: []
  }
];
