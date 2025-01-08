import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountAddRoutingModule } from './user-account-add-routing.module';
import { UserAccountAddComponent } from './user-account-add/user-account-add.component';


@NgModule({
  declarations: [
    UserAccountAddComponent
  ],
  imports: [
    CommonModule,
    UserAccountAddRoutingModule
  ]
})
export class UserAccountAddModule { }
