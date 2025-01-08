import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountLoginOtpComponent } from './user-account-login-otp/user-account-login-otp.component';

const routes: Routes = [
  {
    path: '',
    component: UserAccountLoginOtpComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountLoginOtpRoutingModule { }
