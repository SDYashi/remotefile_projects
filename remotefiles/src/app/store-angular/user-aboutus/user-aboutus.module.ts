import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAboutusRoutingModule } from './user-aboutus-routing.module';
import { UserAboutUsComponent } from './user-about-us/user-about-us.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserAboutUsComponent
  ],
  imports: [
    CommonModule,
    UserAboutusRoutingModule,
        RouterModule,
        FormsModule,
  ]
})
export class UserAboutusModule { }
