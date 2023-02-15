import { AxiosInstance } from 'axios';
import { Company } from '../../domain/entities/company';
import { CompanyGateway } from "../../domain/gateways/company-gateway";

export class CompanyHttpGateway implements CompanyGateway {
  constructor (private http: AxiosInstance){}

  async findCompany(id: string): Promise<Company> {
    const {data} = await this.http.get(`/companies/${id}`);

    return data;
  }
}