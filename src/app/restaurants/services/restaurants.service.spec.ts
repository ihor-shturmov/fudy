import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestaurantsService } from './restaurants.service';
import { FormControl } from '@angular/forms';
import {ApiQuery} from "../../types/api-query";
import {ApiResponse} from "../../types/api-response";
import {Restaurants} from "../types/restaurant";
import {AddManager, AddManagerBodyForm} from "../types/restaurant-manager";

describe('RestaurantsService', () => {
  let service: RestaurantsService;
  let httpMock: HttpTestingController;

  const apiUrl = 'https://dev-api.fudy.eu/restaurants';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestaurantsService]
    });

    service = TestBed.inject(RestaurantsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch restaurants', () => {
    const query: ApiQuery = {
      page: 1,
      take: 10,
      status: 'ACTIVE'
    };

    const expectedResponse: ApiResponse<Restaurants> = {
      data: [
        {
          id: '1',
          name: 'Restaurant 1',
          status: 'ACTIVE',
          address: { formattedAddress: '1234 Elm St, Springfield' },
          website: 'https://restaurant1.com'
        },
        // ... add more restaurants if needed
      ],
      meta: {
        hasNextPage: true,
        hasPreviousPage: false,
        itemCount: 10,
        page: 1,
        pageCount: 2,
        take: 10
      }
    };

    service.getRestaurants(query).subscribe((response) => {
      expect(response).toEqual(expectedResponse);
    });

    const request = httpMock.expectOne(`${apiUrl}?page=${query.page}&take=${query.take}&status=${query.status}`);
    expect(request.request.method).toBe('GET');
    request.flush(expectedResponse);
  });

  it('should add a manager', () => {
    const request: AddManager = {
      restaurantId: '123',
      body: {
        email: 'test@example.com',
        password: 'password123'
      }
    };

    service.addManager(request).subscribe(() => {});

    const addManagerRequest = httpMock.expectOne(`${apiUrl}/${request.restaurantId}/manager`);
    expect(addManagerRequest.request.method).toBe('POST');
    expect(addManagerRequest.request.body).toEqual(request.body);
    addManagerRequest.flush({});
  });

  it('should create AddManagerBodyForm', () => {
    const addManagerBodyForm: AddManagerBodyForm = {
      email: new FormControl<string>('test@example.com', { nonNullable: true }),
      password: new FormControl<string>('password123', { nonNullable: true })
    };

    expect(addManagerBodyForm.email.value).toBe('test@example.com');
    expect(addManagerBodyForm.password.value).toBe('password123');
  });
});
