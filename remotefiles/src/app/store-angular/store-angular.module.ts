import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreAngularRoutingModule } from './store-angular-routing.module';
import { UserAboutusModule } from './user-aboutus/user-aboutus.module';
import { UserAccountModule } from './user-account/user-account.module';
import { UserBlogModule } from './user-blog/user-blog.module';
import { UserContactsModule } from './user-contacts/user-contacts.module';
import { UserServicesModule } from './user-services/user-services.module';
import { UserSupportModule } from './user-support/user-support.module';
import { UserEmailServicesModule } from './user-email-services/user-email-services.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreAngularRoutingModule,
    UserAboutusModule,
    UserAccountModule,
    UserBlogModule,
    UserContactsModule,
    UserServicesModule,
    UserSupportModule,
    UserEmailServicesModule,
    

  ]
})
export class StoreAngularModule { }
