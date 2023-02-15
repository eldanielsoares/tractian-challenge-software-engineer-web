import { Workorders } from '../domain/entities/workorders';
import { WorkordersGateway } from './../domain/gateways/workorders.gateway';

export class WorkordersUsecase {
  constructor (private workordersGateway: WorkordersGateway){}

  async execute (): Promise<Workorders[]>{
    return this.workordersGateway.findAll()
  }
}