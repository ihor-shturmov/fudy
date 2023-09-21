import {AddManager} from "../types/restaurant-manager";
import {ApiQuery} from "../../types/api-query";
import {Sort} from "@angular/material/sort";
import {PageEvent} from "@angular/material/paginator";

export class GetRestaurants {
  static readonly type: string = '[Restaurants page] Get restaurants'

  constructor(readonly query: ApiQuery) {
  }
}

export class ChangeRestaurantsSort {
  static readonly type: string = '[Restaurants page] Change restaurants sort'

  constructor(readonly sort: Sort) {
  }
}

export class ChangeRestaurantsPage {
  static readonly type: string = '[Restaurants page] Change restaurants pagination'

  constructor(readonly pagination: PageEvent) {
  }
}

export class AddRestaurantManager {
  static readonly type: string = '[Restaurant manager page] Add restaurant manager'

  constructor(readonly request: AddManager) {
  }
}
