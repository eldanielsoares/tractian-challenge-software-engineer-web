import { Assets } from "../domain/entities/assets";
import { AssetsGateway } from "../domain/gateways/list-assets";

export class ListAssetsUsecase {
  constructor (private listAssetsGateway: AssetsGateway){}

  async execute(): Promise<Assets[]>{
    return this.listAssetsGateway.findAll();
  }
}