import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSupportRoutingModule } from './user-support-routing.module';
import { SBlogsComponent } from './s-blogs/s-blogs.component';
import { SAccountComponent } from './s-account/s-account.component';
import { SCloudDriveComponent } from './s-cloud-drive/s-cloud-drive.component';


@NgModule({
  declarations: [
    SBlogsComponent,
    SAccountComponent,
    SCloudDriveComponent
  ],
  imports: [
    CommonModule,
    UserSupportRoutingModule
  ]
})
export class UserSupportModule { }
