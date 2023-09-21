import {Injectable} from '@angular/core';
import {AddManager} from "../types/restaurant-manager";
import {Select} from "@ngxs/store";
import {
  AddRestaurantManager,
  ChangeRestaurantsPage,
  ChangeRestaurantsSort,
  GetRestaurants
} from "./restaurants-actions";
import {RestaurantsSelectors} from "./restaurants-selectors";
import {Observable} from "rxjs";
import {Restaurants} from "../types/restaurant";
import {Dispatch} from "@ngxs-labs/dispatch-decorator";
import {ApiQuery} from "../../types/api-query";
import {DEFAULT_QUERY} from "../consts/default-query";
import {Sort} from "@angular/material/sort";
import {PageEvent} from "@angular/material/paginator";
import {ApiResponseMeta} from "../../types/api-response";

@Injectable({providedIn: 'root'})
export class RestaurantsStoreFacadeService {
  @Select(RestaurantsSelectors.restaurantsItems)
  readonly restaurants$!: Observable<Restaurants>;

  @Select(RestaurantsSelectors.restaurantsMeta)
  readonly meta$!: Observable<ApiResponseMeta | null>;

  @Dispatch()
  getRestaurants(query: ApiQuery = DEFAULT_QUERY): GetRestaurants {
    return new GetRestaurants(query);
  }

  @Dispatch()
  changeRestaurantsSort(sort: Sort): ChangeRestaurantsSort {
    return new ChangeRestaurantsSort(sort);
  }

  @Dispatch()
  changeRestaurantsPage(pagination: PageEvent): ChangeRestaurantsPage {
    return new ChangeRestaurantsPage(pagination);
  }

  @Dispatch()
  addRestaurantManager(body: AddManager): AddRestaurantManager {
    return new AddRestaurantManager(body);
  }
}
