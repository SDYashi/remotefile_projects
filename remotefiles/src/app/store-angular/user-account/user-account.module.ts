import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserPwdResetComponent } from './user-pwd-reset/user-pwd-reset.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLoginOtpComponent } from './user-login-otp/user-login-otp.component';
import { UserShareExperienceComponent } from './user-share-experience/user-share-experience.component';
import { UserShareFeedbackComponent } from './user-share-feedback/user-share-feedback.component';


@NgModule({
  declarations: [
    UserAddComponent,
    UserPwdResetComponent,
    UserLoginComponent,
    UserLoginOtpComponent,
    UserShareExperienceComponent,
    UserShareFeedbackComponent
  ],
  imports: [
    CommonModule,
    UserAccountRoutingModule
  ]
})
export class UserAccountModule { }
