import { AxiosInstance } from 'axios';
import { Overview } from '../../domain/entities/overview';
import { OverviewGateway } from './../../domain/gateways/overview.gateway';

export class OverviewHttpGateway implements OverviewGateway {
  constructor (private http : AxiosInstance){}
  
  async findOverview(): Promise<Overview> {
    const {data} = await this.http.get('/db');
    return new Overview({
      assets: data.assets,
      companies: data.companies,
      units: data.units,
      users: data.users,
      workorders: data.workorders
    })
  }

  
}