import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreAngularModule } from './store-angular/store-angular.module';
import { MystoreUsersModule } from './mystore-users/mystore-users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreAngularModule,
    MystoreUsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
