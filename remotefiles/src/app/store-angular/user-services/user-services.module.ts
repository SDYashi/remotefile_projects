import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserServicesRoutingModule } from './user-services-routing.module';
import { UserServicesComponent } from './user-services/user-services.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserServicesComponent
  ],
  imports: [
    CommonModule,
    UserServicesRoutingModule,
        RouterModule,
        FormsModule,
  ]
})
export class UserServicesModule { }
