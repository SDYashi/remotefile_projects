import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDownloadsRoutingModule } from './user-downloads-routing.module';
import { UserDownloadComponent } from './user-download/user-download.component';


@NgModule({
  declarations: [
    UserDownloadComponent
  ],
  imports: [
    CommonModule,
    UserDownloadsRoutingModule
  ]
})
export class UserDownloadsModule { }
