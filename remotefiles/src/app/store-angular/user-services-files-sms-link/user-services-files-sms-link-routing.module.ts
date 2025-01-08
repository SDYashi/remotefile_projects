import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserServicesFilesSmsLinkComponent } from './user-services-files-sms-link/user-services-files-sms-link.component';

const routes: Routes = [
  {
    path: '',
    component: UserServicesFilesSmsLinkComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserServicesFilesSmsLinkRoutingModule { }
