import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {restaurantsResolver} from "./resolvers/restaurants.resolver";

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  resolve: {
    restaurants: restaurantsResolver
  },
  loadComponent: () => import('./pages/restaurants/restaurants.component').then(c => c.RestaurantsComponent),
}, {
  path: 'add-manager',
  children: [
    {
      path: ':restaurantId',
      pathMatch: 'full',
      loadComponent: () => import('./pages/restaurant-manager/restaurant-manager.component').then(c => c.RestaurantManagerComponent)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule {
}
