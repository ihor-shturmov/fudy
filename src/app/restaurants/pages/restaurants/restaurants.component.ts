import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantsStoreFacadeService} from "../../store/restaurants-store-facade.service";
import {Observable} from "rxjs";
import {Restaurants} from "../../types/restaurant";
import {RestaurantsListComponent} from "../../components/restaurants-list/restaurants-list.component";
import {Sort} from "@angular/material/sort";
import {PageEvent} from "@angular/material/paginator";
import {ApiResponseMeta} from "../../../types/api-response";

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule, RestaurantsListComponent],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantsComponent {
  readonly restaurants$: Observable<Restaurants> = this.facade.restaurants$;
  readonly meta$: Observable<ApiResponseMeta | null> = this.facade.meta$;

  constructor(private readonly facade: RestaurantsStoreFacadeService) {
  }

  onSort(sort: Sort): void {
    this.facade.changeRestaurantsSort(sort);
  }

  onChangePage(page: PageEvent): void {
    this.facade.changeRestaurantsPage(page);
  }
}
