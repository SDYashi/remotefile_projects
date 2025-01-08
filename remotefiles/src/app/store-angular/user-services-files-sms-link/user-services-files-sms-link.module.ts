import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserServicesFilesSmsLinkRoutingModule } from './user-services-files-sms-link-routing.module';
import { UserServicesFilesSmsLinkComponent } from './user-services-files-sms-link/user-services-files-sms-link.component';


@NgModule({
  declarations: [
    
    UserServicesFilesSmsLinkComponent
  ],
  imports: [
    CommonModule,
    UserServicesFilesSmsLinkRoutingModule
  ]
})
export class UserServicesFilesSmsLinkModule { }
