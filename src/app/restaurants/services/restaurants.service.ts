import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Restaurants} from "../types/restaurant";
import {AddManager} from "../types/restaurant-manager";
import {ApiResponse} from "../../types/api-response";
import {ApiQuery} from "../../types/api-query";
import {Params} from "@angular/router";

@Injectable({providedIn: 'root'})
export class RestaurantsService {
  // This should be in env file if we have one
  private readonly apiUrl: string = 'https://dev-api.fudy.eu/restaurants';

  // HttpClient can be encapsulated in ApiService and then changed to whatever we want
  constructor(private readonly http: HttpClient) {
  }

  getRestaurants(query: ApiQuery): Observable<ApiResponse<Restaurants>> {
    const params: Params = query;
    return this.http.get<ApiResponse<Restaurants>>(`${this.apiUrl}`, {params});
  }

  addManager(request: AddManager): Observable<unknown> {
    return this.http.post<unknown>(`${this.apiUrl}/${request.restaurantId}/manager`, request.body);
  }
}
