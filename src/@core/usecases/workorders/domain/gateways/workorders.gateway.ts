import { Workorders } from "../entities/workorders";

export interface WorkordersGateway {
  findAll(): Promise<Workorders[]>;
}