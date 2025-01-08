import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreAngularRoutingModule } from './store-angular-routing.module';
import { UserAboutusModule } from './user-aboutus/user-aboutus.module';
import { UserAccountModule } from './user-account/user-account.module';
import { UserBlogModule } from './user-blog/user-blog.module';
import { UserContactsModule } from './user-contacts/user-contacts.module';
import { UserServicesModule } from './user-services/user-services.module';
import { UserSupportModule } from './user-support/user-support.module';
import { StoreComponentsLoadersComponent } from './store-components-loaders.component';
import { UserSerivesHomeComponent } from './user-serives-home/user-serives-home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StoreComponentsLoadersComponent,
    UserSerivesHomeComponent
  ],
  imports: [
    CommonModule,
    StoreAngularRoutingModule,
    UserAboutusModule,
    UserAccountModule,
    UserBlogModule,
    UserContactsModule,
    UserServicesModule,
    UserSupportModule,
    RouterModule,
    FormsModule,
  ]
})
export class StoreAngularModule { }
