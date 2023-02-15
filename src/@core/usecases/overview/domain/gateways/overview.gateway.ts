import { Overview } from "../entities/overview";

export interface OverviewGateway {
  findOverview(): Promise<Overview>;
}