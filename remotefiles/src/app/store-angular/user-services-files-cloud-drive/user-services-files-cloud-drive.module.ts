import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserServicesFilesCloudDriveRoutingModule } from './user-services-files-cloud-drive-routing.module';
import { UserServicesFilesCloudDriveComponent } from './user-services-files-cloud-drive/user-services-files-cloud-drive.component';


@NgModule({
  declarations: [
    UserServicesFilesCloudDriveComponent
  ],
  imports: [
    CommonModule,
    UserServicesFilesCloudDriveRoutingModule
  ]
})
export class UserServicesFilesCloudDriveModule { }
