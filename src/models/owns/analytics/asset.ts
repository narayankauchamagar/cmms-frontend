import { AssetMiniDTO } from '../asset';

export interface TimeCostByAsset extends AssetMiniDTO {
  time: number;
  cost: number;
}

export interface AssetOverviewStats {
  downtime: number;
  availability: number;
  downtimeEvents: number;
}
export interface DowntimesByAsset extends AssetMiniDTO {
  count: number;
  percent: number;
}
