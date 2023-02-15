import { User } from "../domain/entities/user";
import { UserHttpGateway } from "../infra/gateways/user-http.gateway";

export class UserByIdUsecase {
  constructor(private userGateway: UserHttpGateway){}

  async execute(id: string): Promise<User> {
    return this.userGateway.findOne(id);
  }
}