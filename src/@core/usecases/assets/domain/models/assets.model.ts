export interface IHealthHistory {
  status: string;
  timestamp: Date;
}

export interface ISpecifications {
  maxTemp?: number;
  power?: number;
  rpm?: number;
}

export interface IMetrics {
  lastUptimeAt: Date,
  totalCollectsUptime: Date,
  totalUptime: Date,
}


export interface IAssets {
  assignedUserIds: number[];
  companyId: number;
  healthHistory: IHealthHistory[];
  healthscore: number;
  id: number;
  image: string;
  model: string;
  name: string;
  sensors: string[];
  specifications: ISpecifications;
  metrics: IMetrics;
  status: string;
  unitId: number

}