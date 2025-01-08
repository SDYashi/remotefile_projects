import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMystoreRoutingModule } from './user-mystore-routing.module';
import { UserMystoreComponent } from './user-mystore/user-mystore.component';


@NgModule({
  declarations: [
    UserMystoreComponent
  ],
  imports: [
    CommonModule,
    UserMystoreRoutingModule
  ]
})
export class UserMystoreModule { }
