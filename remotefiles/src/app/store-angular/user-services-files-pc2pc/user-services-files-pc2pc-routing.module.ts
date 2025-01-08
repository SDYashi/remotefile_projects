import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserServicesFilesPc2pcComponent } from './user-services-files-pc2pc/user-services-files-pc2pc.component';

const routes: Routes = [
  {
    path: '',
    component: UserServicesFilesPc2pcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserServicesFilesPc2pcRoutingModule { }
