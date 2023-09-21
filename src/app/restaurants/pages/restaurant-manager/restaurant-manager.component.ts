import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantsStoreFacadeService} from "../../store/restaurants-store-facade.service";
import {AddManagerBody} from "../../types/restaurant-manager";
import {AddManagerComponent} from "../../components/add-manager/add-manager.component";

@Component({
  selector: 'app-restaurant-manager',
  standalone: true,
  imports: [CommonModule, AddManagerComponent],
  templateUrl: './restaurant-manager.component.html',
  styleUrls: ['./restaurant-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantManagerComponent {
  @Input() restaurantId!: string;

  constructor(private readonly facade: RestaurantsStoreFacadeService) {
  }

  onAddManager(body: AddManagerBody): void {
    this.facade.addRestaurantManager({ restaurantId: this.restaurantId, body });
  }
}
