import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserContactsRoutingModule } from './user-contacts-routing.module';
import { UserContactUsComponent } from './user-contact-us/user-contact-us.component';


@NgModule({
  declarations: [
    UserContactUsComponent
  ],
  imports: [
    CommonModule,
    UserContactsRoutingModule
  ]
})
export class UserContactsModule { }
