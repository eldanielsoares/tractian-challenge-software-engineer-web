export interface IChecklist {
  completed: true;
  task: string;
}

export interface IWorkOrders {
  assetId: number;
  assignedUserIds: number[];
  checklist: IChecklist[];
  description: string;
  id: number;
  priority: string;
  status: string;
  title: string;
}