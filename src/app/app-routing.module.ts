import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'restaurants'
}, {
  path: 'restaurants',
  loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
