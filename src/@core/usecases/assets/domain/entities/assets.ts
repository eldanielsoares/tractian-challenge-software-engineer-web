import { IAssets } from "../models/assets.model";

export class Assets {
  constructor (public props: IAssets){}

  get assignedUserIds(){
    return this.props.assignedUserIds;
  }

  get companyId(){
    return this.props.companyId;
  }

  get healthHistory(){
    return this.props.healthHistory;
  }

  get healthscore(){
    return this.props.healthscore;
  }

  get id(){
    return this.props.id;
  }

  get image(){
    return this.props.image;
  }

  get model(){
    return this.props.model;
  }

  get name(){
    return this.props.name;
  }

  get sensors(){
    return this.props.sensors;
  }

  get specifications(){
    return this.props.specifications;
  }

  get metrics(){
    return this.props.metrics;
  }

  get status(){
    return this.props.status;
  }

  get unitId(){
    return this.props.unitId;
  }

  toJSON(){
    return {
      assignedUserIds: this.assignedUserIds,
      companyId: this.companyId,
      healthHistory: this.healthHistory,
      healthscore: this.healthscore,
      id: this.id,
      image: this.image,
      model: this.model,
      name: this.name,
      sensors: this.sensors,
      specifications: this.specifications,
      status: this.status,
      unitId: this.unitId
    }
  }
}