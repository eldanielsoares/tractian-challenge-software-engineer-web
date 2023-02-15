import { Company } from "../entities/company";

export interface CompanyGateway {
  findCompany(id: string): Promise<Company>;
}