import { IUser } from "../models/users.model";


export class User {
  constructor (public props : IUser){}

  get companyId(){
    return this.props.companyId;
  }

  get email(){
    return this.props.email;
  }
  get id(){
    return this.props.id;
  }
  get name(){
    return this.props.name;
  }
  get unitId(){
    return this.props.unitId;
  }

  toJSON() {
    return {
      companyId: this.companyId,
      email: this.email,
      id: this.id,
      name: this.name,
      unitId: this.unitId
    }
  }
}