import { IUser } from "@/@core/usecases/users/domain/models/users.model";
import { ICompany } from "../models/company.models";

export class Company {
  constructor (private props: ICompany){}

  get id(){
    return this.props.id;
  }

  get name(){
    return this.props.name;
  }

  toJSON(){
    return {
      id: this.id,
      name: this.name
    }
  }
}