import { Assets } from "../entities/assets";

export interface AssetsGateway {
  findAll(): Promise<Assets[]>;
  findOne(id: string): Promise<Assets>;
}