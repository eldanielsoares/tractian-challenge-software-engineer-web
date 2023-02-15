import { Assets } from '../domain/entities/assets';
import { AssetsHttpGateway } from './../infra/gateways/assets-http.gateway';

export class AssetByIdUsecase {
  constructor (private assetGateway: AssetsHttpGateway ){}

  async execute(id: string): Promise<Assets>{
    return this.assetGateway.findOne(id);
  }
}