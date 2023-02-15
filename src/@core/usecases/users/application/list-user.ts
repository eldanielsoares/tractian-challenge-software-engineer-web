import { User } from '../domain/entities/user';
import { UserGateway } from './../domain/gateways/user';

export class ListUserUsecase {
  constructor (private userGatewayHttp : UserGateway){}

  async execute(): Promise<User[]>{
    return this.userGatewayHttp.findAll();
  }

}