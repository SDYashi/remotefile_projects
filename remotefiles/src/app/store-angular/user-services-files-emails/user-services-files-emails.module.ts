import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserServicesFilesEmailsRoutingModule } from './user-services-files-emails-routing.module';
import { UserServicesFilesEmailsComponent } from './user-services-files-emails/user-services-files-emails.component';


@NgModule({
  declarations: [
    UserServicesFilesEmailsComponent
  ],
  imports: [
    CommonModule,
    UserServicesFilesEmailsRoutingModule
  ]
})
export class UserServicesFilesEmailsModule { }
