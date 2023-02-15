import { AxiosInstance } from 'axios';
import { User } from "../../domain/entities/user";
import { UserGateway } from "../../domain/gateways/user";

export class UserHttpGateway implements UserGateway {

  constructor (private http: AxiosInstance){}

  async findAll(): Promise<User[]> {
    const {data} = await this.http.get('/users');
    return data;
  }
  async findOne(id: string): Promise<User> {
    const {data} = await this.http.get(`/users/${id}` );
    return data;
  }

}