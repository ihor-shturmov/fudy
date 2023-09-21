import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from "@ngxs/store";
import {RestaurantsState} from "./store/restaurants-state";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RestaurantsRoutingModule} from "./restaurants-routing.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    NgxsModule.forFeature([RestaurantsState]),
    MatSnackBarModule
  ]
})
export class RestaurantsModule {
}
