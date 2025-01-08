import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDownloadsRoutingModule } from './user-downloads-routing.module';
import { UserDownloadComponent } from './user-download/user-download.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserDownloadComponent
  ],
  imports: [
    CommonModule,
    UserDownloadsRoutingModule,
        RouterModule,
        FormsModule,
  ]
})
export class UserDownloadsModule { }
