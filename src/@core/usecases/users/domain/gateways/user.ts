import { User } from "../entities/user";


export interface UserGateway {
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User>
}