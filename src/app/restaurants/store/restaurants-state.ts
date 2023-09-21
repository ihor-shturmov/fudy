import {Action, State, StateContext} from "@ngxs/store";
import {Restaurants} from "../types/restaurant";
import {
  AddRestaurantManager,
  ChangeRestaurantsPage,
  ChangeRestaurantsSort,
  GetRestaurants
} from "./restaurants-actions";
import {RestaurantsService} from "../services/restaurants.service";
import {catchError, Observable, of, tap} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Injectable} from "@angular/core";
import {ApiResponse, ApiResponseMeta} from "../../types/api-response";
import {DEFAULT_QUERY} from "../consts/default-query";
import {ApiQuery} from "../../types/api-query";

export interface RestaurantsStateModel {
  items: Restaurants;
  meta: ApiResponseMeta | null;
  query: ApiQuery;
}

@State<RestaurantsStateModel>({
  name: 'restaurants',
  defaults: {
    items: [],
    meta: null,
    query: DEFAULT_QUERY
  }
})
@Injectable()
export class RestaurantsState {

  constructor(private readonly restaurantService: RestaurantsService,
              private readonly matSnack: MatSnackBar) {
  }

  @Action(GetRestaurants)
  getRestaurants(ctx: StateContext<RestaurantsStateModel>, {query}: GetRestaurants): Observable<ApiResponse<Restaurants>> {
    return this.restaurantService.getRestaurants({...query, page: query.page + 1}).pipe(
      tap((response: ApiResponse<Restaurants>) => ctx.setState({
          ...ctx.getState(),
          items: response.data,
          meta: response.meta
        })
      )
    );
  }

  @Action(ChangeRestaurantsSort)
  changeRestaurantsSort(ctx: StateContext<RestaurantsStateModel>, {sort}: ChangeRestaurantsSort): void {
    const state: RestaurantsStateModel = ctx.getState();
    const query: ApiQuery = {
      ...state.query,
      status: sort.direction === 'desc' ? 'INACTIVE' : "ACTIVE"
    };
    ctx.setState({
      ...state,
      query
    })

    ctx.dispatch(new GetRestaurants(query))
  }

  @Action(ChangeRestaurantsPage)
  changeRestaurantsPage(ctx: StateContext<RestaurantsStateModel>, {pagination}: ChangeRestaurantsPage): void {
    const state: RestaurantsStateModel = ctx.getState();
    const query: ApiQuery = {
      ...state.query,
      page: pagination.pageIndex,
      take: pagination.pageSize
    };
    ctx.setState({
      ...state,
      query
    })

    ctx.dispatch(new GetRestaurants(query))
  }

  @Action(AddRestaurantManager)
  addRestaurantManager(ctx: StateContext<RestaurantsStateModel>, {request}: AddRestaurantManager) {
    return this.restaurantService.addManager(request).pipe(
      tap(() => this.matSnack.open('Manager was added successfully!', 'Got it!', {
        horizontalPosition: 'end',
        duration: 300
      })),
      catchError((err) => {
        this.matSnack.open('Ooops, something happened, please contact support center!', 'Got it!', {
          horizontalPosition: 'end',
          duration: 300
        })
        return of(err);
      }),
    )
  }

}
