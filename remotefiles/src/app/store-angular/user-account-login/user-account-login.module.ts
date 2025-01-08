import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountLoginRoutingModule } from './user-account-login-routing.module';
import { UserAccountLoginComponent } from './user-account-login/user-account-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserAccountLoginComponent
  ],
  imports: [
    CommonModule,
    UserAccountLoginRoutingModule,
        RouterModule,
        FormsModule,
  ]
})
export class UserAccountLoginModule { }
