import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserServicesChatTextRoutingModule } from './user-services-chat-text-routing.module';
import { UserServicesChatTextComponent } from './user-services-chat-text/user-services-chat-text.component';


@NgModule({
  declarations: [
    UserServicesChatTextComponent
  ],
  imports: [
    CommonModule,
    UserServicesChatTextRoutingModule
  ]
})
export class UserServicesChatTextModule { }
