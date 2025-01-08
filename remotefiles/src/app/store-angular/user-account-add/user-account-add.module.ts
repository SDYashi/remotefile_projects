import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountAddRoutingModule } from './user-account-add-routing.module';
import { UserAccountAddComponent } from './user-account-add/user-account-add.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserAccountAddComponent
  ],
  imports: [
    CommonModule,
    UserAccountAddRoutingModule,
        RouterModule,
        FormsModule,
  ]
})
export class UserAccountAddModule { }
