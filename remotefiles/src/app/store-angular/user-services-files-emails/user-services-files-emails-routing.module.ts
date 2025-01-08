import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserServicesFilesEmailsComponent } from './user-services-files-emails/user-services-files-emails.component';

const routes: Routes = [
  {
    path: '',
    component: UserServicesFilesEmailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserServicesFilesEmailsRoutingModule { }
