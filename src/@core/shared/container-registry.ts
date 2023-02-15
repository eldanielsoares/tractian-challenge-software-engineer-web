import 'reflect-metadata';
import http from './infra/http';
import { Container } from 'inversify';

import { OverviewHttpGateway } from '../usecases/overview/infra/gateways/overview-http.gateway';
import { OverviewUsecase } from '../usecases/overview/application/overview-usecase';

import { AssetsHttpGateway } from '../usecases/assets/infra/gateways/assets-http.gateway';
import { ListAssetsUsecase } from '../usecases/assets/application/list-assets-usecase';
import { AssetByIdUsecase } from '../usecases/assets/application/assetById-usecase';


import { WorkOrdersHttpGateways } from './../usecases/workorders/infra/gateways/workorders-http.gateways';
import { WorkordersUsecase } from './../usecases/workorders/application/list-workorders-usecase';

import { UserHttpGateway } from './../usecases/users/infra/gateways/user-http.gateway';
import { ListUserUsecase } from '../usecases/users/application/list-user';
import { UserByIdUsecase } from '../usecases/users/application/userById';

import { CompanyHttpGateway } from '../usecases/company/infra/gateways/company-http.gateway';
import { CompanyByIdUsecase } from '../usecases/company/application/companyById-usecase';

export const container = new Container();

export const Registry = {
  AxiosAdapter: Symbol.for('AxiosAdapter'),

  ListAssetsUsecase: Symbol.for('ListAssetsUsecase'),
  AssetByIdUsecase: Symbol.for('AssetByIdUsecase'),
  AssetsGateway: Symbol.for('AssetsGateway'),

  ListUsersUsecase: Symbol.for('ListUsersUsecase'),
  UserByIdUseCase: Symbol.for('UserByIdUseCase'),
  UsersGateway: Symbol.for('UsersGateway'),
  
  CompanyUseCase: Symbol.for('CompanyUsecase'),
  CompanyGateway: Symbol.for('CompanyGateway'),


  OverviewUsecase: Symbol.for('OverviewUsecase'),
  OverviewGateway: Symbol.for('OverviewGateway'),

  WorkordersUsecase : Symbol.for('WorkordersUsecase'),
  WorkordersGateway : Symbol.for('WorkordersGateway'),
}

// ### HTTP

container.bind(Registry.AxiosAdapter).toConstantValue(http);

// ### GATEWAYS

container.bind(Registry.AssetsGateway).toDynamicValue((context)=> {
  return new AssetsHttpGateway(context.container.get(Registry.AxiosAdapter));
});


container.bind(Registry.UsersGateway).toDynamicValue((context)=> {
  return new UserHttpGateway(context.container.get(Registry.AxiosAdapter));
});

container.bind(Registry.CompanyGateway).toDynamicValue((context)=> {
  return new CompanyHttpGateway(context.container.get(Registry.AxiosAdapter));
});


container.bind(Registry.OverviewGateway).toDynamicValue((context)=> {
  return new OverviewHttpGateway(context.container.get(Registry.AxiosAdapter));
});

container.bind(Registry.WorkordersGateway).toDynamicValue((context)=> {
  return new WorkOrdersHttpGateways(context.container.get(Registry.AxiosAdapter));
});


// ### USECASES

container.bind(Registry.ListAssetsUsecase).toDynamicValue((context)=> {
  return new ListAssetsUsecase(context.container.get(Registry.AssetsGateway));
});
container.bind(Registry.AssetByIdUsecase).toDynamicValue((context)=> {
  return new AssetByIdUsecase(context.container.get(Registry.AssetsGateway));
});


container.bind(Registry.ListUsersUsecase).toDynamicValue((context)=> {
  return new ListUserUsecase(context.container.get(Registry.UsersGateway));
});

container.bind(Registry.UserByIdUseCase).toDynamicValue((context)=> {
  return new UserByIdUsecase(context.container.get(Registry.UsersGateway));
});


container.bind(Registry.CompanyUseCase).toDynamicValue((context)=> {
  return new CompanyByIdUsecase(context.container.get(Registry.CompanyGateway));
});


container.bind(Registry.OverviewUsecase).toDynamicValue((context)=> {
  return new OverviewUsecase(context.container.get(Registry.OverviewGateway));
});


container.bind(Registry.WorkordersUsecase).toDynamicValue((context)=> {
  return new WorkordersUsecase(context.container.get(Registry.WorkordersGateway));
});