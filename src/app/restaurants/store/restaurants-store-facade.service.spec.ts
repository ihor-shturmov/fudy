import { TestBed } from '@angular/core/testing';

import { RestaurantsStoreFacadeService } from './restaurants-store-facade.service';

describe('RestaurantsStoreFacadeService', () => {
  let service: RestaurantsStoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantsStoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
