import { Company } from "../domain/entities/company";
import { CompanyGateway } from "../domain/gateways/company-gateway";

export class CompanyByIdUsecase {
  constructor (private companyGateway: CompanyGateway){}

  async execute(id: string): Promise<Company>{
    return this.companyGateway.findCompany(id);
  }
}