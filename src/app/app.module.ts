import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {NgxsDispatchPluginModule} from "@ngxs-labs/dispatch-decorator";
import {NgxsModule} from "@ngxs/store";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot(
      [],
      {developmentMode: true}
    ),
    NgxsDispatchPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
