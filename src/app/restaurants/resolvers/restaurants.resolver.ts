import {ResolveFn} from '@angular/router';
import {inject} from "@angular/core";
import {RestaurantsStoreFacadeService} from "../store/restaurants-store-facade.service";

export const restaurantsResolver: ResolveFn<boolean> = (): boolean => {
  const restaurantsStoreFacade: RestaurantsStoreFacadeService = inject(RestaurantsStoreFacadeService);
  restaurantsStoreFacade.getRestaurants();

  return true;
};
