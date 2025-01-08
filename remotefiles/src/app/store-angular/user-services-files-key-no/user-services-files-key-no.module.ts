import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserServicesFilesKeyNoRoutingModule } from './user-services-files-key-no-routing.module';
import { UserServicecsFilesKeyNoComponent } from './user-servicecs-files-key-no/user-servicecs-files-key-no.component';


@NgModule({
  declarations: [
    UserServicecsFilesKeyNoComponent
  ],
  imports: [
    CommonModule,
    UserServicesFilesKeyNoRoutingModule
  ]
})
export class UserServicesFilesKeyNoModule { }
