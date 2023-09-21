import {TestBed} from '@angular/core/testing';
import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';

import {restaurantsResolver} from './restaurants.resolver';
import {RestaurantsStoreFacadeService} from "../store/restaurants-store-facade.service";

describe('restaurantsResolver', () => {
  let restaurantsStoreFacadeService: jasmine.SpyObj<RestaurantsStoreFacadeService>;
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => restaurantsResolver(...resolverParameters));

  beforeEach(() => {
    const facadeSpy = jasmine.createSpyObj('RestaurantsStoreFacadeService', ['getRestaurants']);

    TestBed.configureTestingModule({
      providers: [
        {provide: RestaurantsStoreFacadeService, useValue: facadeSpy}
      ]
    });

    restaurantsStoreFacadeService = TestBed.inject(RestaurantsStoreFacadeService) as jasmine.SpyObj<RestaurantsStoreFacadeService>;
  });

  it('should create', () => {
    expect(executeResolver).toBeTruthy();
  });

  it('should call getRestaurants when resolving', () => {
    executeResolver({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)
    expect(restaurantsStoreFacadeService.getRestaurants).toHaveBeenCalledTimes(1);
  });
});
