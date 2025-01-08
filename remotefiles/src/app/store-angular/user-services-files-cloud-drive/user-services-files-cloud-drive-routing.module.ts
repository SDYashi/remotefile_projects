import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserServicesFilesCloudDriveComponent } from './user-services-files-cloud-drive/user-services-files-cloud-drive.component';

const routes: Routes = [
  {
    path: '',
    component: UserServicesFilesCloudDriveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserServicesFilesCloudDriveRoutingModule { }
