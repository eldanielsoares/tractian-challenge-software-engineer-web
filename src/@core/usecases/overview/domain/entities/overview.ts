import { IOverview } from "../models/overview.models";

export class Overview {
  constructor (private props : IOverview){}

  get assets(){
    return this.props.assets;
  }

  get companies(){
    return this.props.companies;
  }

  get units(){
    return this.props.units;
  }

  get users(){
    return this.props.users
  }

  get workorders(){
    return this.props.workorders;
  }

  toJSON () {
    return {
      assets: this.assets,
      companies: this.companies,
      units: this.units,
      users: this.users,
      workorders: this.workorders,
    }
  }
}