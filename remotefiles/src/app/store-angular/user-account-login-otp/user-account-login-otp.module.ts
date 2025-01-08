import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountLoginOtpRoutingModule } from './user-account-login-otp-routing.module';
import { UserAccountLoginOtpComponent } from './user-account-login-otp/user-account-login-otp.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserAccountLoginOtpComponent
  ],
  imports: [
    CommonModule,
    UserAccountLoginOtpRoutingModule,
        RouterModule,
        FormsModule,
  ]
})
export class UserAccountLoginOtpModule { }
