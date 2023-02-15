import { Overview } from "../domain/entities/overview";
import { OverviewGateway } from "../domain/gateways/overview.gateway";

export class OverviewUsecase {
  constructor (private overviewGateway: OverviewGateway){}

  async execute(): Promise<Overview>{
    return this.overviewGateway.findOverview()
  }
}