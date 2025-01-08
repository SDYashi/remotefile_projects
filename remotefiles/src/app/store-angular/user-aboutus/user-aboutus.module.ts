import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAboutusRoutingModule } from './user-aboutus-routing.module';
import { UserAboutUsComponent } from './user-about-us/user-about-us.component';


@NgModule({
  declarations: [
    UserAboutUsComponent
  ],
  imports: [
    CommonModule,
    UserAboutusRoutingModule
  ]
})
export class UserAboutusModule { }
