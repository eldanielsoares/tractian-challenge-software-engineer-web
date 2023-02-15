import { AxiosInstance } from 'axios';
import { Workorders } from '../../domain/entities/workorders';
import { WorkordersGateway } from './../../domain/gateways/workorders.gateway';

export class WorkOrdersHttpGateways implements WorkordersGateway {
  constructor (private http: AxiosInstance){}

  async findAll(): Promise<Workorders[]> {
    const {data} = await this.http.get('/workorders');;
    return data;
  }
  
}