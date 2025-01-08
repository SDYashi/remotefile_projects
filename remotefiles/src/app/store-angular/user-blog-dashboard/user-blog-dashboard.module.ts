import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBlogDashboardRoutingModule } from './user-blog-dashboard-routing.module';
import { UserBlogDashboardComponent } from './user-blog-dashboard/user-blog-dashboard.component';


@NgModule({
  declarations: [
    UserBlogDashboardComponent
  ],
  imports: [
    CommonModule,
    UserBlogDashboardRoutingModule
  ]
})
export class UserBlogDashboardModule { }
