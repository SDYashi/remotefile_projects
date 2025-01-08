import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserServicesFilesPc2pcRoutingModule } from './user-services-files-pc2pc-routing.module';
import { UserServicesFilesPc2pcComponent } from './user-services-files-pc2pc/user-services-files-pc2pc.component';


@NgModule({
  declarations: [
    UserServicesFilesPc2pcComponent
  ],
  imports: [
    CommonModule,
    UserServicesFilesPc2pcRoutingModule
  ]
})
export class UserServicesFilesPc2pcModule { }
