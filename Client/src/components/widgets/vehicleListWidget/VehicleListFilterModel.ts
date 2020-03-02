import { IDispatchObject }                      from '../../../services/applicationContext/ApplicationContext';
import ListItemModel                            from "../../../models/list/ListItemModel";

export enum enumSortDirection {
  asc = "asc",
  desc = "desc"
}

export enum enumColumnNames {
  registration = "registration",
  make = "make",
  model = "model",
  Transmission = "transmission",
  doors = "doors",
  colour = "colour"
}

export default class VehicleListFilterModel implements IDispatchObject {

  public static className = "VehicleListFilterModel"

  pageNumber: number = 1;
  rowsPerPage: number = 6;
  sortedColumn: enumColumnNames = enumColumnNames.registration;
  sortDirection: enumSortDirection = enumSortDirection.asc;

  filterRegistration: String = "";

  filterColour: ListItemModel = new ListItemModel();
  filterDoors: ListItemModel = new ListItemModel();
  filterMake: ListItemModel = new ListItemModel();
  filterModel: ListItemModel = new ListItemModel();
  filterTransmission: ListItemModel = new ListItemModel();


  clone(): VehicleListFilterModel {
    var model = Object.assign(new VehicleListFilterModel(), this);
    return model;
  }

  // IDispatchObject Interface
  public get entityName(): string {
    return VehicleListFilterModel.className;
  }
}