import { IAssets } from "@/@core/usecases/assets/domain/models/assets.model";
import { ICompany } from "@/@core/usecases/company/domain/models/company.models";
import { IUser } from "@/@core/usecases/users/domain/models/users.model";

export interface IUnits {
  companyId: number;
  id: number;
  name: string;
}

export interface IChecklistOverview {
  completed: true;
  task: string;
}

export interface IWorkOrdersOverview {
  assetId: number;
  assignedUserIds: number[];
  checklist: IChecklistOverview[];
  description: string;
  id: number;
  priority: string;
  status: string;
  title: string;
}

export interface IOverview {
  assets: IAssets[];
  companies: ICompany[];
  units: IUnits[]; 
  users: IUser[];
  workorders: IWorkOrdersOverview[];

}