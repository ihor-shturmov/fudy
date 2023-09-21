import {Selector} from "@ngxs/store";
import {RestaurantsState, RestaurantsStateModel} from "./restaurants-state";
import {Restaurants} from "../types/restaurant";
import {ApiResponseMeta} from "../../types/api-response";

export class RestaurantsSelectors {
  @Selector([RestaurantsState])
  static restaurantsItems(state: RestaurantsStateModel): Restaurants {
    return state.items;
  }

  @Selector([RestaurantsState])
  static restaurantsMeta(state: RestaurantsStateModel): ApiResponseMeta | null {
    return state.meta;
  }
}
