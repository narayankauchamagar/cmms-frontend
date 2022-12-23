import { UserMiniDTO } from '../../user';

export interface WoOverviewStats {
  total: number;
  complete: number;
  compliant: number;
  avgCycleTime: number;
}

interface BasicStats {
  count: number;
  estimatedHours: number;
}
export interface WOStatsByPriority {
  none: BasicStats;
  high: BasicStats;
  medium: BasicStats;
  low: BasicStats;
}

export interface WOStatsByStatus {
  open: number;
  inProgress: number;
  onHold: number;
  complete: number;
}

export interface WOHours {
  estimated: number;
  actual: number;
}

export interface WOCountsByUser extends UserMiniDTO {
  count: number;
}
