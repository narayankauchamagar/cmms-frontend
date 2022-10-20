export default interface Team {
  id: number;
  name: string;
}
export interface TeamShowDTO {
  name: string;
  id: number;
}
export const teams: Team[] = [
  {
    id: 55,
    name: 'dxcv'
  },
  {
    id: 475,
    name: 'tctvu'
  }
];
