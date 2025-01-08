import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserMystoreComponent } from './user-mystore/user-mystore.component';

const routes: Routes = [
  {
    path: '',
    component: UserMystoreComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMystoreRoutingModule { }
