import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountAddComponent } from './user-account-add/user-account-add.component';

const routes: Routes = [
  {
    path: '',
    component: UserAccountAddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccountAddRoutingModule { }
