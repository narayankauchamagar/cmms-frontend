import { UserMiniDTO } from '../../user';
import { CategoryMiniDTO } from '../category';

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

export interface WOCountsByCategory extends CategoryMiniDTO {
  count: number;
}
export interface WOCountsByWeek {
  count: number;
  compliant: number;
  reactive: number;
  date: string;
}
export interface WOCosts {
  total: number;
  average: number;
}
