import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserContactsRoutingModule } from './user-contacts-routing.module';
import { UserContactUsComponent } from './user-contact-us/user-contact-us.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserContactUsComponent
  ],
  imports: [
    CommonModule,
    UserContactsRoutingModule,
        RouterModule,
        FormsModule,
  ]
})
export class UserContactsModule { }
