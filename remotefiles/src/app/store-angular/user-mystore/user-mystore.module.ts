import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMystoreRoutingModule } from './user-mystore-routing.module';
import { UserMystoreComponent } from './user-mystore/user-mystore.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserMystoreComponent
  ],
  imports: [
    CommonModule,
    UserMystoreRoutingModule,
        RouterModule,
        FormsModule,
  ]
})
export class UserMystoreModule { }
