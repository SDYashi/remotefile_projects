import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountLoginComponent } from './user-account-login/user-account-login.component';

const routes: Routes = [
  {
    path: '',
    component: UserAccountLoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountLoginRoutingModule { }
