import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountPasswordResetComponent } from './user-account-password-reset/user-account-password-reset.component';

const routes: Routes = [
  {
    path: '',
    component: UserAccountPasswordResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountPasswordResetRoutingModule { }
