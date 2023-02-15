import { IWorkOrders } from "../models/workorders.models";

export class Workorders {
  constructor (private props : IWorkOrders){}

  get assetId(){
    return this.props.assetId;
  }

  get assignedUserIds(){
    return this.props.assignedUserIds;
  }

  get checklist(){
    return this.props.checklist;
  }

  get description(){
    return this.props.description;
  }

  get id(){
    return this.props.id;
  }

  get priority(){
    return this.props.priority;
  }

  get status(){
    return this.props.status;
  }

  get title(){
    return this.props.title;
  }

  toSON(){
    return {
      assetId: this.assetId,
      assignedUserId: this.assignedUserIds,
      checklist: this.checklist,
      description: this.description,
      id: this.id,
      priority: this.id,
      status: this.status,
      title: this.title
    }
  }
}