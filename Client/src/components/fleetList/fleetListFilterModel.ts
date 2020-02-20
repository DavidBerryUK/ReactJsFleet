import ListItemModel from "../../models/list/ListItemModel";

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

export default class FleetListFilterModel {

    pageNumber : number = 1;
    rowsPerPage : number = 6;
    sortedColumn : enumColumnNames = enumColumnNames.registration;
    sortDirection : enumSortDirection = enumSortDirection.asc;

    filterRegistration: String = "";

    filterColour : ListItemModel = new ListItemModel();
    filterDoors  : ListItemModel = new ListItemModel();
    filterMake  : ListItemModel = new ListItemModel();
    filterModel  : ListItemModel = new ListItemModel();
    filterTransmission  : ListItemModel = new ListItemModel();        

    clone() : FleetListFilterModel {
        var model = new FleetListFilterModel();        
        model.sortDirection = this.sortDirection;
        model.sortedColumn = this.sortedColumn;
        model.pageNumber = this.pageNumber;
        model.rowsPerPage = this.rowsPerPage;
        model.filterColour = this.filterColour;
        model.filterDoors = this.filterDoors;
        model.filterMake = this.filterMake;
        model.filterModel = this.filterModel;
        model.filterRegistration = this.filterRegistration;
        model.filterTransmission = this.filterTransmission;
        return model;
    }

}