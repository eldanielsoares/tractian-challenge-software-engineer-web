import { AxiosInstance } from 'axios';
import { Assets } from '../../domain/entities/assets';
import { AssetsGateway } from '../../domain/gateways/list-assets';

export class AssetsHttpGateway implements AssetsGateway {
  constructor (private http: AxiosInstance){}
  
  async findAll(): Promise<Assets[]> {
    const {data} = await this.http.get('/assets');

    return data;
  }

  async findOne(id: string): Promise<Assets> {
    const {data} = await this.http.get(`/assets/${id}`);
    return data;
  }

}