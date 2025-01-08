import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountPasswordResetRoutingModule } from './user-account-password-reset-routing.module';
import { UserAccountPasswordResetComponent } from './user-account-password-reset/user-account-password-reset.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserAccountPasswordResetComponent
  ],
  imports: [
    CommonModule,
    UserAccountPasswordResetRoutingModule,
        RouterModule,
        FormsModule,
  ]
})
export class UserAccountPasswordResetModule { }
